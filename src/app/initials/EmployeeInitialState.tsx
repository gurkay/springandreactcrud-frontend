import { employeeDtoEmptyWithId } from "../../data/employeeDtoEmpty";
import { IEmployeeInit } from "../../interfaces/IEmployeeInit";

export const EmployeeInitialState: IEmployeeInit = {
    employee: employeeDtoEmptyWithId,
    employees: [],
    loading: false,
    status: "",
    result: "",
}