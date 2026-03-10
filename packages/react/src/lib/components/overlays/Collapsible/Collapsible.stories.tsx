import type { Meta, StoryObj } from "@storybook/react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./Collapsible";
import { Button } from "../../forms/Button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Overlays/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronRight
                className={`h-4 w-4 transition-transform duration-200 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const Uncontrolled: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <span>Can I use this in my project?</span>
          <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border p-4 text-sm text-muted-foreground">
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const FaqList: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      {[
        {
          question: "What is Biz UI?",
          answer:
            "Biz UI is a comprehensive React component library built with Radix UI and Tailwind CSS.",
        },
        {
          question: "How do I install Biz UI?",
          answer:
            "You can install Biz UI using npm or yarn: npm install @cmc-dx/biz-ui",
        },
        {
          question: "Is Biz UI accessible?",
          answer:
            "Yes! Biz UI is built on top of Radix UI, which provides excellent accessibility out of the box.",
        },
        {
          question: "Can I customize the theme?",
          answer:
            "Absolutely! Biz UI uses CSS variables for theming, making it easy to customize colors, spacing, and more.",
        },
      ].map((faq, index) => (
        <Collapsible key={index} className="rounded-lg border">
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-muted/50">
            <span>{faq.question}</span>
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4 text-sm text-muted-foreground">
            {faq.answer}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  ),
};

export const Nested: Story = {
  render: () => (
    <Collapsible className="w-[400px] space-y-2 rounded-lg border p-4">
      <CollapsibleTrigger className="flex w-full items-center justify-between font-semibold">
        <span>Getting Started</span>
        <ChevronRight className="h-4 w-4 transition-transform duration-200" />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 pl-4">
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <span>Installation</span>
            <ChevronRight className="h-3 w-3" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 text-sm text-muted-foreground">
            <p className="py-2">npm install @cmc-dx/biz-ui</p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <span>Quick Start</span>
            <ChevronRight className="h-3 w-3" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 text-sm text-muted-foreground">
            <p className="py-2">Import components and start building!</p>
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const SettingsPanel: Story = {
  render: function Render() {
    const [expandedSections, setExpandedSections] = useState<string[]>([
      "profile",
    ]);

    const toggleSection = (section: string) => {
      setExpandedSections((prev) =>
        prev.includes(section)
          ? prev.filter((s) => s !== section)
          : [...prev, section],
      );
    };

    return (
      <div className="w-[350px] space-y-2">
        <h3 className="text-lg font-semibold mb-4">Settings</h3>

        <Collapsible
          open={expandedSections.includes("profile")}
          onOpenChange={() => toggleSection("profile")}
          className="rounded-lg border"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/50">
            <span className="font-medium">Profile</span>
            <ChevronRight
              className={`h-4 w-4 transition-transform ${
                expandedSections.includes("profile") ? "rotate-90" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-0 space-y-3">
            <div className="text-sm">Name: John Doe</div>
            <div className="text-sm">Email: john@example.com</div>
            <div className="text-sm">Role: Developer</div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          open={expandedSections.includes("notifications")}
          onOpenChange={() => toggleSection("notifications")}
          className="rounded-lg border"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/50">
            <span className="font-medium">Notifications</span>
            <ChevronRight
              className={`h-4 w-4 transition-transform ${
                expandedSections.includes("notifications") ? "rotate-90" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-0 space-y-3">
            <div className="text-sm">Email notifications: Enabled</div>
            <div className="text-sm">Push notifications: Disabled</div>
            <div className="text-sm">SMS notifications: Disabled</div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          open={expandedSections.includes("security")}
          onOpenChange={() => toggleSection("security")}
          className="rounded-lg border"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/50">
            <span className="font-medium">Security</span>
            <ChevronRight
              className={`h-4 w-4 transition-transform ${
                expandedSections.includes("security") ? "rotate-90" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-0 space-y-3">
            <div className="text-sm">2FA: Enabled</div>
            <div className="text-sm">Last login: 2 hours ago</div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};
