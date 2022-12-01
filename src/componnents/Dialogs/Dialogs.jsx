import s from './Dialogs.module.css';
import Message from "./Massage/Massage";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreate, updateNewMessageBodyCreate} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().messagesPage;
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreate())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreate(body))
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    state.dialogs.map(d =>
                        <DialogItem name={d.name} id={d.id}/>
                    )
                }
            </div>
            <div className={s.messages}>
                <div>
                    {
                        state.messages.map(m =>
                            <Message message={m.massage}/>
                        )
                    }
                </div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder="Enter your message"></textarea>
                </div>
                <div>
                    <button onClick={() => {onSendMessageClick()}}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;