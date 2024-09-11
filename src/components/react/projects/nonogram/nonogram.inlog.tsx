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
import { useState, type ChangeEvent } from "react";

function NonogramAccount({
  onSaveForm,
}: {
  onSaveForm: (formData: { username: string; name: string }) => void;
}) {
  const [formData, setFormData] = useState({ name: "", username: "" });
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
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
            value={formData.name}
            name="name"
            onChange={handleFormChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleFormChange}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onSaveForm(formData)}>Save changes</Button>
      </CardFooter>
    </Card>
  );
}
function NonogramCreateRoom() {
  return (
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
  );
}

function NonoGramJoinRoom() {
  return (
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
  );
}
export function NonoGramInlog() {
  const test = (formData: { username: string; name: string }) => {
    console.log(formData, "parent");
  };
  return (
    <Tabs defaultValue="account" className="not-content">
      <TabsList className="grid w-full grid-cols-3 space-x-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="create_room">Create Room</TabsTrigger>
        <TabsTrigger value="join_room">Join Room</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <NonogramAccount onSaveForm={test}></NonogramAccount>
      </TabsContent>
      <TabsContent value="create_room">
        <NonogramCreateRoom></NonogramCreateRoom>
      </TabsContent>
      <TabsContent value="join_room"></TabsContent>
    </Tabs>
  );
}
