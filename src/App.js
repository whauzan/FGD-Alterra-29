import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";
import NavBotom from "./components/NavBotom.jsx";
import SettingUsers from "./pages/Users/SettingUsers.jsx";

function App() {
  return (
    <Flex direction={"column"}>
      <Navbar />
      <NavBotom />
      <SettingUsers />
    </Flex>
  );
}

export default App;
