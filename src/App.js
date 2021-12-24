import { Flex } from "@chakra-ui/react";
import HomePage from "./pages/Users/HomePage.jsx";
import Navbar from "./components/Navbar";
import NavBotom from "./components/NavBotom";
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
