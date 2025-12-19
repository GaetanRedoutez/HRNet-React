import { toast, ToastContainer } from "react-toastify";
import { departments } from "../../utils/departments";
import { states } from "../../utils/states";
import { DateSelect } from "../form/DateSelect";
import { Input } from "../form/Input";
import { Select } from "../form/Select";

export const EmployeeForm = () => {
  const getMinDate = () => {
    const today = new Date();
    const minDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate(),
    );
    return minDate.toISOString().split("T")[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(
      today.getFullYear() - 100,
      today.getMonth(),
      today.getDate(),
    );

    return maxDate.toISOString().split("T")[0];
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newEmployee = Object.fromEntries(formData.entries());
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const exists = storedEmployees.some(
      (emp) =>
        emp.firstName === newEmployee.firstName &&
        emp.lastName === newEmployee.lastName &&
        emp.dateOfBirth === newEmployee.dateOfBirth,
    );

    if (exists) {
      toast.error("Employee already exists!");
    } else {
      toast.success("Employee created successfully!");
      storedEmployees.push(newEmployee);
      localStorage.setItem("employees", JSON.stringify(storedEmployees));
    }

    e.target.reset();
  };

  return (
    <form
      className="mx-auto max-w-2xl rounded-md bg-white p-6 shadow-md"
      onSubmit={onSubmit}
    >
      <h3 className="mt-6 mb-4 text-lg font-semibold text-gray-700">
        Personal Information
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          name="firstName"
          label="First Name"
          placeholder="John"
          required
          minLength={2}
        />

        <Input
          label="Last Name"
          name="lastName"
          placeholder="Doe"
          required
          minLength={2}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <DateSelect
          label="Date of Birth"
          name="dateOfBirth"
          max={getMinDate()}
          min={getMaxDate()}
          required
        />

        <DateSelect label="Start Date" name="startDate" required />
      </div>

      <h2 className="mt-6 mb-4 text-lg font-semibold text-gray-700">Address</h2>

      <Input
        label="Street"
        name="street"
        placeholder="123 Main St"
        required
        minLength={2}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="City"
          name="city"
          placeholder="New York"
          required
          minLength={2}
        />

        <Select label="State" name="state" options={states} required />
      </div>

      <Input
        label="Zip Code"
        name="zipCode"
        placeholder="10001"
        required
        pattern="\d{5}"
      />

      <Select
        label="Department"
        name="department"
        options={departments}
        required
      />

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
      >
        Submit
      </button>
      <ToastContainer />
    </form>
  );
};
