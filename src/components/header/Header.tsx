import React from "react";
import style from "./Header.module.css";
import Auth from "../common/auth/Auth";

type TProps = {
    isAuth: boolean
    login: string | null
    userPhoto : string |null
    userId: number | null
    logout: ()=>void
}

const Header = (props: TProps) => {

    return (
        <header className={style.header}>
            <div className={style.titleContainer}>
                <img src="https://iqonic.design/themes/socialv/html/images/logo.png" alt="logo" className={style.logo}/>
                <h1 className={style.title}>Social Page</h1>
            </div>
            <div className={style.search}>
                <form action="#" className={style.searchForm}>
                    <input type="search" placeholder="Type here to search" className={style.searchInput}/>
                </form>
            </div>
            <Auth isAuth={props.isAuth}
                  login={props.login}
                  userPhoto={props.userPhoto}
                  userId={props.userId}
                  logout={props.logout}
            />
        </header>
    );
}

export default Header;
