import { Meta, StoryObj } from "@storybook/react";
import { ComboboxDemo } from "@/components/ui/combobox";

const meta: Meta<typeof ComboboxDemo> = {
  component: ComboboxDemo,
};

export default meta;
type Story = StoryObj<typeof ComboboxDemo>;

export const Primary: Story = {
  render: () => <ComboboxDemo />,
};
