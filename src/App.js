import './App.css';
import Header from './componnents/Header/Header';
import Nav from './componnents/Nav/Nav';
import Profile from './componnents/Profile/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DialogsContainer from "./componnents/Dialogs/DialogsContainer";
import UsersContainer from "./componnents/Users/UsersContainer";
import ProfileContainer from "./componnents/Profile/ProfileContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
