import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const HookedToast = () => {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      }}
    >
      Add to calendar
    </Button>
  );
};

const meta: Meta<typeof HookedToast> = {
  component: HookedToast,
};
export default meta;
type Story = StoryObj<typeof HookedToast>;

export const Primary: Story = {
  render: () => <HookedToast />,
};
