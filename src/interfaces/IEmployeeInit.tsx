import { IEmployeeDto } from "./IEmployeeDto";

export interface IEmployeeInit {
    employee: IEmployeeDto;
    employees: IEmployeeDto[];
    loading: boolean;
    status: string;
    result: string;
}