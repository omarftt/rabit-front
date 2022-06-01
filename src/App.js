
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './pages/Landing/Home';
import Competitions from './pages/Landing/Competitions'
import Talleres from './pages/Landing/Talleres';
import Tienda from './pages/Landing/Tienda';
import ScrollToTop from "./components/ScrollToTop";
import Login from './pages/Login/Login';
import Layout from './components/Dashboard/Layout';
import {MainStudentDash,
        ProfileStudentDash,
        AttendanceStudentDash,
        ClassroomStudentDash,
        HomeworksStudentDash} from "./pages/Dashboard/StudentDash";
import {MainTeacherDash,
        ProfileTeacherDash,
        StudentTeacherDash,
        TalleresTeacherDash,
        ClassroomTeacherDash,
        CreateClassroomDash,
        CreateHomeworkDash,
        HomeworkTeacherDash,
        TeacherDash2 } from "./pages/Dashboard/TeacherDash";
import {MainAdminDash,
        UsersAdminDash,
        TalleresAdminDash,
        CreateTalleresDash,
        ProductsAdminDash,
        CreateProductDash,
        AdminDash2, 
        ClasesAdminDash,
        HomeworkAdminDash } from "./pages/Dashboard/AdminDash";
import Unauthorized from "./components/Dashboard/Unauthorized";
import Missing from "./components/Missing";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import  {AuthProvider} from './context/AuthProvider';

const ROLES ={
  'Student': 'Student',
  'Teacher': 'Teacher',
  'Admin': 'Admin'
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <AuthProvider>
        <Routes>
          
          <Route  
            path="/"
            element={
              < Home />
            }
          />
          <Route  
            path="/Competiciones"
            element={
              < Competitions/>
            }
          />
          <Route  
            path="/Talleres"
            element={
              < Talleres/>
            }
          />  
          <Route  
            path="/Tienda"
            element={
              < Tienda/>
            }
          />
          <Route  
            path="/Login"
            element={
              < Login/>
            }
          />
          <Route  
            path="/unauthorized"
            element={
              < Unauthorized/>
            }
          />
          
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.Teacher]}/>}>
              <Route path="/teacher" element={< MainTeacherDash/>} />
              <Route path="/teacher/profile" element={< ProfileTeacherDash/>} />
              <Route path="/teacher/mystudents" element={< StudentTeacherDash/>} />
              <Route path="/teacher/talleres" element={< TalleresTeacherDash/>} />
              <Route path="/teacher/classrooms" element={< ClassroomTeacherDash/>} />
              <Route path="/teacher/homework" element={< HomeworkTeacherDash/>} />
              <Route path="/form/classroom" element={< CreateClassroomDash/>} />
              <Route path="/form/homework" element={< CreateHomeworkDash/>} />
              <Route path="/teacher/prueba" element={< TeacherDash2/>} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Student]}/>}>
              <Route path="/student" element={< MainStudentDash/>} />
              <Route path="/student/profile" element={< ProfileStudentDash/>} />
              <Route path="/student/attendance" element={< AttendanceStudentDash/>} />
              <Route path="/student/myClassrooms" element={< ClassroomStudentDash/>} />
              <Route path="/student/myHomeworks" element={< HomeworksStudentDash/>} />
              <Route path="/enrollForm/classroom" element={< HomeworksStudentDash/>} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
              <Route path="/admin" element={< MainAdminDash/>} />
              <Route path="/admin/students" element={< UsersAdminDash/>} />
              <Route path="/admin/talleres" element={< TalleresAdminDash/>} />
              <Route path="/admin/clases" element={< ClasesAdminDash/>} />
              <Route path="/admin/homeworks" element={< HomeworkAdminDash/>} />
              <Route path="/admin/products" element={< ProductsAdminDash/>} />
              <Route path="/form/taller" element={< CreateTalleresDash/>} />
              <Route path="/form/product" element={< CreateProductDash/>} />
            </Route>

          </Route>


          <Route  
            path="*"
            element={
              < Missing/>
            }
          />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  ) 
}

export default App;
