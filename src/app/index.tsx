import { useState } from "react";
import { View } from "react-native";

import SearchBy from "src/components/SearchBy";
import Filters from "src/components/Filters";
import Map from "src/components/Map";
import Courses from "src/components/Courses";

export default function App() {
  const [ showFilters, setShowFilters ] = useState(true);
  const [ showMap, setShowMap ] = useState(false);

  return (
    <View className="h-full flex flex-col items-center justify-center gap-6 p-6 bg-secondary/30">
      <SearchBy setShowFilters={setShowFilters} setShowMap={setShowMap} />
      {showFilters && <Filters />}
      {showMap && <Map />}
      <Courses />
    </View>
  );
}
