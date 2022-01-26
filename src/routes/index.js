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
import AdminRoutes from "./AdminRoutes.js";
import SaveThread from "../pages/Users/SaveThread";
import ThreadByCategory from "../pages/Users/ThreadByCategory.jsx";

const Routers = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/:category' element={<ThreadByCategory />} />
            <Route path='/user/:id' element={<ProfileFriends />} />
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
                <AdminRoutes>
                  <Overview />
                </AdminRoutes>
              }
            />
            <Route
              path='/admin/users'
              element={
                <AdminRoutes>
                  <Users />
                </AdminRoutes>
              }
            />
            <Route
              path='/admin/post'
              element={
                <AdminRoutes>
                  <Post />
                </AdminRoutes>
              }
            />
            <Route
              path='/admin/thread'
              element={
                <AdminRoutes>
                  <Thread />
                </AdminRoutes>
              }
            />
            <Route
              path='/admin/report'
              element={
                <AdminRoutes>
                  <Report />
                </AdminRoutes>
              }
            />
            <Route
              path='/admin/setting'
              element={
                <AdminRoutes>
                  <SettingUsers />
                </AdminRoutes>
              }
            />
            <Route
              path='/detail-thread/:id'
              element={
                <ProtectingRoute>
                  <DetailThread />
                </ProtectingRoute>
              }
            />
            <Route
              path='/listthread'
              element={
                <ProtectingRoute>
                  <SaveThread />
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
