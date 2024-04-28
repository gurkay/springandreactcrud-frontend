import { IEmployeeDto } from '../../interfaces/IEmployeeDto';

interface addEmployeeProps {
    employee: IEmployeeDto,
    handleFirstNameChange: (e: any) => void,
    handleLastNameChange: (e: any) => void,
    handleEmailChange: (e: any) => void,
    addEmployee: (e: any) => void,
    errors: IEmployeeDto,
}

const AddEmployeeFormComponent = ({
    employee,
    handleFirstNameChange, handleLastNameChange, handleEmailChange, addEmployee,
    errors
}: addEmployeeProps) => {
    return (
        <form>
            <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input
                    type='text'
                    placeholder='Enter First Name'
                    name='firstName'
                    value={employee.firstName}
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    onChange={handleFirstNameChange}>
                </input>
                {
                    errors.firstName &&
                    <div className='invalid-feedback'>
                        {errors.firstName}
                    </div>
                }
            </div>
            <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input
                    type='text'
                    placeholder='Enter Last Name'
                    name='lastName'
                    value={employee.lastName}
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    onChange={handleLastNameChange}>
                </input>
                {
                    errors.lastName &&
                    <div className='invalid-feedback'>
                        {errors.lastName}
                    </div>
                }
            </div>
            <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input
                    type='text'
                    placeholder='Enter Email'
                    name='email'
                    value={employee.email}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    onChange={handleEmailChange}>
                </input>
                {
                    errors.email &&
                    <div className='invalid-feedback'>
                        {errors.email}
                    </div>
                }
            </div>
            <button className='btn btn-success' onClick={addEmployee}>Add Employee</button>
        </form>
    )
}

export default AddEmployeeFormComponent;
