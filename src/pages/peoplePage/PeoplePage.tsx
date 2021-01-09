import React, {useEffect} from 'react'
import style from './PeoplePage.module.css'
import {UserCard} from './userCard/UserCard'
import {Preloader} from '../../components/common/preloader/Preloader'
import {Paginator} from '../../components/common/paginator/Paginator'
import {SearchForm} from '../../components/common/searchForm/SearchForm'
import {follow, requestUsers, TFilter, unfollow} from '../../redux/people-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {
    selectCurrentPage,
    selectFilter,
    selectFollowingInProgress,
    selectIsFetching,
    selectNumberOfUsersOnPage,
    selectTotalUsers,
    selectUsers
} from '../../redux/selectors'
import {useHistory} from 'react-router-dom'
import * as queryString from 'querystring'

type TQueryParams = { term?: string, friend?: string, page?: string }

export const PeoplePage: React.FC = React.memo(() => {
//useSelector Hook
    const users = useSelector(selectUsers)
    const currentPage = useSelector(selectCurrentPage)
    const totalUsers = useSelector(selectTotalUsers)
    const numberOfUsersOnPage = useSelector(selectNumberOfUsersOnPage)
    const isFetching = useSelector(selectIsFetching)
    const followingInProgress = useSelector(selectFollowingInProgress)
    const filter = useSelector(selectFilter)
//useDispatchHook
    const dispatch = useDispatch()
//useHistoryHook
    const history = useHistory()
//useEffect Hooks
    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as TQueryParams

        let actualPage = currentPage
        let actualFilter = filter

        if (parsed.page) actualPage = Number(parsed.page)
        if (parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch (parsed.friend) {
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break
            case 'false' :
                actualFilter = {...actualFilter, friend: false}
                break
            case 'true' :
                actualFilter = {...actualFilter, friend: true}
                break
        }

        dispatch(requestUsers(actualPage, numberOfUsersOnPage, 'SET', actualFilter))
    }, [])

    useEffect(() => {
        const query: TQueryParams = {}

        if (filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/people',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }
    const getPeople = (pageNum: number, requestType: string) => {
        dispatch(requestUsers(pageNum, numberOfUsersOnPage, requestType, filter))
    }
    const onFilterChange = (filter: TFilter) => {
        dispatch(requestUsers(1, numberOfUsersOnPage, 'SET', filter))
    }

    const people = users.map(user => <UserCard user={user} key={user.id}
                                               follow={followUser}
                                               unfollow={unfollowUser}
                                               followingInProgress={followingInProgress}/>)

    return (
        <div className={style.people}>
            <div className={style.titleBlock}>
                <h2 className={style.title}>People</h2>
            </div>
            <Paginator totalItemsNum={totalUsers}
                       numberOfUsersOnPage={numberOfUsersOnPage}
                       currentPage={currentPage}
                       getItems={getPeople}/>
            <SearchForm onFilterChange={onFilterChange}/>
            {isFetching ? <Preloader/> : null}
            <div className={style.peoplePage}>
                {people}
            </div>
            <div className={style.more}>
                <button className={style.btn}
                        onClick={() => {
                            getPeople(currentPage + 1, 'ADD')
                        }}>More people
                </button>
            </div>
        </div>
    )
})