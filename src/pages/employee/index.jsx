import { useState } from "react";
import { useLoaderData } from "react-router";
import { EmployeeTable } from "../../components/employee/EmployeeTable";
import { EmployeeTableHeader } from "../../components/employee/EmployeeTableHeader";
import { Pagination } from "../../components/common/Pagination/Pagination";
import { usePagination } from "../../components/common/Pagination/usePagination";

export const CurrentEmployeesPage = () => {
  const employees = useLoaderData();
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

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
  } = usePagination(filteredEmployees, 10);

  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <EmployeeTableHeader
        employees={employees}
        setFilteredEmployees={setFilteredEmployees}
        entriesPerPage={entriesPerPage}
        setEntriesPerPage={changeEntriesPerPage}
        setCurrentPage={setCurrentPage}
      />

      <EmployeeTable employees={paginatedData} />

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
