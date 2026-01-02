import { useLoaderData } from "react-router";
import { states } from "../../utils/states";

export const CurrentEmployeesPage = () => {
  const employees = useLoaderData();
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Start Date</th>
          <th>Department</th>
          <th>Date of Birth</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>

      {!employees || employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} className="capitalize">
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>
                {states.find((state) => state.value === employee.state).label ||
                  employee.state}
              </td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};
