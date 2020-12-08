import React from 'react';
import style from './People.module.css';
import UserBlock from './userBlock/UserBlock'
import Preloader from "../common/preloader/Preloader";
import Paginator from "../common/paginator/Paginator";

const People = (props) => {
    const people = props.users
        .map(user => <UserBlock user={user} key={user.id}
                                follow={props.follow}
                                unfollow={props.unfollow}
                                followingInProgress={props.followingInProgress}
        />)

    return (
        <div className={style.people}>
            <div className={style.titleBlock}>
                <h2 className={style.title}>People</h2>
            </div>

            <Paginator totalItemsNum={props.totalUsers}
                       numberOfUsersOnPage={props.numberOfUsersOnPage}
                       currentPage={props.currentPage}
                       getItems={props.getPeople}
            />

            {props.isFetching ? <Preloader/> : null}
            <div className={style.users}>
                {people}
            </div>
            <div className={style.more}>
                <button className={style.btn}
                        onClick={() => {
                            props.getPeople(props.currentPage + 1, "ADD")
                        }}>More people
                </button>
            </div>
        </div>
    )
}

export default People;