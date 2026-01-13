import employeeService from "../../service/employee.service";
import { states } from "../../utils/states";

export const employeeLoader = async () => {
  const employees = await employeeService.getAllEmployees();

  
  return employees.map((employee)=> ({
    ...employee,
    stateLabel: states.find((state) => state.value === employee.state)?.label || employee.state,
  }))
}
