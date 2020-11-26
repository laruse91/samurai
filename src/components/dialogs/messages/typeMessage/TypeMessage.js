import React from 'react';
import style from './TypeMessage.module.css';

const typeMessage = (props) => {


    const messageText = React.createRef();

    const textUpdate = () => {
        const text = messageText.current.value;
        props.textUpdate(text);
    }
    const sendMessage = () => {
        props.sendMessage();
    }

    return (
        <div className={style.newContentCard}>
            <div className={style.options}>
                <img src="#" alt="ico"/>
                <img src="#" alt="ico"/>
            </div>
            <div>
                <form action="#" className={style.newContentForm}>
                        <textarea ref={messageText}
                                  placeholder="Type your message"
                                  className={style.newContentInput}
                                  value={props.newMessage}
                                  onChange={textUpdate}/>
                </form>
            </div>
            <div className={style.send}>
                <img src="#" alt="ico"/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default typeMessage;