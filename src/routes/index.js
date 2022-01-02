import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Overview from "../pages/Admin/Overview";
import Report from "../pages/Admin/Report";
import SettingUsers from "../pages/Admin/SettingUsers";
import Thread from "../pages/Admin/Thread";
import Users from "../pages/Admin/Users";
import HomePage from "../pages/Users/HomePage";
import ProfileFriends from "../pages/Users/ProfileFriends";
import ReportPage from "../pages/Users/ReportPage";
import Post from "../pages/Admin/Post";
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user/id' element={<ProfileFriends />} />
        <Route path='/report/id' element={<ReportPage />} />
        <Route path='/admin/overview' element={<Overview />} />
        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/post' element={<Post />} />
        <Route path='/admin/thread' element={<Thread />} />
        <Route path='/admin/report' element={<Report />} />
        <Route path='/admin/setting' element={<SettingUsers />} />
      </Routes>
    </Router>
  );
};

export default Routers;
