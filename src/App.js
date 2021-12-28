import HomePage from "./pages/Users/HomePage.jsx";
import ProfileFriends from "./pages/Users/ProfileFriends.jsx";
import ReportPage from "./pages/Users/ReportPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateThread from "./pages/Users/CreateThread.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user/id' element={<ProfileFriends />} />
        <Route path='/report/id' element={<ReportPage />} />
        <Route path='/create-thread' element={<CreateThread />} />
      </Routes>
    </Router>
  );
}

export default App;
