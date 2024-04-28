import { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, getEmployeeById, updateEmployee } from "../../app/features/employeeSlice/employeeCreateAsyncThunk";
import { useNavigate, useParams } from 'react-router-dom';
import { employeeDtoEmpty } from '../../data/employeeDtoEmpty';
import AddEmployeeFormComponent from '../addEmployeeFormComponent/AddEmployeeFormComponent';
import { clearEmployee, setEmail, setFirstName, setLastName } from '../../app/features/employeeSlice/employeeSlice';

function EmployeeComponent() {
    const dispatch = useDispatch<AppDispatch>();
    const selectorEmployee = useSelector((state: RootState) => state.employeeReducer);

    const navigate = useNavigate();

    const [errors, setErrors] = useState(employeeDtoEmpty);
    const { employeeId } = useParams();

    useEffect(() => {
        if (employeeId) {
            dispatch(getEmployeeById(employeeId));
        }
    }, [employeeId]);

    const handleFirstNameChange = (e: any) => {
        dispatch(setFirstName(e.target.value));
    }

    const handleLastNameChange = (e: any) => {
        dispatch(setLastName(e.target.value));
    }

    const handleEmailChange = (e: any) => {
        dispatch(setEmail(e.target.value));
    }

    const addOrEditEmployee = (e: any) => {
        e.preventDefault();
        console.log(validateForm());
        if (!validateForm()) {
            return;
        }

        if (employeeId) {
            dispatch(updateEmployee({ employeeId: Number(employeeId), employeeDto: selectorEmployee.employee }))
            .then((response: any) => {
                console.log(response);
                dispatch(clearEmployee());
                navigate('/employees');
            }).catch((error: any) => {
                console.log(error);
            });;
        } else {
            dispatch(createEmployee(selectorEmployee.employee))
            .then((response: any) => {
                console.log(response);
                dispatch(clearEmployee());
                navigate('/employees');
            }).catch((error: any) => {
                console.log(error);
            });
        }


    }

    const validateForm = () => {
        let isValid = true;
        const errorsCopy = { ...errors };

        if (selectorEmployee.employee.firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errors.firstName = 'First name is required';
            isValid = false;
        }

        if (selectorEmployee.employee.lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            isValid = false;
        }

        if (!selectorEmployee.employee.email.includes("@") ||
            !selectorEmployee.employee.email.includes(".") ||
            selectorEmployee.employee.email.trim().length < 5) {
            errorsCopy.email = 'Invalid email';
            isValid = false;
        } else {
            errorsCopy.email = '';
        }

        setErrors(errorsCopy);
        return isValid;
    }

    const pageTitle = () => {
        return (
            employeeId ? 'Edit Employee' : 'Add Employee'
        );
    }

    return (
        <div className='container mt-2'>
            <div className='row'>
                <div className='card col-md-6 offet-md-3'>
                    <h2 className='text-center'>{pageTitle()}</h2>
                    <div className='card-body'>
                        <AddEmployeeFormComponent
                            employee={selectorEmployee.employee}
                            handleFirstNameChange={handleFirstNameChange}
                            handleLastNameChange={handleLastNameChange}
                            handleEmailChange={handleEmailChange}
                            addEmployee={addOrEditEmployee}
                            errors={errors}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent