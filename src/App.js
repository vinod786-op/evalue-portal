import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Service from './components/Service'
import Login from './components/Login';
//Toast error message show
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reset from './components/Reset';
import Newpassword from './components/Newpassword';
import NoteFound from './components/NoteFound';

//admin  routes
import Admin from './components/dashboard/Admin';
import Addproject from './components/dashboard/AdminPages/Addproject'
import AllUser from './components/dashboard/AdminPages/AllUser';

//publisher Routes
import Publisher from './components/dashboard/Publisher';
import ProjectStatus from './components/dashboard/publisherPages/ProjectStatus'
import Allpublise from './components/dashboard/publisherPages/Allpublise';

//Employee Routes
import Employee from './components/dashboard/Employee';
import NewTask from './components/dashboard/Employeepage/NewTask';
import UserState from './context/UserState';
// import PrivateRoute from './components/PrivateRoute';


function App() {
  const location = useLocation()

  return (
    <>

      <UserState>
        {/* <Router>  //It is declare inside the IDEX.JS FILe please Go to index.js file */}
        {!["/admin", "/employee", "/publisher", "/admin/add-project", "/admin/all-user", "/employee/new-task", "/publisher/project-status", "/publisher/allpublise"].includes(location.pathname) && <Navbar />}  {/* TO hide the navbar under the certain component */}
        <Routes onUpdate={() => window.scrollTo(0, 0)}>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/reset/:token" element={<Newpassword />} />
          <Route path="*" element={<NoteFound />} />


          {/* admin pages */}
          {/* <Route element={<PrivateRoute />} > */}
            <Route Route path="/admin" element={<Admin />} >
              <Route path="add-project" element={<Addproject />} />
              <Route path="all-user" element={<AllUser />} />
            </Route>

            {/* Publisher dasboard */}
            <Route path="/publisher" element={<Publisher />}>
              <Route path="project-status" element={<ProjectStatus />} />
              <Route path="allpublise" element={<Allpublise />} />
            </Route>

            {/* Employee dasboard */}
            <Route path="/employee" element={<Employee />}>
              <Route path="new-task" element={<NewTask />} />
            </Route>
          {/* </Route> */}
        </Routes>
        {/* </Router> */}
      </UserState>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
