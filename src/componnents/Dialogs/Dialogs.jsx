import s from './Dialogs.module.css';
import Message from "./Massage/Massage";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    let state = props.messagePage;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    state.dialogs.map(d =>
                        <DialogItem name={d.name} key={d.id} id={d.id}/>
                    )
                }
            </div>
            <div className={s.messages}>
                <div>
                    {
                        state.messages.map(m =>
                            <Message message={m.massage} key={m.id}/>
                        )
                    }
                </div>
                <div>
                    <textarea value={state.newMessageBody}
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