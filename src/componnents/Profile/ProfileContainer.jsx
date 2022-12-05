import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer";
import {
    useLocation,
        useNavigate,
        useParams,
} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params.id;
        if(!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUsersProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
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

export default connect(mapStateToProps, {setUsersProfile})(withRouter(ProfileContainer));