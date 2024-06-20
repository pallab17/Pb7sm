//import { Button } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import {Route,Routes,Navigate} from "react-router-dom"
import UserPage from "../src/pages/UserPage"
import PostPage from "../src/pages/PostPage"
import Header from "../src/components/Header"
import Homepage from "./pages/Homepage"
import AuthPage from "./pages/AuthPage"
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom"
import LogoutButton from "./components/LogoutButton"
import UpdateProfilePage from "./pages/UpdateProfilePage"
import CreatePost from "./components/CreatePost"


function App() {
  const user = useRecoilValue(userAtom);
  return (
    <Container maxW="620px">
    <Header/>
    <Routes>
    <Route path='/' element={ user ? <Homepage /> : <Navigate to='/auth' /> } />
    <Route path='/auth' element={!user ? <AuthPage /> : <Navigate to='/' /> } />
      <Route path="/:username" element={<UserPage/>}  />
      <Route path="/:username/post/:pid" element={<PostPage/>}  />
      <Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/auth' />} />
    </Routes>
 
 {user &&  <LogoutButton/> }
 {user &&  <CreatePost/> }
    </Container>
  )
}

export default App
