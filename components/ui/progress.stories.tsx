import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const meta: Meta<typeof Progress> = {
  component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;

const HookedProgress = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
};

export const Primary: Story = {
  render: () => <HookedProgress />,
};
