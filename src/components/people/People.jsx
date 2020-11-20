import React from 'react';
import style from './People.module.css';
import UserBlock from './userBlock/UserBlock'
import * as axios from 'axios'

class People extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3000/users?_page=${this.props.currentPage}&_limit=${this.props.numberOfUsersOnPage}`).then(response => {
            this.props.setUsers(response.data)
        })
    }
    changePage(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:3000/users?_page=${pageNumber}&_limit=${this.props.numberOfUsersOnPage}`).then(response => {
            this.props.setUsers(response.data)
        })
    }

    render() {

        const people = this.props.users
            .map(user => <UserBlock key={user.id}
                                    id={user.id}
                                    name={user.name}
                                    lastName={user.lastName}
                                    photo={user.photo}
                                    location={user.location}
                                    status={user.status}
                                    followed={user.followed}
                                    follow={this.props.follow}
                                    unfollow={this.props.unfollow}
                                    setUsers={this.props.setUsers}
            />)

        const pagesCount = Math.ceil(this.props.totalPages / this.props.numberOfUsersOnPage)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i + ' ');
        }


        return (
            <div className={style.people}>
                <div className={style.titleBlock}>
                    <h2 className={style.title}>People</h2>
                    <div className={style.pages}>

                        {pages.map(page => {
                            return <span className={this.props.currentPage === page && style.currentPage}
                                         onClick ={() => {this.changePage(page)}}>
                                {page}
                            </span>
                        })}
                    </div>
                </div>
                <div className={style.users}>
                    {people}
                </div>
                <div className={style.more}>
                    <button className={style.btn}>More people</button>
                </div>
            </div>
        )
    }
}

export default People;