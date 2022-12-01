import {sendMessageCreate, updateNewMessageBodyCreate} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagePage: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreate(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreate())
        },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;