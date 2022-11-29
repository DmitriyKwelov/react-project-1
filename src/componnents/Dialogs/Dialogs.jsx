import s from './Dialogs.module.css';
import Message from "./Massage/Massage";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.state.dialogs.map(d =>
                        <DialogItem name={d.name} id={d.id}/>
                    )
                }
            </div>
            <div className={s.messages}>
                {
                    props.state.messages.map(m =>
                        <Message message={m.massage}/>
                    )
                }
            </div>
        </div>
    )
}

export default Dialogs;