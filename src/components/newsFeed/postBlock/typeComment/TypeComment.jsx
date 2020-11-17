import React from 'react';
import style from './TypeComment.module.css';
import {
    addCommentActionCreator, commentTextUpdateActionCreator,
} from "../../../../redux/newsFeed-reducer";


class typeMessage extends React.Component {
    render() {
        const newText = React.createRef()

        const textUpdate = () => {
            const text = newText.current.value
            this.props.dispatch(commentTextUpdateActionCreator(text))
        }
        const addComment = () => {
            this.props.dispatch(addCommentActionCreator())
        }
        return (

            <div className={style.typeCommentBlock}>
                <div className={style.options}>
                    <img src="#" alt="ico"/>
                    <img src="#" alt="ico"/>
                </div>
                <div>
                    <form action="#" className={style.typeCommentForm}>
                        <textarea ref={newText}
                                  placeholder="Type new comment"
                                  className={style.typeCommentInput}
                                  value={this.props.newComment}
                                  onChange={textUpdate}/>
                    </form>
                </div>
                <div className={style.send}>
                    <img src="#" alt="ico"/>
                    <button onClick={addComment}>Send</button>
                </div>
            </div>
        )
    }
}

export default typeMessage;