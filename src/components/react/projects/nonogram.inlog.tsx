import { Button } from "@/UI/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/UI/components/card";
import { Input } from "@/UI/components/input";
import { Label } from "@/UI/components/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/UI/components/tabs";
import { useState } from "react";

export function NonoGramInlog() {
  const [userName, setUsername] = useState("");
  const [name, setName] = useState("");

  return (
    <Tabs defaultValue="account" className="not-content">
      <TabsList className="grid w-full grid-cols-3 space-x-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="create_room">Create Room</TabsTrigger>
        <TabsTrigger value="join_room">Join Room</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                defaultValue="Jens"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                defaultValue="@JensDN"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="create_room">
        <Card>
          <CardHeader>
            <CardTitle>Room</CardTitle>
            <CardDescription>
              Create a room. After saving, you'll be redirected.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Create Room</Label>
              <Input id="current" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Create room</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="join_room">
        <Card>
          <CardHeader>
            <CardTitle>Room</CardTitle>
            <CardDescription>
              Join a room. After saving, you'll be redirected.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="new">Join room </Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Join Room</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
