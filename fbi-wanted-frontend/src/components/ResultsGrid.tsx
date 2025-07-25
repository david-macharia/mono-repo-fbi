import React, { useState } from "react";
import PersonImage from "./PersonImage";

const ResultsGrid = ({
  results,
  onSelect,
}: {
  results: any[];
  onSelect: (person: any) => void;
}) => {
  if (!results || results.length === 0) return null;

  const placeholder = "https://via.placeholder.com/150";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [brokenIndexes, setBrokenIndexes] = useState<Set<number>>(new Set());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {results.map((person: any) => {
        const images =
          person.images?.length > 0 ? person.images : [person.image];

        const handleDotClick = (index: number, e: React.MouseEvent) => {
          e.stopPropagation();
          setCurrentIndex(index);
        };

        const handleImageError = (index: number) => {
          setBrokenIndexes((prev) => new Set(prev).add(index));
        };

        const currentImage =
          brokenIndexes.has(currentIndex) || !images[currentIndex]
            ? placeholder
            : images[currentIndex];

        return (
          <div
            key={person.id}
            onClick={() => onSelect(person)}
            className="cursor-pointer bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-52 bg-white-100">
              <PersonImage src={currentImage} alt={person.name} />

              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                {images.map((_, index) => (
                  <span
                    key={index}
                    onClick={(e) => handleDotClick(index, e)}
                    className={`h-2 w-2 rounded-full cursor-pointer ${
                      index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-1 truncate">
                {person.name}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3 mb-2">
                {person.description}
              </p>

              {person.aliases?.length > 0 && (
                <p className="text-xs text-gray-500 mb-1">
                  <span className="font-semibold">Aliases:</span>{" "}
                  {person.aliases.join(", ")}
                </p>
              )}

              <div className="text-xs text-gray-500 space-y-1">
                {person.sex && (
                  <p>
                    <strong>Sex:</strong> {person.sex}
                  </p>
                )}
                {person.race && (
                  <p>
                    <strong>Race:</strong> {person.race}
                  </p>
                )}
                {person.nationality && (
                  <p>
                    <strong>Nationality:</strong> {person.nationality}
                  </p>
                )}
                {person.reward_text && (
                  <p className="text-green-600">
                    <strong>Reward:</strong> {person.reward_text}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultsGrid;
