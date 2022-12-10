import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormControls";

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea}
                       validate={[required, maxLengthCreator(10)]} placeholder={"new post"}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);