import { useState } from "react";
import { View } from "react-native";

import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Text } from "src/components/ui/text";
import { Separator } from "src/components/ui/separator";

export default function Courses() {
  return (
    <Card className="w-full p-6 rounded-2xl">
      <Text>Courses</Text>
    </Card>
  );
}
