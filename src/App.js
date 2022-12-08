import './App.css';
import Nav from './componnents/Nav/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DialogsContainer from "./componnents/Dialogs/DialogsContainer";
import UsersContainer from "./componnents/Users/UsersContainer";
import ProfileContainer from "./componnents/Profile/ProfileContainer";
import HeaderContainer from "./componnents/Header/HeaderContainer";
import LoginPage from "./componnents/Login/Login";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile/:id" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
