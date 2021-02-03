import {TChatMessage, TWebSocketStatus} from '../types/types'

type TMessagesReceivedSubscriber = (messages: TChatMessage[]) => void
type TStatusChangedSubscriber = (status: TWebSocketStatus) => void
type TEventsNames = 'messages-received' | 'status-changed'

const subscribers = {
    'messages-received': [] as TMessagesReceivedSubscriber[],
    'status-changed': [] as TStatusChangedSubscriber[],
}

let ws: WebSocket
const closeHandler = () => {
    console.log('ws closed')
    subscribers['status-changed'].forEach(s=>s('pending'))
    setTimeout(createChannel, 3000)
}
const messageHandler = (event: MessageEvent) => {
    const newMessages = JSON.parse(event.data)
    subscribers['messages-received'].forEach(s => s(newMessages))
}
const openHandler = () => {
    subscribers['status-changed'].forEach(s=>s('ready'))
}
const errorHandler = () => {
    subscribers['status-changed'].forEach(s=>s('error'))
    console.log('Refresh page')
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

function createChannel() {
    //check is ws connected or not and remove eventListener
    cleanUp()
    ws?.close()

    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    subscribers['status-changed'].forEach(s=>s('pending'))
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
        ws.close()
    },
    subscribe(eventName: TEventsNames, callback: TMessagesReceivedSubscriber | TStatusChangedSubscriber) {
        // @ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: TEventsNames, callback: TMessagesReceivedSubscriber | TStatusChangedSubscriber) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}