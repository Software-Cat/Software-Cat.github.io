import {Meta, StoryObj} from "@storybook/react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Terminal} from "lucide-react";

const meta: Meta<typeof Alert> = {
    component: Alert
}

export default meta;
type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
    render: () => <Alert>
        <Terminal className="h-4 w-4"/>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
            You can add components to your app using the cli.
        </AlertDescription>
    </Alert>
}