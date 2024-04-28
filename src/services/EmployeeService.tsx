
import { IEmployeeDto } from "../interfaces/IEmployeeDto";
import HttpService from "./HttpService";

export const EmployeeService = {
    
    createEmployee: async (employeeDto: IEmployeeDto) => {
        const response = await HttpService.getAxiosClient().post('employees', employeeDto);
        return response.data;
    },
    
    getEmployeeById: async (employeeId: number) => {
        const response = await HttpService.getAxiosClient().get(`employees/${employeeId}`);
        return response.data;
    },

    getAllEmployees: async () => {
        const response = await HttpService.getAxiosClient().get('employees');
        return response.data;
    },

    updateEmployee: async (employeeId: number, employeeDto: IEmployeeDto) => {
        const response = await HttpService.getAxiosClient().put(`employees/${employeeId}`, employeeDto);
        return response.data;
    },

    deleteEmployee: async (employeeId: number) => {
        const response = await HttpService.getAxiosClient().delete(`employees/${employeeId}`);
        return response.data;
    }
}