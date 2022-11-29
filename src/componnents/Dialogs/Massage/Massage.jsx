import s from './Massage.module.css'

const Message = (props) => {
    return (
        <div className={s.massage}>{props.message}</div>
    )
}

export default Message;