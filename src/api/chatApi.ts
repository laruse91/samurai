import {TChatMessage} from '../types/types'

type TSubscriber = (messages: TChatMessage[]) => void

let subscribers = [] as TSubscriber[]
let ws: WebSocket
const closeHandler = () => {
    console.log('ws closed')
    setTimeout(createChannel, 3000)
}
const messageHandler = (event: MessageEvent) => {
    const newMessages = JSON.parse(event.data)
    subscribers.forEach(s => s(newMessages))
}

function createChannel() {
    //check is ws connected or not and remove eventListener
    ws?.removeEventListener('close', closeHandler)
    ws?.close()

    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers = []
        ws.removeEventListener('close', closeHandler)
        ws.removeEventListener('message', messageHandler)
        ws.close()
    },
    subscribe(callback: TSubscriber) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: TSubscriber) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}