import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bold, CalendarDays } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

const cardContents = [
  <CardContent className="p-0 space-y-2">
    <Label htmlFor="name">Name</Label>
    <Input type="name" id="name" placeholder="Bowen Wu" />
  </CardContent>,
  <CardContent className="p-0">
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an interest" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Interests</SelectLabel>
          <SelectItem value="apple">Programming</SelectItem>
          <SelectItem value="banana">Mathematics</SelectItem>
          <SelectItem value="blueberry">Chemistry</SelectItem>
          <SelectItem value="grapes">YouTube</SelectItem>
          <SelectItem value="pineapple">Photoshop</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </CardContent>,
  <CardContent className="py-8">
    <Slider defaultValue={[50]} max={100} step={1} className="w-[100%]" />
  </CardContent>,
  <CardContent className="p-0 flex items-center space-x-2">
    <Switch id="airplane-mode" checked={true} />
    <Label htmlFor="airplane-mode">Hard Mode</Label>
  </CardContent>,
  <CardContent className="p-0 space-y-2">
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  </CardContent>,
  <CardContent className="p-0 space-y-2">
    <Avatar>
      <AvatarImage src="https://github.com/software-cat.png" alt="@shadcn" />
      <AvatarFallback>CT</AvatarFallback>
    </Avatar>
  </CardContent>,
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-[30vh] py-24">
      <div className="flex flex-row gap-10 items-center justify-between">
        <Card className="border-0 p-0 basis-1/2">
          <CardHeader className="px-0">
            <CardTitle className="text-8xl font-extrabold">
              Hello there
              <br />
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-600 to-pink-900">
                Bowen Wu.
              </span>
            </CardTitle>
            <CardDescription className="text-2xl">
              I'm a student, software developer, musician, and everything in
              between. My <code>big goal</code> right now is to get into the{" "}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 text-2xl">
                    Doctor of Medicine degree at UNSW.
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@unsw</h4>
                      <p className="text-sm">University of New South Wales</p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          I was a ProgComp 2023 Finalist
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>{" "}
              Here's what I've been up to.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="basis-1/2 grid grid-flow-col grid-rows-2 grid-cols-3 gap-x-8 gap-y-24">
          {cardContents.map((item, i) => (
            <Card className="border-0" key={i}>
              {item}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
