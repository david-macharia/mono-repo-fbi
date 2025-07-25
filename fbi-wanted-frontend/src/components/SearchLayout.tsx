import React, { useEffect } from "react";
import { useSearchContext } from "../context/SearchContext";
import ResultsGrid from "../components/ResultsGrid";
import Pagination from "../components/Pagination";
import SideFilters from "./SideFilters";
import DetailsDrawer from "./DetailsDrawer";

const SearchLayout = () => {
  const {
    query,
    setQuery,
    filters,
    setFilters,
    page,
    setPage,
    results,
    total,
    loading,
    fetchResults,
    closeDrawer,
    selectedPerson,
    setSelectedPerson,
  } = useSearchContext();

  useEffect(() => {
    const noQuery = !query || query.trim() === "";
    const noFilters = Object.values(filters).every((val) => val.trim() === "");

    if (noQuery && noFilters) {
      fetchResults();
    }
  }, [page, query, filters]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 relative">
      {/* <TopSearchBar query={query} setQuery={setQuery} /> */}

      <div className="flex flex-1 overflow-hidden">
        <div className="w-full md:w-1/4 p-4 bg-white border-r overflow-y-auto md:max-h-[calc(100vh-4rem)]">
          <SideFilters filters={filters} setFilters={setFilters} />
        </div>

        <div className="flex flex-col w-full md:w-3/4 p-4 md:max-h-[calc(100vh-5rem)] overflow-hidden">
          <div className="flex-1 overflow-y-auto relative">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : results.length === 0 ? (
              <div className="h-full flex items-center justify-center text-center text-gray-500 p-6">
                <p className="text-lg">
                  No results found. Try expanding your filters like{" "}
                  <strong>name</strong>, <strong>race</strong>, or{" "}
                  <strong>field office</strong>.
                </p>
              </div>
            ) : (
              <ResultsGrid results={results} onSelect={setSelectedPerson} />
            )}
          </div>

          {total > 20 && !loading && (
            <div className="mt-4">
              <Pagination
                page={page}
                totalPages={Math.ceil(total / 20)}
                onPageChange={setPage}
              />
            </div>
          )}
        </div>
      </div>

      {/* Side Drawer */}
      {selectedPerson && (
        <DetailsDrawer person={selectedPerson} onClose={() => closeDrawer()} />
      )}
    </div>
  );
};

export default SearchLayout;
