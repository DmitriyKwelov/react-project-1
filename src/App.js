import './App.css';
import Header from './componnents/Header/Header';
import Nav from './componnents/Nav/Nav';
import Profile from './componnents/Profile/Profile';
import Dialogs from './componnents/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPage} />} />
            <Route path="/profile" element={<Profile state={props.state.profilePage}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
