import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if(props.profile === null){
        return <Preloader/>
    }
    return (
        <div>
{/*            <div className='banner'>
                <img className={s.banner} src="https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt822895e5b2d9b7c7/5e381bb838beb045b856966e/Sky_Zero_image01_RGB_2500_x_950.jpg" alt="" />
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={'Hello my friends'} />
            </div>
        </div>
    )
}

export default ProfileInfo;