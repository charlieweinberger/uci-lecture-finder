import { Button } from "src/components/ui/button";
import { Card } from "src/components/ui/card";
import { Text } from "src/components/ui/text";
import { Separator } from "src/components/ui/separator";

export default function SearchBy({ setShowFilters, setShowMap }: {
  setShowFilters: (value: boolean) => void,
  setShowMap: (value: boolean) => void
}) {
  return (
    <Card className="w-full rounded-2xl flex flex-row justify-center">
      <Button
        variant="ghost"
        className="h-14 flex flex-1 flex-row justify-center rounded-l-xl rounded-r-none hover:bg-primary/10"
        onPress={() => {
          setShowFilters(true)
          setShowMap(false)
        }}
      >
        <Text>Search By Filters</Text>
      </Button>
      <Separator orientation="vertical" />
      <Button
        variant="ghost"
        className="h-14 flex-1 justify-center rounded-r-xl rounded-l-none hover:bg-primary/10"
        onPress={() => {
          setShowFilters(false)
          setShowMap(true)
        }}
      >
        <Text>Search By Map</Text>
      </Button>
    </Card>
  );
}
