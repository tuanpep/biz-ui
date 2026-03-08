/**
 * Rollup Configuration for Biz UI
 *
 * This configuration preserves module structure for better tree-shaking,
 * similar to Carbon's approach. Each component remains as a separate file
 * in the dist folder.
 *
 * Key features:
 * - preserveModules: Keeps source file structure in output
 * - 'use client' directive preserved for RSC support
 * - Dual ESM/CJS output
 * - TypeScript declaration generation
 */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import glob from 'fast-glob';

const banner = `/**
 * Biz UI - React Component Library
 *
 * Copyright (c) 2024 Biz UI Contributors
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;

// External dependencies - don't bundle these
const external = [
  // React
  'react',
  'react-dom',
  /^react\//,
  /^react-dom\//,

  // Radix UI
  /^@radix-ui\//,

  // Utilities
  'clsx',
  'tailwind-merge',
  'class-variance-authority',
  'date-fns',
  /^lucide-react/,
];

// Get all TypeScript files as entry points for true module preservation
const entryPoints = glob.sync('src/**/*.{ts,tsx}', {
  ignore: ['src/**/*.spec.ts', 'src/**/*.spec.tsx', 'src/**/*.test.ts', 'src/**/*.test.tsx', 'src/**/*.stories.ts', 'src/**/*.stories.tsx', 'src/**/__tests__/**', 'src/**/__stories__/**']
}).reduce((entries, file) => {
  // Convert file path to entry name: src/lib/components/Button/Button.tsx -> lib/components/Button/Button
  const name = file.replace(/^src\//, '').replace(/\.tsx?$/, '');
  entries[name] = file;
  return entries;
}, {});

// Add the main index file
entryPoints['index'] = 'src/index.ts';

// ESM plugins
const esmPlugins = [
  resolve({
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  }),
  commonjs({
    include: /node_modules/,
  }),
  typescript({
    tsconfig: './tsconfig.json',
    noEmitOnError: true,
    declaration: true,
    declarationDir: './dist',
    outDir: './dist',
  }),
  preserveDirectives({
    suppressPreserveModulesWarning: true,
  }),
];

// CJS plugins (no declaration files)
const cjsPlugins = [
  resolve({
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  }),
  commonjs({
    include: /node_modules/,
  }),
  typescript({
    tsconfig: './tsconfig.json',
    noEmitOnError: true,
    declaration: false,
    declarationMap: false,
  }),
  preserveDirectives({
    suppressPreserveModulesWarning: true,
  }),
];

// Suppress module directive warnings
const onwarn = (warning, warn) => {
  if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
    return;
  }
  warn(warning);
};

export default [
  // ESM build - outputs .mjs files with preserved structure
  {
    input: entryPoints,
    external,
    plugins: esmPlugins,
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      banner,
      sourcemap: true,
      exports: 'named',
      entryFileNames: '[name].mjs',
    },
    onwarn,
  },
  // CJS build - outputs .js files with preserved structure
  {
    input: entryPoints,
    external,
    plugins: cjsPlugins,
    output: {
      dir: 'dist',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      banner,
      sourcemap: true,
      exports: 'named',
      entryFileNames: '[name].js',
    },
    onwarn,
  },
];
