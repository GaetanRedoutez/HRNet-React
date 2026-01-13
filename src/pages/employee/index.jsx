import { useState } from "react";
import { useLoaderData } from "react-router";
import { Pagination } from "../../components/common/Pagination";
import { EmployeeTable } from "../../components/employee/EmployeeTable";
import { EmployeeTableHeader } from "../../components/employee/EmployeeTableHeader";
import { usePagination } from "../../hooks/usePagination";
import { useSort } from "../../hooks/useSort";

export const CurrentEmployeesPage = () => {
  const employees = useLoaderData();
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const { sortedItems, requestSort, sortConfig } = useSort(filteredEmployees);

  const {
    currentPage,
    setCurrentPage,
    entriesPerPage,
    changeEntriesPerPage,
    paginatedData,
    totalPages,
    startIndex,
    endIndex,
    totalEntries,
  } = usePagination(sortedItems, 10);

  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <EmployeeTableHeader
        employees={employees}
        setFilteredEmployees={setFilteredEmployees}
        entriesPerPage={entriesPerPage}
        setEntriesPerPage={changeEntriesPerPage}
        setCurrentPage={setCurrentPage}
      />

      <EmployeeTable
        employees={paginatedData}
        requestSort={requestSort}
        sortConfig={sortConfig}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        startIndex={startIndex}
        endIndex={endIndex}
        totalEntries={totalEntries}
      />
    </div>
  );
};
