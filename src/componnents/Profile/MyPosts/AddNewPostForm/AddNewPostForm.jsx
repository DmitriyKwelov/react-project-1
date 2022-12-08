import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormControls";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea} validate={[required, maxLength10]} placeholder={"new post"}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);