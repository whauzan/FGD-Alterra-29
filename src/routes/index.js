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
import DetailThread from "../pages/Users/DetailThread.jsx";
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
            <Route path='/report/:id' element={<ReportPage />} />
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
            <Route
              path='/my-profile/setting'
              element={
                <ProtectingRoute>
                  <SettingUser />
                </ProtectingRoute>
              }
            />
            <Route
              path='/admin/overview'
              element={
                <ProtectingRoute>
                  <Overview />
                </ProtectingRoute>
              }
            />
            <Route
              path='/admin/users'
              element={
                <ProtectingRoute>
                  <Users />
                </ProtectingRoute>
              }
            />
            <Route
              path='/admin/post'
              element={
                <ProtectingRoute>
                  <Post />
                </ProtectingRoute>
              }
            />
            <Route
              path='/admin/thread'
              element={
                <ProtectingRoute>
                  <Thread />
                </ProtectingRoute>
              }
            />
            <Route
              path='/admin/report'
              element={
                <ProtectingRoute>
                  <Report />
                </ProtectingRoute>
              }
            />
            <Route
              path='/admin/setting'
              element={
                <ProtectingRoute>
                  <SettingUsers />
                </ProtectingRoute>
              }
            />
            <Route
              path='/detail-thread'
              element={
                <ProtectingRoute>
                  <DetailThread />
                </ProtectingRoute>
              }
            />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default Routers;
