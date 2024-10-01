import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import SignUp from './components/SignUp/signUp';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/dashboard';
import DisplayTemplates from './components/DisplayTemplates/displayTemplates';
import FillResume from './components/FillResume/fillResume';
import AuthProvider from './authentication';
import ShowResumes from './components/ShowResumes/showResumes';
function App() {
  return (
   <>
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path='/dashboard' exact element={<Dashboard/>}></Route>
      <Route path='/signup' exact element={<SignUp/>}></Route>
      
      <Route path='/' exact element={<Login/>}></Route>
      <Route path='/displaytemplates' exact element={<DisplayTemplates/>}></Route>
      <Route path='/fillresume/:id' exact element={<FillResume/>}></Route>
      <Route path='/resumes' exact element={<ShowResumes/>}></Route>
    </Routes>
    </AuthProvider>
    </BrowserRouter>

   </>
  );
}

export default App;
