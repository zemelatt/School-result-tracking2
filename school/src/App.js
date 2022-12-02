import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login-and-Register/Login";
import Register from "./Components/Login-and-Register/Register";
import PrivateRoute from "./Components/Private-Routes/Private-route";
import About from "./Components/About/About";

import AdminLogin from "./Components/Private-Routes/Admin-Route";

import Registering from "./Components/Admin-controls/Register-new-student/Registering";
import Editscores from "./Components/Admin-controls/Student-profile/Edit-score";
//user
import TochickScore from "./Components/To-Check-score/ToChickScore";
// import Profile from "./Components/Admin-controls/Profile/Profile";
import Update from "./Components/Admin-controls/Update-score/Update";
import Getallstudents from "./Components/Admin-controls/Get-all-student/Get-all-students";
import EditRegisteredStudents from "./Components/Admin-controls/Get-all-student/Edit-registered-data";
import ViewOne from "./Components/Admin-controls/Get-all-student/viewOne";
import Score from "./Components/Admin-controls/Student-profile/Students-score";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* user */}
            <Route element={<PrivateRoute />}>
              <Route path="/about" element={<About />} />
              <Route path="/user-check-score" element={<TochickScore />} />
            </Route>
            {/* /admin */}
            <Route element={<AdminLogin />}>
              <Route path="/register-new-student" element={<Registering />} />
              {/* <Route path="/edit-score" element={<Editscore />} /> */}

              <Route path="/update-score" element={<Update />} />
              <Route path="/get-all-student" element={<Getallstudents />} />
              <Route
                path="/search-by-id/edit-registerd/:register_id"
                element={<EditRegisteredStudents />}
              />
              {/* <Route path="/search-by-id/view-one/100" element={<viewRegisterdFile />} /> */}
              <Route
                path="/search-by-id/view-one/:register_id"
                element={<ViewOne />}
              />
              <Route path="/edit-score" element={<Score />} />
              <Route
                path="/search-by-id/edit-score/:student_id"
                element={<Editscores />}
              />
            </Route>
            {/* public */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
