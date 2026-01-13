import { ChevronDown, ChevronUp } from "lucide-react";

export const EmployeeTable = ({ employees, requestSort, sortConfig }) => {
  const columns = [
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "startDate", label: "Start Date" },
    { key: "department", label: "Department" },
    { key: "dateOfBirth", label: "Date of Birth" },
    { key: "street", label: "Street" },
    { key: "city", label: "City" },
    { key: "stateLabel", label: "State" },
    { key: "zipCode", label: "Zip Code" },
  ];

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => requestSort(col.key)}
              className="cursor-pointer p-3 text-nowrap transition-colors hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                {col.label}
                <div className="flex flex-col">
                  <ChevronUp
                    size={14}
                    className={
                      sortConfig.key === col.key &&
                      sortConfig.direction !== "asc"
                        ? "text-gray-900"
                        : "text-gray-400"
                    }
                  />
                  <ChevronDown
                    size={14}
                    className={
                      sortConfig.key === col.key &&
                      sortConfig.direction !== "desc"
                        ? "text-gray-900"
                        : "text-gray-400"
                    }
                  />
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>

      {!employees || employees.length === 0 ? (
        <p className="p-2">No employees found.</p>
      ) : (
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="capitalize">
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.stateLabel}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};
