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

function App() {
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
