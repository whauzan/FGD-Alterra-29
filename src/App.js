import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";
import NavBotom from "./components/NavBotom.jsx";
import HomePage from "./pages/Users/HomePage.jsx";

function App() {
  return (
    <Flex direction={"column"}>
      <Navbar />
      <NavBotom />
      <HomePage />
    </Flex>
  );
}

export default App;
