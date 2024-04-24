"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect } from "react";
import { Input } from "@/components/ui/input";
export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  const [debouncedSearch, setDebouncedSearch] = useDebounceValue("", 500);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setDebouncedSearch(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedSearch,
          favorites,
        },
      },
      { skipEmptyString: true, skipNull: true },
    );
    router.push(url);
  }, [debouncedSearch, router, favorites]);
  return (
    <div className={"relative w-full"}>
      <label htmlFor="search">
        <Search
          className={
            "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          }
        />
      </label>
      <Input
        id={"search"}
        placeholder={"Lets Search 😎, till you are at C&D"}
  className={"w-full max-w-[516px] pl-9 border-2 border-black rounded"}
        onChange={handleSearch}
      />
    </div>
  );
}
