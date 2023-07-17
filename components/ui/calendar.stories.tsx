import { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@/components/ui/calendar";
import * as React from "react";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const CalendarWithHooks = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};

export const Primary: Story = {
  render: () => <CalendarWithHooks />,
};
