//import { Button } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import {Route,Routes} from "react-router-dom"
import UserPage from "../src/pages/UserPage"
import PostPage from "../src/pages/PostPage"
import Header from "../src/components/Header"
import Homepage from "./pages/Homepage"
import AuthPage from "./pages/AuthPage"


function App() {
 
  return (
    <Container maxW="620px">
    <Header/>
    <Routes>
    <Route path='/' element={ <Homepage /> } />
    <Route path='/auth' element={<AuthPage /> } />
      <Route path="/:username" element={<UserPage/>}  />
      <Route path="/:username/post/:pid" element={<PostPage/>}  />
    </Routes>
 
    </Container>
  )
}

export default App
