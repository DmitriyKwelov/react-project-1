import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect"
import {compose} from "redux";

class ProfileContainer extends React.Component{

    refreshProfile() {
        let userId = this.props.router.params.id;
        if(!userId) {
            userId = this.props.authorizedUserId;
        }
        if(!userId) {
            return <Navigate to={"/login"}/>
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.router.params.id != prevProps.router.params.id)
        this.refreshProfile();
    }

    render() {
        return (
            <Profile isOwner={!this.props.router.params.id} {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

function withRouter(ProfileContainer) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <ProfileContainer
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
export default compose(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
    )(ProfileContainer);