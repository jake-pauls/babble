import io from 'socket.io-client'
import { __PROD__ } from './env'

export const socket = io(process.env.VUE_APP_PEER_SERVER_URL || 'localhost', {
  secure: __PROD__ ? true : false
})
