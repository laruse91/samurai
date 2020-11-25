import React from 'react';
import style from './UserCard.module.css'

class UserCard extends React.Component {

  render() {

    return (
      <div className={style.userCard}>
          <img src={this.props.photo}
            alt="ico" />
        <div className={style.userDesc}>
          <h4 className={style.userName}>{this.props.name} {this.props.lastName}</h4>
          <span className={style.actionTime}>1h ago</span>
        </div>
      </div>
    )
  }
}

export default UserCard; 