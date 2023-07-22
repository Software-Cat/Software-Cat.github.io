import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};
