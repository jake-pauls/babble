import Peer from 'peerjs'
import { __PROD__ } from './env'

export const generatePeer = () => {
  let peer = new Peer({
    host: process.env.VUE_APP_PEER_SERVER_URL || 'localhost',
    secure: __PROD__ ? true : false,
    port: __PROD__ ? 443 : 4040,
    path: '/peer'
  })

  peer.on('open', id => {
    console.log('ID: ' + id)
  })
  peer.on('error', err => {
    console.log(err)
  })

  return peer
}

export const requestAudioVideo = callbacks => {
  // Ensure browser compatability
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
  navigator.getUserMedia({ audio: true, video: true }, callbacks.success, callbacks.error)
}
