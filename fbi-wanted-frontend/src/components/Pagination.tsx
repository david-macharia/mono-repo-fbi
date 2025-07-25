import React from "react";

const Pagination = ({ page, totalPages, onPageChange }: any) => {
  return (
    <div className="flex justify-center items-center gap-4 p-4">
      <button
        className="px-3 py-1 border rounded"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
      >
        Previous
      </button>
      <span className="text-sm">
        Page {page} of {totalPages}
      </span>
      <button
        className="px-3 py-1 border rounded"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
