import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store'
import {Provider} from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/database'

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
export const db = firebase.database()

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)


