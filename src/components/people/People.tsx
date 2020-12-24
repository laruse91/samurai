import React from 'react';
import style from './People.module.css';
import UserBlock from './userBlock/UserBlock'
import Preloader from "../common/preloader/Preloader";
import Paginator from "../common/paginator/Paginator";
import {TUser} from "../../types/types";
import SearchForm from "../common/searchForm/SearchForm";
import {TFilter} from "../../redux/people-reducer";

type PropsType = {
    users: Array<TUser>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    isFetching: boolean
    totalUsers: number
    numberOfUsersOnPage: number
    currentPage: number
    getPeople: (pageNum: number, requestType: string) => void
    onFilterChange: (filter: TFilter)=>void
}

const People: React.FC<PropsType> = (props) => {
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
            <SearchForm onFilterChange={props.onFilterChange}/>
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