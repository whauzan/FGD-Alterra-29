import HomePage from "./pages/Users/HomePage.jsx";
import ProfileFriends from "./pages/Users/ProfileFriends.jsx";
import ReportPage from "./pages/Users/ReportPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateThread from "./pages/Users/CreateThread.jsx";
import { persistor, store } from "./Redux/store.js";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import UsersProfile from "./pages/Users/UsersProfile.jsx";
import SettingUsers from "./pages/Users/SettingUsers.jsx";

function App() {
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
            <Route path='/create-thread' element={<CreateThread />} />
            <Route path='/my-profile' element={<UsersProfile />} />
            <Route path='/my-profile/setting' element={<SettingUsers />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
