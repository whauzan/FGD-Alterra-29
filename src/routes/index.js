import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { persistor, store } from "../Redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Overview from "../pages/Admin/Overview";
import Report from "../pages/Admin/Report";
import SettingUsers from "../pages/Admin/SettingUsers";
import Thread from "../pages/Admin/Thread";
import Users from "../pages/Admin/Users";
import HomePage from "../pages/Users/HomePage";
import ProfileFriends from "../pages/Users/ProfileFriends";
import ReportPage from "../pages/Users/ReportPage";
import Post from "../pages/Admin/Post";
import CreateThread from "../pages/Users/CreateThread.jsx";
import UsersProfile from "../pages/Users/UsersProfile.jsx";
import SettingUser from "../pages/Users/SettingUser.jsx";
import ProtectingRoute from "./ProtectingRoute.js";
const Routers = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/recommendation' element={<HomePage />} />
            <Route path='/hot-thread' element={<HomePage />} />
            <Route path='/user/id' element={<ProfileFriends />} />
            <Route path='/report/id' element={<ReportPage />} />
            <Route
              path='/create-thread'
              element={
                <ProtectingRoute>
                  <CreateThread />
                </ProtectingRoute>
              }
            />
            <Route
              path='/my-profile'
              element={
                <ProtectingRoute>
                  <UsersProfile />
                </ProtectingRoute>
              }
            />
            <Route path='/my-profile/setting' element={<SettingUser />} />
            <Route path='/admin/overview' element={<Overview />} />
            <Route path='/admin/users' element={<Users />} />
            <Route path='/admin/post' element={<Post />} />
            <Route path='/admin/thread' element={<Thread />} />
            <Route path='/admin/report' element={<Report />} />
            <Route path='/admin/setting' element={<SettingUsers />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default Routers;
