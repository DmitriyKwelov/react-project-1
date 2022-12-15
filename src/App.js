import './App.css';
import Nav from './componnents/Nav/Nav';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import UsersContainer from "./componnents/Users/UsersContainer";
import HeaderContainer from "./componnents/Header/HeaderContainer";
import LoginPage from "./componnents/Login/Login";
import React, {Component, Suspense } from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./componnents/common/Preloader/Preloader";

// import ProfileContainer from "./componnents/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./componnents/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./componnents/Dialogs/DialogsContainer'));
// import DialogsContainer from "./componnents/Dialogs/DialogsContainer";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
        <BrowserRouter>
          <div className="app-wrapper">
            <HeaderContainer/>
            <Nav/>
            <div className='app-wrapper-content'>
              <Suspense fallback={<div><Preloader /></div>}>
              <Routes>
                <Route path="/profile" element={<ProfileContainer/>}/>
                <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                <Route path="/profile/:id" element={<ProfileContainer/>}/>
                <Route path="/users" element={<UsersContainer/>}/>
                <Route path="/login" element={<LoginPage/>}/>
              </Routes>
              </Suspense>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
