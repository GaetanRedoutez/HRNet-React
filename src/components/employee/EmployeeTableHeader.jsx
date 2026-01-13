import { Search } from "lucide-react";

export const EmployeeTableHeader = ({
  employees,
  setFilteredEmployees,
  entriesPerPage,
  setEntriesPerPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span>Show</span>
        <select
          value={entriesPerPage}
          onChange={(e) => {
            setEntriesPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="rounded-md border border-gray-400 p-1 text-sm"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>entries</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-gray-500" />
          Search
        </div>
        <input
          type="text"
          placeholder="Type to search..."
          className="rounded-md border border-gray-400 p-1 text-sm"
          onChange={(e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = employees.filter((employee) =>
              Object.values(employee).some((value) =>
                String(value).toLowerCase().includes(searchTerm),
              ),
            );
            setFilteredEmployees(filtered);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );
};
