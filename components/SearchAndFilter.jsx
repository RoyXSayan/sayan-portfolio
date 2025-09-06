"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Tag, Search } from "lucide-react";

const SearchAndFilter = ({ search, setSearch, filter, setFilter, filterOptions }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 w-full">
      {/* Search Input with Icon */}
      <div className="relative w-full md:w-[460px]">
        <Input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 text-white bg-[#1b1b1d] border border-white/10 w-full"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/50" />
      </div>

      {/* Filter Select */}
      <div className="flex items-center gap-2">
        <Tag className="text-white/50 h-5 w-5" />
        <span className="text-white/70 text-sm hidden sm:inline">Filter by:</span>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[160px] bg-[#1b1b1d] text-white border border-white/10">
            <SelectValue placeholder="All Tags" />
          </SelectTrigger>
          <SelectContent className="bg-[#1b1b1d] text-white">
            {filterOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
