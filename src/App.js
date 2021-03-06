import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddBlogs from "./pages/AddBlogs/AddBlogs";
import BlogDetails from "./pages/Blogs/BlogDetails";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import MakeAdmin from "./pages/MakeAdmin/MakeAdmin";
import ManageChondo from "./pages/ManageChondo/ManageChondo";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Footer from "./shared/Footer/Footer";
import Login from "./shared/Login/Login";
import Navbar from "./shared/Navbar/Navbar";
import RequireAdmin from "./shared/RequireAdmin/RequireAdmin";
import RequireAuth from "./shared/RequireAuth/RequireAuth";
import Signup from "./shared/Signup/Signup";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/onlychondoadmincanbehere/login"
          element={<Login></Login>}
        ></Route>
        <Route
          path="/onlychondoadmincanbehere/signup"
          element={<Signup></Signup>}
        ></Route>
        <Route
          path="/addblog"
          element={
            <RequireAuth>
              <AddBlogs></AddBlogs>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/blogdetails/:id"
          element={<BlogDetails></BlogDetails>}
        ></Route>
        <Route
          path="/managechondo"
          element={
            <RequireAuth>
              <ManageChondo></ManageChondo>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/makeadmin"
          element={
            <RequireAdmin>
              <MakeAdmin></MakeAdmin>
            </RequireAdmin>
          }
        ></Route>
        <Route
          path="/privacypolicy"
          element={<PrivacyPolicy></PrivacyPolicy>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
