
import ListEmployeeComponent from './components/listEmployeeComponent/ListEmployeeComponent'
import HeaderComponent from './components/headerComponent/HeaderComponent'
import FooterComponent from './components/footerComponent/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './components/employeeComponent/EmployeeComponent'

function App() {

  return (
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path='/employees' element={<ListEmployeeComponent/>} />
          <Route path='/addEmployee' element={<EmployeeComponent/>} />
          <Route path='/editEmployee/:employeeId' element={<EmployeeComponent/>} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
  )
}

export default App
