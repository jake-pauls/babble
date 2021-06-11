import io from 'socket.io-client'
import { __PROD__ } from './env'

export const socket = io('babble-backend.herokuapp.com' || 'localhost', {
  secure: __PROD__ ? true : false
})
