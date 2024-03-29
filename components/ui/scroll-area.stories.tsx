import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const meta: Meta<typeof ScrollArea> = {
  component: ScrollArea,
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export const Primary: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag, i) => (
          <React.Fragment key={i}>
            <div className="text-sm" key={tag}>
              {tag}
            </div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  ),
};
