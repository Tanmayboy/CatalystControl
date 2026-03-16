import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">
            Manage your account settings and preferences.
            </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
            <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
            <Card>
                <CardHeader>
                <CardTitle>General</CardTitle>
                <CardDescription>
                    Update your general account settings.
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@olivia.martin" />
                    <p className="text-sm text-muted-foreground">This is your public display name.</p>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                    <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
                </CardFooter>
            </Card>
            </TabsContent>

            <TabsContent value="notifications">
            <Card>
                <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                    Choose what you want to be notified about.
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <Checkbox id="marketing-emails" defaultChecked />
                        <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="marketing-emails">Marketing emails</Label>
                            <p className="text-sm text-muted-foreground">Receive emails about new products, features, and more.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <Checkbox id="security-emails" />
                        <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="security-emails">Security emails</Label>
                            <p className="text-sm text-muted-foreground">Receive emails about your account security.</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                <Button>Save preferences</Button>
                </CardFooter>
            </Card>
            </TabsContent>

            <TabsContent value="advanced">
                <Card>
                    <CardHeader>
                        <CardTitle>Advanced</CardTitle>
                        <CardDescription>
                            Manage advanced account settings.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <Card className="border-destructive">
                        <CardHeader>
                            <CardTitle className="text-base text-destructive">Delete Account</CardTitle>
                            <CardDescription>
                            Permanently delete your account and all associated data. This action cannot be undone.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-start">
                            <Button variant="destructive">Delete Account</Button>
                        </CardFooter>
                    </Card>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  );
}
