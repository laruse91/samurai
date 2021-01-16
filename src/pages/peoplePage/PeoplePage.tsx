import React, {useEffect, useState} from 'react'
import style from './PeoplePage.module.css'
import {UserCard} from './userCard/UserCard'
import {Preloader} from '../../components/common/preloader/Preloader'
import {SearchForm} from '../../components/common/searchForm/SearchForm'
import {follow, requestUsers, TFilter, unfollow} from '../../redux/people-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {
    selectFilter,
    selectFollowingInProgress,
    selectIsFetching,
    selectTotalUsers,
    selectUsers
} from '../../redux/selectors'
import {useHistory} from 'react-router-dom'
import * as queryString from 'querystring'
import {Pagination} from 'antd'

type TQueryParams = { term?: string, friend?: string, page?: string }

export const PeoplePage: React.FC = React.memo(() => {
//useState Hook
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
//useSelector Hook
    const users = useSelector(selectUsers)
    const totalUsers = useSelector(selectTotalUsers)
    const isFetching = useSelector(selectIsFetching)
    const followingInProgress = useSelector(selectFollowingInProgress)
    const filter = useSelector(selectFilter)
//useDispatchHook
    const dispatch = useDispatch()
//useHistoryHook
    const history = useHistory()
// useEffect Hooks
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
        dispatch(requestUsers(actualPage, pageSize, 'SET', actualFilter))
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

    const onPageChange = (pageNum: number, pSize?: number) => {
        setCurrentPage(pageNum)
        pSize && setPageSize(pSize)
        dispatch(requestUsers(pageNum, !pSize ? pageSize : pSize, 'SET', filter))
    }
    const getMorePeople = () => {
        setCurrentPage(currentPage + 1)
        dispatch(requestUsers(currentPage + 1, pageSize, 'ADD', filter))
    }
    const onFilterChange = (filter: TFilter) => {
        dispatch(requestUsers(1, pageSize, 'SET', filter))
        setCurrentPage(1)
    }

    const people = users.map(user => <UserCard user={user} key={user.id} follow={followUser} unfollow={unfollowUser}
                                               followingInProgress={followingInProgress}/>)

    return (
        <>
            <section className={style.titleBlock}>

                <div className={style.title}>
                    <h2>People</h2>
                </div>

                <div className={style.pages}>
                    <Pagination defaultCurrent={currentPage} total={totalUsers} onChange={onPageChange}
                                onShowSizeChange={onPageChange}/>
                </div>
            </section>

            <section className={style.people}>

                <SearchForm onFilterChange={onFilterChange} filter={filter}/>

                {isFetching ? <Preloader/> : null}

                <div className={style.users}>
                    {people}
                </div>

                {currentPage < (Math.ceil(totalUsers / pageSize))
                    ? <div className={style.more}>
                        <button className={style.btn}
                                onClick={getMorePeople}>
                            More people
                        </button>
                    </div>
                    : null}

            </section>
        </>
    )
})
