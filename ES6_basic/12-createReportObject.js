export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeeList) {
      return Object.keys(employeesList).length;
    },
  };
}
