import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { IEmployeeDto } from "../../../interfaces/IEmployeeDto";
import { StatusSabitleri } from "../../../constants/StatusSabitleri";
import { IEmployeeInit } from "../../../interfaces/IEmployeeInit";
import { createEmployee, deleteEmployee, getAllEmployees, getEmployeeById, updateEmployee } from "./employeeCreateAsyncThunk";

export const employeeExtraReducers = {

    builderGetAllEmployees: function(builder: ActionReducerMapBuilder<IEmployeeInit>) {
        builder.addCase(getAllEmployees.pending, (state) => {
            state.loading = true;
            state.status = StatusSabitleri.LOADING;
        });

        builder.addCase(getAllEmployees.fulfilled, (state, action: PayloadAction<IEmployeeDto[]>) => {
            state.loading = false;
            state.employees = action.payload;
            state.status = StatusSabitleri.SUCCESS;
        });

        builder.addCase(getAllEmployees.rejected, (state) => {
            state.loading = false;
            state.status = StatusSabitleri.FAILED;
        });
    },

    builderCreateEmployee: function(builder: ActionReducerMapBuilder<IEmployeeInit>) {
        builder.addCase(createEmployee.pending, (state) => {
            state.loading = true;
            state.status = StatusSabitleri.LOADING;
        });

        builder.addCase(createEmployee.fulfilled, (state, action: PayloadAction<IEmployeeDto>) => {
            state.loading = false;
            state.employee = action.payload;
            state.status = StatusSabitleri.SUCCESS;
        });

        builder.addCase(createEmployee.rejected, (state) => {
            state.loading = false;
            state.status = StatusSabitleri.FAILED;
        });
    },

    builderGetEmployeeById: function(builder: ActionReducerMapBuilder<IEmployeeInit>) {
        builder.addCase(getEmployeeById.pending, (state) => {
            state.loading = true;
            state.status = StatusSabitleri.LOADING;
        });

        builder.addCase(getEmployeeById.fulfilled, (state, action: PayloadAction<IEmployeeDto>) => {
            state.loading = false;
            state.employee = action.payload;
            state.status = StatusSabitleri.SUCCESS;
        });

        builder.addCase(getEmployeeById.rejected, (state) => {
            state.loading = false;
            state.status = StatusSabitleri.FAILED;
        });
    },

    builderUpdateEmployee: function(builder: ActionReducerMapBuilder<IEmployeeInit>) {
        builder.addCase(updateEmployee.pending, (state) => {
            state.loading = true;
            state.status = StatusSabitleri.LOADING;
        });

        builder.addCase(updateEmployee.fulfilled, (state, action: PayloadAction<IEmployeeDto>) => {
            state.loading = false;
            state.employee = action.payload;
            state.status = StatusSabitleri.SUCCESS;
        });

        builder.addCase(updateEmployee.rejected, (state) => {
            state.loading = false;
            state.status = StatusSabitleri.FAILED;
        });
    },

    builderDeleteEmployee: function(builder: ActionReducerMapBuilder<IEmployeeInit>) {
        builder.addCase(deleteEmployee.pending, (state) => {
            state.loading = true;
            state.status = StatusSabitleri.LOADING;
        });

        builder.addCase(deleteEmployee.fulfilled, (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.result = action.payload;
            state.status = StatusSabitleri.SUCCESS;
        });

        builder.addCase(deleteEmployee.rejected, (state) => {
            state.loading = false;
            state.status = StatusSabitleri.FAILED;
        });
    }
}