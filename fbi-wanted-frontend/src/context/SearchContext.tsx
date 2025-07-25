/* eslint-disable @typescript-eslint/no-explicit-any */
// context/SearchContext.tsx
// context/SearchContext.tsx
import React, { createContext, useContext, useState } from "react";
import type { FilterType } from "../types/filter.type";
import { FBI_API_ENDPOINTS } from "../constants/Api"; // adjust path

type SearchContextType = {
  query: string;
  setQuery: (value: string) => void;
  filters: FilterType;
  setFilters: (value: FilterType) => void;
  page: number;
  setPage: (value: number) => void;
  results: any[];
  total: number;
  loading: boolean;
  selectedPerson: any;
  setSelectedPerson: (person: any) => void;

  fetchResults: () => Promise<void>;
  isDrawerOpen: boolean;
  openDrawer: (person: any) => void;
  closeDrawer: () => void;
};

const defaultFilters: FilterType = {
  title: "",
  field_offices: "",
  race: "",
  hair: "",
  eyes: "",
  sex: "",
  nationality: "",
  poster_classification: "",
  person_classification: "",
  status: "",
  age_min: "",
  age_max: "",
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<FilterType>(defaultFilters);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    setLoading(true); // Start loading
    closeDrawer();
    try {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      if (query) params.append("title", query);

      Object.entries(filters).forEach(([key, value]) => {
        if (value && value.trim() !== "") {
          params.append(key, value);
        }
      });

      const res = await fetch(`${FBI_API_ENDPOINTS.WANTED_LIST}?${params}`);
      const data = await res.json();
      setResults(data.results);
      setTotal(data.total);
    } catch (err) {
      console.error("Error fetching results", err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const openDrawer = (person) => {
    setSelectedPerson(person);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelectedPerson(null);
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        filters,
        setFilters,
        page,
        setPage,
        results,
        total,
        fetchResults,
        loading,
        selectedPerson,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        setSelectedPerson,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("useSearchContext must be used within a SearchProvider");
  return context;
};
