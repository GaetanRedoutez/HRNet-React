import { useState, useMemo } from "react";

export const usePagination = (data, initialEntriesPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(initialEntriesPerPage);

  const { paginatedData, totalPages, startIndex, endIndex } = useMemo(() => {
    const total = Math.ceil(data.length / entriesPerPage);
    const start = (currentPage - 1) * entriesPerPage;
    const end = start + entriesPerPage;

    return {
      paginatedData: data.slice(start, end),
      totalPages: total,
      startIndex: start,
      endIndex: Math.min(end, data.length),
    };
  }, [data, currentPage, entriesPerPage]);

  const changeEntriesPerPage = (n) => {
    setEntriesPerPage(n);
    setCurrentPage(1);
  };

  return {
    currentPage,
    setCurrentPage,
    entriesPerPage,
    changeEntriesPerPage,
    paginatedData,
    totalPages,
    startIndex,
    endIndex,
    totalEntries: data.length,
  };
};
