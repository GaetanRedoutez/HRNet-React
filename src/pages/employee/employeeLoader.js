import employeeService from "../../service/employee.service";

export const employeeLoader = async () => {
  const employees = await employeeService.getAllEmployees();

  return employees
}
