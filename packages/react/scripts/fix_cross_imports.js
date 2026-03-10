const fs = require('fs');
const path = require('path');

const componentsDir = '/home/tuanbt/opensource/biz-ui/packages/ui/src/lib/components';

// Map component name to its category
const categoryMap = {};
const categories = ['layout', 'forms', 'navigation', 'feedback', 'data-display', 'overlays'];

categories.forEach(cat => {
    const catPath = path.join(componentsDir, cat);
    if (fs.existsSync(catPath)) {
        const comps = fs.readdirSync(catPath);
        comps.forEach(c => {
            // Assuming directories
            if (fs.statSync(path.join(catPath, c)).isDirectory()) {
                categoryMap[c] = cat;
            }
        });
    }
});

const getPascalCase = (str) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
};

const walk = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;

            // The file is currently inside componentsDir / Category / ComponentName / file
            // If we see `from '../ComponentName'`, where does it point to now?
            // Since it's inside Category/ComponentName, `../` points to Category.
            // So `from '../Button'` means it's looking for Button inside the same Category.
            // If the component is in a DIFFERENT category, we need `from '../../OtherCategory/OtherComponent'`
            // If it's in the SAME category, `from '../OtherComponent'` is perfectly fine, OR `from '../../SameCategory/OtherComponent'`, or `from '../OtherComponent'`.

            const currentCategory = path.basename(path.dirname(path.dirname(fullPath)));

            const regex1 = /from\s+['"]\.\.\/([a-zA-Z0-9-]+)['"]/g;
            content = content.replace(regex1, (match, p1) => {
                let pascal = p1;
                if (p1.match(/^[a-z0-9-]+$/)) {
                    pascal = getPascalCase(p1);
                }

                const targetCategory = categoryMap[pascal];
                if (!targetCategory) return match; // unknown, preserve

                changed = true;
                if (targetCategory === currentCategory) {
                    // It's in the same category directory. So from `Category/ThisComp/file.ts` -> `../OtherComp` still works!
                    return `from '../${pascal}'`;
                } else {
                    // Different category 
                    return `from '../../${targetCategory}/${pascal}'`;
                }
            });

            const regex2 = /from\s+['"]\.\.\/\.\.\/([a-zA-Z0-9-]+)['"]/g;
            content = content.replace(regex2, (match, p1) => {
                let pascal = p1;
                if (p1.match(/^[a-z0-9-]+$/)) {
                    pascal = getPascalCase(p1);
                }

                const targetCategory = categoryMap[pascal];
                if (!targetCategory) return match; // unknown

                changed = true;
                // From `Category/ThisComp/__tests__/file.test.tsx` (but we moved those!)
                // Wait, tests/stories were moved to `Category/ThisComp/`. So `../../Something` is looking at `components/`.
                // If it means `components/Something`, its new path is `../../TargetCategory/Something`.
                return `from '../../${targetCategory}/${pascal}'`;
            });

            if (changed) {
                fs.writeFileSync(fullPath, content);
            }
        }
    }
};

categories.forEach(cat => {
    const catPath = path.join(componentsDir, cat);
    if (fs.existsSync(catPath)) {
        walk(catPath);
    }
});
console.log('Fixed imports cross-categories.');
