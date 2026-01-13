import { useRef, useState } from "react";
import { departments } from "../../utils/departments";
import { states } from "../../utils/states";
import { DateSelect } from "../form/DateSelect";
import { Input } from "../form/Input";
import { Select } from "../form/Select";
import employeeService from "../../service/employee.service";
import { Modal, toast } from "@gaetanredoutez/hrnet-ui";

export const EmployeeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [pendingEmployee, setPendingEmployee] = useState(null);
  const formRef = useRef(null);

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

    setPendingEmployee(newEmployee);
    setIsOpen(true);
  };

  const confirmSubmit = async () => {
    if (!pendingEmployee) return;

    setIsSubmitting(true);

    try {
      await employeeService.createEmployee(pendingEmployee);
      toast.success("Employee created successfully!");
      setPendingEmployee(null);
      setIsOpen(false);
    } catch (error) {
      if (error.message === "Employee already exists!") {
        toast.error("Employee already exists!");
      } else {
        toast.error("Failed to create employee. Is the server running?");
      }
    } finally {
      formRef.current.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        className="mx-auto max-w-2xl rounded-md bg-white p-6 shadow-md"
        onSubmit={onSubmit}
        ref={formRef}
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

        <h2 className="mt-6 mb-4 text-lg font-semibold text-gray-700">
          Address
        </h2>

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

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2 className="text-lg font-bold">New employee</h2>

          <div>
            <p className="mt-4">
              Are you sure you want to add{" "}
              <strong>
                {pendingEmployee.firstName} {pendingEmployee.lastName}
              </strong>{" "}
              to the employee list?
            </p>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Cancel
            </button>

            <button
              onClick={confirmSubmit}
              disabled={isSubmitting}
              className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : "Confirm"}
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};
