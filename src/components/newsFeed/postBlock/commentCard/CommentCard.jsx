import React from 'react';
import style from './CommentCard.module.css'


class CommentCard extends React.Component {

    render() {

        return (
            <div className={style.commentCard}>
                <div className={style.user}>
                    <img
                        src={this.props.photo}
                        alt="ico"/>
                </div>
                <div className={style.commentArea}>
                    <div className={style.userDesc}>
                        <h4>{this.props.name} {this.props.lastName}</h4>
                        <span className={style.actionTime}>15min ago</span>
                    </div>
                    <div>
                        <p>
                            {this.props.content}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentCard;