import { useState } from "react";
import { departments } from "../../utils/departments";
import { states } from "../../utils/states";
import { DateSelect } from "../form/DateSelect";
import { Input } from "../form/Input";
import { Select } from "../form/Select";
import employeeService from "../../service/employee.service";
import { toast } from "../ui/toast/toast";

export const EmployeeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const newEmployee = Object.fromEntries(formData.entries());

    try {
      await employeeService.createEmployee(newEmployee);
      toast.success("Employee created successfully!");
      e.target.reset();
    } catch (error) {
      if (error.message === "Employee already exists!") {
        toast.error("Employee already exists!");
      } else {
        toast.error("Failed to create employee. Is the server running?");
      }
    } finally {
      setIsSubmitting(false);
    }
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
        disabled={isSubmitting}
        className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Saving..." : "Submit"}
      </button>
    </form>
  );
};
