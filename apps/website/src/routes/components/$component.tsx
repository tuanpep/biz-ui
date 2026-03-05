import { useParams } from "@tanstack/react-router";
import { Heading, Body } from "biz-ui";
import { getComponentById } from "../../lib/components";
import { getComponentDemo } from "../../lib/component-demos";
import { ComponentPreview } from "../../components/ComponentPreview";
import { CodeBlock } from "../../components/CodeBlock";
import { PropsTable } from "../../components/PropsTable";

export function ComponentDocPage() {
  const { component: componentId } = useParams({
    from: "/components/$component",
  });
  const meta = componentId ? getComponentById(componentId) : null;

  if (!meta) {
    return (
      <div className="p-8">
        <Heading variant="heading-05" className="text-white">
          Component not found
        </Heading>
        <Body variant="body-02" className="text-zinc-400">
          No component with id &quot;{componentId}&quot;
        </Body>
      </div>
    );
  }

  const demo = getComponentDemo(meta.id, meta.name);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Heading variant="heading-05" className="text-white mb-2">
        {meta.name}
      </Heading>
      <Body variant="body-02" className="text-zinc-400 mb-6">
        {meta.description}
      </Body>
      <p className="text-zinc-500 text-sm mb-8">Category: {meta.category}</p>

      <ComponentPreview>{demo.preview}</ComponentPreview>

      <h2 className="text-lg font-semibold text-white mb-2">Usage</h2>
      <CodeBlock code={demo.code} />

      {meta.props && meta.props.length > 0 && (
        <>
          <h2 className="text-lg font-semibold text-white mb-2">Props</h2>
          <PropsTable props={meta.props} />
        </>
      )}
    </div>
  );
}
