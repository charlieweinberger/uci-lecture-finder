import { useState } from "react";
import { View } from "react-native";
// import MapView from 'react-native-maps';

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

export default function UCIMap() {
  return (
    <Card className="w-full p-6 rounded-2xl">
      <Text>Map</Text>
    </Card>
  );
};

/*

https://github.com/Krazete/antscoper

https://leafletjs.com/
https://www.openstreetmap.org/copyright

*/