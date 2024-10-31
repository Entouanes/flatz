import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { get } from "http";
import { access } from "fs/promises";

async function getSuggestions(query: string, token: string) {
  const url = new URL(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`
  );
  url.searchParams.append("access_token", token);

  const response = await fetch(url.toString(), {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

const SearchSuggestion = (props: { setAddress: any; access_token: string }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [suggestions, setSuggestions] = useState<any>([]);

  const { setAddress, access_token } = props;

  const handleChange = () => (event: any) => {
    const query = event.target.value;
    getSuggestions(query, access_token).then((data) =>
      setSuggestions(data.features)
    );
    console.log(suggestions);
  };

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[25rem] justify-between font-normal overflow truncate"
          >
            {value === "" ? "Select address..." : value}
            <SearchIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[25rem] p-0">
          <Command>
            <CommandInput
              placeholder="Search address..."
              onChangeCapture={handleChange()}
            />
            <CommandList>
              <CommandEmpty>No address found.</CommandEmpty>
              <CommandGroup>
                {suggestions.map((suggestion: any) => (
                  <CommandItem
                    key={suggestion.place_name}
                    value={suggestion.place_name}
                    onSelect={(currentValue: React.SetStateAction<string>) => {
                      setValue(currentValue);
                      setOpen(false);
                      console.log(currentValue);
                    }}
                  >
                    {suggestion.place_name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SearchSuggestion;
