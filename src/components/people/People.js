import React from 'react';
import style from './People.module.css';
import UserBlock from './userBlock/UserBlock'
import Preloader from "../common/preloader/Preloader";

const People = (props) => {
    const people = props.users
        .map(user => <UserBlock user={user} key={user.id}
                                follow={props.follow}
                                unfollow={props.unfollow}
                                followingInProgress={props.followingInProgress}
        />)

    // const pagesCount = Math.ceil(props.totalUsers / props.numberOfUsersOnPage)
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // }

    return (
        <div className={style.people}>
            <div className={style.titleBlock}>
                <h2 className={style.title}>People</h2>
                {/*<div className={style.pages}>*/}
                {/*    {pages.map(page => {*/}
                {/*        return (*/}
                {/*            <span key={page}*/}
                {/*                  className={props.currentPage === page ? style.currentPage : null}*/}
                {/*                  onClick={() => {props.changePage(page)}}>*/}
                {/*                {page}*/}
                {/*            </span>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</div>*/}
            </div>
            {props.isFetching ? <Preloader/> : null}
            <div className={style.users}>
                {people}
            </div>
            <div className={style.more}>
                <button className={style.btn}
                        onClick={() => {props.changePage(props.currentPage + 1)}}>More people</button>
            </div>
        </div>
    )
}

export default People;