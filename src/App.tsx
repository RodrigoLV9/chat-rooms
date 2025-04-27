import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header/Header'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import {MainPage} from './pages/MainPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { TermsService } from './pages/TermsService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ContactUs } from './pages/ContactUs';
import { ChatRoom } from './pages/ChatRoom';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useUser } from './Contexts/UserContext';

function App() {
  const {setUser}=useUser()
  const auth=getAuth()
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser({
          id: user.uid,
          username: user.displayName,
          email: user.email,
        });
      }else{
        setUser(undefined)
      }
    })
    return ()=> unsubscribe()
  },[auth,setUser])
  return (
    <>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/chat-room' element={<ChatRoom/>}/>
            <Route path='/terms-service' element={<TermsService/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}
export default App
