import s from './Dialogs.module.css';
import Message from "./Massage/Massage";
import DialogItem from "./DialogItem/DialogItem";
import {Navigate} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.messagePage;

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }
    return (
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
               <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;