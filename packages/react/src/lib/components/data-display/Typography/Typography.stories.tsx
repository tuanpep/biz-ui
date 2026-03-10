import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Body, TypographyLabel, HelperText, Code } from "./Typography";

const meta: Meta = {
  title: "Components/Data Display/Typography",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-10 w-[600px]">
      <section className="space-y-4">
        <h3 className="text-xl font-bold border-b pb-2">Headings</h3>
        <Heading variant="heading-07">Heading 07</Heading>
        <Heading variant="heading-06">Heading 06</Heading>
        <Heading variant="heading-05">Heading 05</Heading>
        <Heading variant="heading-04">Heading 04</Heading>
        <Heading variant="heading-03">Heading 03</Heading>
        <Heading variant="heading-02">Heading 02</Heading>
        <Heading variant="heading-01">Heading 01</Heading>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold border-b pb-2">Body</h3>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-muted-foreground">
            Body 01 (14px/20px)
          </p>
          <Body variant="body-01">
            The quick brown fox jumps over the lazy dog. Biz UI is a powerful
            component library for building modern web applications.
          </Body>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-muted-foreground">
            Body 02 (16px/24px)
          </p>
          <Body variant="body-02">
            The quick brown fox jumps over the lazy dog. Biz UI is a powerful
            component library for building modern web applications.
          </Body>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold border-b pb-2">
          Labels & Helper Text
        </h3>
        <div className="flex flex-col gap-2">
          <TypographyLabel variant="label-01">Label 01 (12px)</TypographyLabel>
          <TypographyLabel variant="label-02">Label 02 (14px)</TypographyLabel>
          <HelperText variant="helper-text-01">
            Helper text 01 (12px)
          </HelperText>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold border-b pb-2">Code</h3>
        <div className="space-y-2">
          <div>
            <Code variant="code-01">const x = 1; // code-01 (12px)</Code>
          </div>
          <div>
            <Code variant="code-02">const y = 2; // code-02 (14px)</Code>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const HeadingsList: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading variant="heading-07">Heading 07 (30px)</Heading>
      <Heading variant="heading-06">Heading 06 (24px)</Heading>
      <Heading variant="heading-05">Heading 05 (20px)</Heading>
      <Heading variant="heading-04">Heading 04 (18px)</Heading>
      <Heading variant="heading-03" as="h1">
        Heading 03 (16px - Used as H1)
      </Heading>
      <Heading variant="heading-02">Heading 02 (14px)</Heading>
      <Heading variant="heading-01">Heading 01 (12px)</Heading>
    </div>
  ),
};

export const BodyVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-prose">
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Body 01
        </h4>
        <Body variant="body-01">
          This is body-01 text. It&apos;s meant for smaller body copy and
          standard UI elements. It follows Biz UI type scale for optimal
          readability.
        </Body>
      </div>
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Body 02
        </h4>
        <Body variant="body-02">
          This is body-02 text. It&apos;s larger and often used for longer
          content blocks where better readability and more white space are
          desired.
        </Body>
      </div>
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Body Compact 01
        </h4>
        <Body variant="body-compact-01">
          This is body-compact-01 text. It has reduced line height (14px/16px)
          for tight UI areas like tables or sidebars.
        </Body>
      </div>
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Body Compact 02
        </h4>
        <Body variant="body-compact-02">
          This is body-compact-02 text. It has reduced line height (16px/20px)
          for tight UI areas where a larger font is needed.
        </Body>
      </div>
    </div>
  ),
};
