import React from "react";
import PersonImage from "./PersonImage";
import TipComponent from "./TipComponent";

const DetailsDrawer = ({
  person,
  onClose,
}: {
  person: any;
  onClose: () => void;
}) => {
  return (
    <div className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">{person.title || person.name}</h2>
        <button onClick={onClose} className="text-red-500 text-xl font-bold">
          &times;
        </button>
      </div>

      <div className="p-4 overflow-y-auto max-h-[90vh] space-y-4">
        <PersonImage
          src={person.images?.[0]?.original || person.image}
          alt={person.name}
        />

        <div className="space-y-2 text-sm text-gray-700">
          {person.description && (
            <p>
              <strong>Description:</strong> {person.description}
            </p>
          )}
          {person.aliases?.length > 0 && (
            <p>
              <strong>Aliases:</strong> {person.aliases.join(", ")}
            </p>
          )}
          {person.race && (
            <p>
              <strong>Race:</strong> {person.race}
            </p>
          )}
          {person.sex && (
            <p>
              <strong>Sex:</strong> {person.sex}
            </p>
          )}
          {person.nationality && (
            <p>
              <strong>Nationality:</strong> {person.nationality}
            </p>
          )}
          {person.hair && (
            <p>
              <strong>Hair:</strong> {person.hair}
            </p>
          )}
          {person.eyes && (
            <p>
              <strong>Eyes:</strong> {person.eyes}
            </p>
          )}
          {person.height_min && person.height_max && (
            <p>
              <strong>Height:</strong> {person.height_min} - {person.height_max}{" "}
              inches
            </p>
          )}
          {person.weight_min && person.weight_max && (
            <p>
              <strong>Weight:</strong> {person.weight_min} - {person.weight_max}{" "}
              lbs
            </p>
          )}
          {person.scars_and_marks && (
            <p>
              <strong>Scars & Marks:</strong> {person.scars_and_marks}
            </p>
          )}
          {person.possible_states?.length > 0 && (
            <p>
              <strong>Possible States:</strong>{" "}
              {person.possible_states.join(", ")}
            </p>
          )}
          {person.possible_countries?.length > 0 && (
            <p>
              <strong>Possible Countries:</strong>{" "}
              {person.possible_countries.join(", ")}
            </p>
          )}
          {person.warning_message && (
            <p className="text-red-600 font-semibold">
              <strong>Warning:</strong> {person.warning_message}
            </p>
          )}
          {person.remarks && (
            <p>
              <strong>Remarks:</strong> {person.remarks}
            </p>
          )}
          {person.details && (
            <div className="mt-4">
              <strong>Details:</strong>
              <div
                className="text-gray-700 prose max-w-none"
                dangerouslySetInnerHTML={{ __html: person.details }}
              />
            </div>
          )}

          {person.caution && (
            <div className="mt-4">
              <strong>Caution:</strong>
              <div
                className="text-gray-700 prose max-w-none"
                dangerouslySetInnerHTML={{ __html: person.caution }}
              />
            </div>
          )}

          {person.reward_text && (
            <p className="text-green-700 font-semibold">
              <strong>Reward:</strong> {person.reward_text}
            </p>
          )}
          {person.dates_of_birth_used?.length > 0 && (
            <p>
              <strong>DOBs Used:</strong> {person.dates_of_birth_used}
            </p>
          )}
          {person.place_of_birth && (
            <p>
              <strong>Place of Birth:</strong> {person.place_of_birth}
            </p>
          )}
          {person.url && (
            <p>
              <strong>More Info:</strong>{" "}
              <a
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                FBI Profile
              </a>
            </p>
          )}

          <TipComponent />
        </div>
      </div>
    </div>
  );
};

export default DetailsDrawer;
