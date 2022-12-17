import {Field, reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import {Input, Textarea} from "../../common/FormsControls/FormControls";
import style from  "../../common/FormsControls/FormControls.module.css"

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div><button>save</button></div>
            <div>
                <b>Full name</b> <Field name="fullName" placeholder={"Full name"} component={Input}/>
            </div>
            <div>
                <b>Looking for job:</b>
                <Field name="lookingForAJob" type="checkbox" component={Input}/>
            </div>
                <div>
                    <b>My profession skills:</b>
                    <Field name={"lookingForAJobDescription"} placeholder={"My profession skills"} component={Textarea}/>
                </div>
            <div>
                <b>About me:</b>
                <Field name={"aboutMe"} placeholder={"About me"} component={Textarea}/>
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: <Field name={"contacts." + key} placeholder={key} component={Input}/></b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm;