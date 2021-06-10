<template>
  <div class="">
    <Video class="h-1/2" :stream="peerVideo" />
    <Video class="h-1/2" :stream="localVideo" />
  </div>
</template>

<script>
  import Video from '@/components/Video'
  import { generatePeer, requestAudioVideo } from '../utils/peerUtils.js'

  export default {
    name: 'Room',
    components: {
      Video
    },
    data() {
      return {
        myPeer: {},
        localVideo: {},
        peerVideo: {},
        outgoingPeerId: ''
      }
    },
    async mounted() {
      requestAudioVideo({
        success: stream => {
          this.localVideo = stream

          if (this.$route.params.roomId) {
            this.outgoingPeerId = this.$route.params.roomId

            const call = this.myPeer.call(this.outgoingPeerId, stream)

            call.on('stream', stream => {
              this.peerVideo = stream
            })
          }
        },
        error: err => {
          console.error('Error accessing local camera and video.', err)
        }
      })

      this.myPeer = generatePeer()

      this.myPeer.on('call', call => {
        call.answer(this.localVideo)

        this.outgoingPeerId = call.peer

        call.on('stream', stream => {
          this.peerVideo = stream
        })
      })
    }
  }
</script>
