import { createAsyncThunk } from "@reduxjs/toolkit";
import { EmployeeService } from "../../../services/EmployeeService";
import { IEmployeeDto } from "../../../interfaces/IEmployeeDto";

export const getAllEmployees: any = createAsyncThunk('getAllEmployees', async () => {
    const response = await EmployeeService.getAllEmployees();
    return Promise.resolve(response);
});

export const createEmployee: any = createAsyncThunk('createEmployee', async (employeeDto: IEmployeeDto) => {
    const response = await EmployeeService.createEmployee(employeeDto);
    return Promise.resolve(response);
});

export const getEmployeeById: any = createAsyncThunk('getEmployeeById', async (employeeId: number) => {
    const response = await EmployeeService.getEmployeeById(employeeId);
    return Promise.resolve(response);
});

export const updateEmployee = createAsyncThunk('updateEmployee', async (payload: { employeeId: number, employeeDto: IEmployeeDto }) => {
    const { employeeId, employeeDto } = payload;
    const response = await EmployeeService.updateEmployee(employeeId, employeeDto);
    return Promise.resolve(response);
});

export const deleteEmployee = createAsyncThunk('deleteEmployee', async (employeeId: number) => {
    const response = await EmployeeService.deleteEmployee(employeeId);
    return Promise.resolve(response);
});