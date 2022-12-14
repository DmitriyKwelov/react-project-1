import {sendMessageCreate, updateNewMessageBodyCreate} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect"
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messagePage: state.messagesPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreate(newMessageBody))
        },
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);