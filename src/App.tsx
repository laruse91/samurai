import React, {useEffect} from 'react'
import './App.css'
import 'antd/dist/antd.css'
import {Sidebar} from './components/sidebar/Sidebar'
import {Footer} from './components/footer/Footer'
import NewsFeedContainer from './pages/newsFeedPage/NewsFeedContainer'
import {Header} from './components/header/Header'
import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {initializeApp} from './redux/app-reducer'
import {Preloader} from './components/common/preloader/Preloader'
import {withReactSuspense} from './hoc/withReactSuspense'
import {PeoplePage} from './pages/peoplePage/PeoplePage'
import {Navbar} from './components/navbar/Navbar'
import {selectIsInitialized} from './redux/selectors'
import  ProfileContainer  from './pages/profilePage/ProfileContainer'

// React.lazy , Suspense
const DialogsPage = React.lazy(() => import('./pages/dialogsPage/DialogsPage'))
const Login = React.lazy(() => import('./pages/loginPage/LoginPage'))
const ErrorPage = React.lazy(() => import('./pages/errorPage/ErrorPage'))
const ChatPage = React.lazy(() => import('./pages/chatPage/СhatPage'))

export const App: React.FC = React.memo(() => {
//useSelector Hook
    const isInitialized = useSelector(selectIsInitialized)

//useDispatch Hook
    const dispatch = useDispatch()
    const initialize = () => dispatch(initializeApp())

//useEffect Hooks
    useEffect(() => {
        initialize()
    }, [])

    const newsFeedPagePage = () => <NewsFeedContainer/>
    const profilePage = () => <ProfileContainer/>
    const dialogsPage = withReactSuspense(() => <DialogsPage/>)
    const peoplePage = () => <PeoplePage/>
    const loginPage = withReactSuspense(() => <Login/>)
    const errorPage = withReactSuspense(() => <ErrorPage/>)
    const chatPage = withReactSuspense(() => <ChatPage/>)

    if (!isInitialized) {
        return <Preloader/>
    }
    return (
        <div className='app'>
            <Header/>
            <Navbar/>
            <main className='main'>
                {/*<Route path='/' render={() => <Redirect to={"/profilePage"}/>}/>*/}
                <Route path='/newsfeed' render={newsFeedPagePage}/>
                <Route path='/profile/:userId?' render={profilePage}/>
                <Route path='/dialogs' render={dialogsPage}/>
                <Route path='/people' render={peoplePage}/>
                <Route path='/login' render={loginPage}/>
                <Route path='/chat' render={chatPage}/>
                {/*<Route path='/*' render={errorPage}/>*/}
            </main>
            <Sidebar/>
            {/*<Footer/>*/}
        </div>
    )
})

