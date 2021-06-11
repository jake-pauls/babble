import io from 'socket.io-client'

export const socket = io(process.env.VUE_APP_PEER_SERVER_URL || 'localhost')
