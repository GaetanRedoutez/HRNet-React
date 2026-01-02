export const EmployeeTable = ({ employees }) => {
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
