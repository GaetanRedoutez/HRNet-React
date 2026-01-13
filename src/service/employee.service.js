const API_URL = "http://localhost:3001/api/employees";


const employeeService = {
  /**
   * Get all employees
   * @returns {Promise<Array>} List of employees
   */
  getAllEmployees: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  },

  /**
   * Create a new employee
   * @param {Object} employeeData - Employee data
   * @returns {Promise<Object>} Created employee
   */
  createEmployee: async (employeeData) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      });

      if (response.status === 409) {
        throw new Error("Employee already exists!");
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating employee:", error);
      throw error;
    }
  },
};

export default employeeService;