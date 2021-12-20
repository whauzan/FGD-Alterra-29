import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";
import NavBotom from "./components/NavBotom.jsx";
import FollowingProfile from "./pages/Users/FollowingProfile.jsx";
function App() {
  return (
    <Flex direction={"column"}>
      <Navbar />
      <NavBotom />
      <FollowingProfile />
    </Flex>
  );
}

export default App;
