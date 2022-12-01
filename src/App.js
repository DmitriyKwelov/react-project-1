import './App.css';
import Header from './componnents/Header/Header';
import Nav from './componnents/Nav/Nav';
import Profile from './componnents/Profile/Profile';
import Dialogs from './componnents/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {updateNewPostText} from "./redux/store";
import DialogsContainer from "./componnents/Dialogs/DialogsContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
