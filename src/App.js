import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddBlogs from "./pages/AddBlogs/AddBlogs";
import Blogs from "./pages/Blogs/Blogs";
import HomeBlogDetails from "./pages/Home/BlogDetails";
import Home from "./pages/Home/Home";
import Login from "./shared/Login/Login";
import Navbar from "./shared/Navbar/Navbar";
import RequireAuth from "./shared/RequireAuth/RequireAuth";
import Signup from "./shared/Signup/Signup";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/addblog"
          element={
            <RequireAuth>
              <AddBlogs></AddBlogs>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/blogdetails"
          element={<HomeBlogDetails></HomeBlogDetails>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
