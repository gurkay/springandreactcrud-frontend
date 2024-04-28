import { IEmployeeDto } from "../interfaces/IEmployeeDto";

export const employeeDtoEmpty: IEmployeeDto = {
    firstName: '',
    lastName: '',
    email: ''
};

export const employeeDtoEmptyWithId: IEmployeeDto = {
    id: 0,
    firstName: '',
    lastName: '',
    email: ''
};