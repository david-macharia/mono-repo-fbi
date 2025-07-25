import React from "react";
import { useSearchContext } from "../context/SearchContext";

const inputFields = [
  { label: "Title", key: "title", type: "text" },
  { label: "Field Offices", key: "field_offices", type: "text" },
  { label: "Race", key: "race", type: "text" },
  {
    label: "Hair",
    key: "hair",
    type: "dropdown",
    options: ["Black", "Brown", "Blonde", "Gray", "Other"],
  },
  {
    label: "Eyes",
    key: "eyes",
    type: "dropdown",
    options: ["Black", "Blue", "Brown", "Green", "Hazel"],
  },
  {
    label: "Sex",
    key: "sex",
    type: "dropdown",
    options: ["Male", "Female", "Unknown"],
  },
  { label: "Nationality", key: "nationality", type: "text" },
  {
    label: "Poster Classification",
    key: "poster_classification",
    type: "dropdown",
    options: ["Wanted", "Missing", "Unknown"],
  },
  {
    label: "Person Classification",
    key: "person_classification",
    type: "dropdown",
    options: ["Adult", "Juvenile"],
  },
  {
    label: "Status",
    key: "status",
    type: "dropdown",
    options: ["Captured", "At Large", "Unknown"],
  },
  { label: "Age Min", key: "age_min", type: "number" },
  { label: "Age Max", key: "age_max", type: "number" },
];

const SideFilters = () => {
  const { filters, setFilters, fetchResults, setPage } = useSearchContext();

  const handleChange = (key: string, value: string) => {
    setPage(1);
    setFilters((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 ml-80">Filters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {inputFields.map(({ label, key, type, options }) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            {type === "dropdown" && options ? (
              <select
                value={filters[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm"
              >
                <option value="">-- Any --</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                value={filters[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                placeholder={`Enter ${label.toLowerCase()}...`}
                className="w-full p-2 border border-gray-300 rounded text-sm"
              />
            )}
          </div>
        ))}
      </div>

      <button
        onClick={fetchResults}
        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default SideFilters;
