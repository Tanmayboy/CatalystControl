'use client'

import * as React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { ToastAction } from '@/components/ui/toast'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useToast } from '@/hooks/use-toast'
import { Terminal } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const ComponentsPage = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [progress, setProgress] = React.useState(13)
    const [sliderValue, setSliderValue] = React.useState([50])
    const [switchChecked, setSwitchChecked] = React.useState(false)
    const { toast } = useToast()
    const userAvatar = PlaceHolderImages.find(p => p.id === 'avatar-10')

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
      }, [])

    return (
        <div className="grid gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Components</CardTitle>
                    <CardDescription>A showcase of all the components available in this template.</CardDescription>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Accordion */}
                <Card>
                    <CardHeader><CardTitle>Accordion</CardTitle></CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it styled?</AccordionTrigger>
                                <AccordionContent>Yes. It comes with default styles that match the rest of the components.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
                
                {/* Alert & Alert Dialog */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle>Alert</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <Alert>
                                <Terminal className="h-4 w-4" />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>You can add components to your app using the cli.</AlertDescription>
                            </Alert>
                            <Alert variant="destructive">
                                <Terminal className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
                            </Alert>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle>Alert Dialog</CardTitle></CardHeader>
                        <CardContent>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="outline">Show Dialog</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </CardContent>
                    </Card>
                </div>
                
                {/* Avatar & Badge */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle>Avatar</CardTitle></CardHeader>
                        <CardContent>
                            <Avatar>
                                <AvatarImage src={userAvatar?.imageUrl} alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Badge</CardTitle></CardHeader>
                        <CardContent className="flex gap-2">
                            <Badge>Default</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="destructive">Destructive</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </CardContent>
                    </Card>
                </div>

                {/* Button & Calendar */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle>Button</CardTitle></CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            <Button>Default</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle>Calendar</CardTitle></CardHeader>
                        <CardContent className="flex justify-center">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border"
                            />
                        </CardContent>
                    </Card>
                </div>

                {/* Checkbox, Collapsible, Dialog */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle>Checkbox</CardTitle></CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label htmlFor="terms">Accept terms and conditions</label>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Collapsible</CardTitle></CardHeader>
                        <CardContent>
                            <Collapsible>
                                <CollapsibleTrigger asChild><Button>Toggle</Button></CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="mt-4 rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                                        @radix-ui/react-collapsible
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Dialog</CardTitle></CardHeader>
                        <CardContent>
                            <Dialog>
                                <DialogTrigger asChild><Button variant="outline">Open Dialog</Button></DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Dialog Title</DialogTitle>
                                        <DialogDescription>This is a dialog.</DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </CardContent>
                    </Card>
                </div>

                {/* DropdownMenu, Menubar, Pagination */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle>Dropdown Menu</CardTitle></CardHeader>
                        <CardContent>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild><Button variant="outline">Open Menu</Button></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Menubar</CardTitle></CardHeader>
                        <CardContent>
                             <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger>File</MenubarTrigger>
                                    <MenubarContent>
                                    <MenubarItem>New Tab</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Share</MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        </CardContent>
                    </Card>
                </div>
                
                 {/* Popover, Progress, RadioGroup */}
                 <div className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle>Popover</CardTitle></CardHeader>
                        <CardContent>
                            <Popover>
                                <PopoverTrigger asChild><Button variant="outline">Open popover</Button></PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <p>This is a popover.</p>
                                </PopoverContent>
                            </Popover>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Progress</CardTitle></CardHeader>
                        <CardContent>
                            <Progress value={progress} />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Radio Group</CardTitle></CardHeader>
                        <CardContent>
                            <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label htmlFor="r1">Default</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label htmlFor="r2">Comfortable</Label>
                                </div>
                            </RadioGroup>
                        </CardContent>
                    </Card>
                 </div>

                 {/* ScrollArea, Select, Separator */}
                 <div className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle>Scroll Area</CardTitle></CardHeader>
                        <CardContent className="flex justify-center">
                            <ScrollArea className="h-32 w-48 rounded-md border">
                                <div className="p-4">Content that scrolls. A lot of content to demonstrate scrolling. More content. And more. And more.</div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Select</CardTitle></CardHeader>
                        <CardContent>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                </SelectContent>
                            </Select>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader><CardTitle>Separator</CardTitle></CardHeader>
                        <CardContent>
                            <div>
                                <span>Source</span>
                                <Separator className="my-4" />
                                <span>Code</span>
                            </div>
                        </CardContent>
                    </Card>
                 </div>

                 {/* Sheet, Skeleton, Slider */}
                 <div className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle>Sheet</CardTitle></CardHeader>
                        <CardContent>
                             <Sheet>
                                <SheetTrigger asChild><Button variant="outline">Open Sheet</Button></SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Sheet Title</SheetTitle>
                                        <SheetDescription>This is a sheet.</SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader><CardTitle>Skeleton</CardTitle></CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-4">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader><CardTitle>Slider</CardTitle></CardHeader>
                        <CardContent>
                            <Slider
                                defaultValue={sliderValue}
                                max={100}
                                step={1}
                                onValueChange={(value) => setSliderValue(value)}
                            />
                        </CardContent>
                    </Card>
                 </div>

                {/* Switch, Table, Tabs, Textarea, Toast, Tooltip */}
                <div className="space-y-6">
                     <Card>
                        <CardHeader><CardTitle>Switch</CardTitle></CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-2">
                                <Switch id="airplane-mode" checked={switchChecked} onCheckedChange={setSwitchChecked}/>
                                <Label htmlFor="airplane-mode">Airplane Mode</Label>
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader><CardTitle>Table</CardTitle></CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                    <TableHead>Header</TableHead>
                                    <TableHead>Header</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                    <TableCell>Cell</TableCell>
                                    <TableCell>Cell</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Tabs</CardTitle></CardHeader>
                        <CardContent>
                            <Tabs defaultValue="account">
                                <TabsList>
                                    <TabsTrigger value="account">Account</TabsTrigger>
                                    <TabsTrigger value="password">Password</TabsTrigger>
                                </TabsList>
                                <TabsContent value="account">Account content.</TabsContent>
                                <TabsContent value="password">Password content.</TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Textarea</CardTitle></CardHeader>
                        <CardContent>
                             <Textarea placeholder="Type your message here." />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Toast</CardTitle></CardHeader>
                        <CardContent>
                            <Button
                                variant="outline"
                                onClick={() => {
                                toast({
                                    title: "Scheduled: Catch up ",
                                    description: "Friday, February 10, 2023 at 5:57 PM",
                                    action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
                                })
                                }}
                            >
                                Show Toast
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Tooltip</CardTitle></CardHeader>
                        <CardContent>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild><Button variant="outline">Hover</Button></TooltipTrigger>
                                    <TooltipContent>
                                    <p>Add to library</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ComponentsPage;
