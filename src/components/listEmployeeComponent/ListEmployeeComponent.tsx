import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { deleteEmployee, getAllEmployees } from "../../app/features/employeeSlice/employeeCreateAsyncThunk";
import { IEmployeeDto } from "../../interfaces/IEmployeeDto";

const ListEmployeeComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const selectorEmployee = useSelector((state: RootState) => state.employeeReducer);

    const navigate = useNavigate();

    useEffect(() => {
        allEmployees();
    }, []);

    const allEmployees = () => {
        dispatch(getAllEmployees());
    }

    const addEmployee = () => {
        navigate('/addEmployee');
    }

    const editEmployee = (employeeId: number) => {
        navigate(`/editEmployee/${employeeId}`)
    }

    const removeEmployee = (employeeId: number) => {
        console.log(employeeId);
        dispatch(deleteEmployee(employeeId))
        .then((response) => {
            console.log(response);
            allEmployees();
            navigate('/employees');
         }).catch((error) => {
            console.log(error);
         });
    }

    return (
        <div className="container">
            <h2 className="text-center">List Employee</h2>
            <button className="btn btn-primary mb-2" onClick={addEmployee}>Add Employee</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col" className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectorEmployee.employees && selectorEmployee.employees.map((employeeDto: IEmployeeDto) => (
                            <tr key={employeeDto.id}>
                                <td>{employeeDto.id}</td>
                                <td>{employeeDto.firstName}</td>
                                <td>{employeeDto.lastName}</td>
                                <td>{employeeDto.email}</td>
                                <td className="text-center">
                                    <button 
                                        className="btn btn-info" 
                                        onClick={() => employeeDto.id !== undefined && editEmployee(employeeDto.id)}
                                    >Edit</button>

                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => employeeDto.id !== undefined && removeEmployee(employeeDto.id)}
                                        style={{marginLeft: '10px'}}
                                    >Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeeComponent;