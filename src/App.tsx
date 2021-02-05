import React, {useEffect} from 'react'
import './App.css'
import 'antd/dist/antd.css'
import {Sidebar} from './components/sidebar/Sidebar'
import {NewsFeedPage} from './pages/newsFeedPage/NewsFeedPage'
import {Header} from './components/header/Header'
import {Redirect, Route, Switch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {initializeApp} from './redux/app-reducer'
import {Preloader} from './components/common/preloader/Preloader'
import {withReactSuspense} from './hoc/withReactSuspense'
import {PeoplePage} from './pages/peoplePage/PeoplePage'
import {Navbar} from './components/navbar/Navbar'
import {selectIsInitialized} from './selectors/selectors'
import ProfileContainer from './pages/profilePage/ProfileContainer'
import CoronaPage from './pages/coronaPage/CoronaPage'

// React.lazy , Suspense
const DialogsPage = React.lazy(() => import('./pages/dialogsPage/DialogsPage'))
const Login = React.lazy(() => import('./pages/loginPage/LoginPage'))
const ErrorPage = React.lazy(() => import('./pages/errorPage/ErrorPage'))
const ChatPage = React.lazy(() => import('./pages/chatPage/СhatPage'))

const App: React.FC = React.memo(() => {
//useSelector Hook
    const isInitialized = useSelector(selectIsInitialized)

//useDispatch Hook
    const dispatch = useDispatch()
    const initialize = () => dispatch(initializeApp())

//useEffect Hooks
    useEffect(() => {
        initialize()
    }, [])

    const newsFeedPage = () => <NewsFeedPage/>
    const profilePage = () => <ProfileContainer/>
    const coronaPage = withReactSuspense(() => <CoronaPage/>)
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
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={'/newsfeed'}/>}/>
                    <Route path='/newsfeed' render={newsFeedPage}/>
                    <Route path='/profile/:userId?' render={profilePage}/>
                    <Route path='/dialogs/:userId?' render={dialogsPage}/>
                    <Route path='/people' render={peoplePage}/>
                    <Route path='/login' render={loginPage}/>
                    <Route path='/chat' render={chatPage}/>
                    <Route path='/coronavirus' render={coronaPage}/>
                    <Route path='/*' render={errorPage}/>
                </Switch>
            </main>
            <Sidebar/>
        </div>
    )
})
export default App
