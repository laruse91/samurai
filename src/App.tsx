import React, {useEffect} from 'react'
import './App.css'
import 'antd/dist/antd.css'
import {Sidebar} from './components/sidebar/Sidebar'
import {NewsFeedPage} from './pages/newsFeedPage/NewsFeedPage'
import {Header} from './components/header/Header'
import {Redirect, Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {initializeApp} from './redux/app-reducer'
import {Preloader} from './components/common/preloader/Preloader'
import {withReactSuspense} from './hoc/withReactSuspense'
import {PeoplePage} from './pages/peoplePage/PeoplePage'
import {Navbar} from './components/navbar/Navbar'
import {selectIsInitialized} from './selectors/selectors'
import ProfileContainer from './pages/profilePage/ProfileContainer'
import firebase from 'firebase'
import CoronaPage from './pages/CoronaPage'

// React.lazy , Suspense
const DialogsPage = React.lazy(() => import('./pages/dialogsPage/DialogsPage'))
const Login = React.lazy(() => import('./pages/loginPage/LoginPage'))
const ErrorPage = React.lazy(() => import('./pages/errorPage/ErrorPage'))
const ChatPage = React.lazy(() => import('./pages/chatPage/СhatPage'))

const firebaseConfig = {
    apiKey: 'AIzaSyAu2tf8KisN-CYVnFVqSZpWANlAeVvkjHw',
    authDomain: 'samurai-socialnetwork.firebaseapp.com',
    projectId: 'samurai-socialnetwork',
    storageBucket: 'samurai-socialnetwork.appspot.com',
    messagingSenderId: '486897340547',
    appId: '1:486897340547:web:298c03a27d638d62ffcbb6'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

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
                <Route path='/' render={() => <Redirect to={'/newsfeed'}/>}/>
                <Route path='/newsfeed' render={newsFeedPage}/>
                <Route path='/profile/:userId?' render={profilePage}/>
                <Route path='/dialogs' render={dialogsPage}/>
                <Route path='/people' render={peoplePage}/>
                <Route path='/login' render={loginPage}/>
                <Route path='/chat' render={chatPage}/>
                <Route path='/coronavirus' render={coronaPage}/>
                <Route path='/404' render={errorPage}/>
            </main>
            <Sidebar/>
        </div>
    )
})
export default App
