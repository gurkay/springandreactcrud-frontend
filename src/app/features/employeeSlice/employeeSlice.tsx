import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EmployeeInitialState } from "../../initials/EmployeeInitialState";
import { employeeExtraReducers } from "./employeeExtraReducers";
import { employeeDtoEmptyWithId } from "../../../data/employeeDtoEmpty";

export const employeeSlice = createSlice({
    name: 'employees',
    initialState: EmployeeInitialState,
    reducers: {
        clearEmployees: (state) => {
            state.employees = [];
        },
        clearEmployee: (state) => {
            state.employee = employeeDtoEmptyWithId;
        },
        setFirstName: (state, action: PayloadAction<any>) => {
            state.employee.firstName = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.employee.lastName = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.employee.email = action.payload;
        },
    },

    extraReducers: (builder) => {
        employeeExtraReducers.builderGetAllEmployees(builder);
        employeeExtraReducers.builderCreateEmployee(builder);
        employeeExtraReducers.builderGetEmployeeById(builder);
        employeeExtraReducers.builderUpdateEmployee(builder);
        employeeExtraReducers.builderDeleteEmployee(builder);
    }
});

export const { 
    clearEmployees,
    clearEmployee,
    setFirstName,
    setLastName,
    setEmail,
} = employeeSlice.actions;
export default employeeSlice.reducer;