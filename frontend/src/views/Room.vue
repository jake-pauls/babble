<template>
  <div class="h-full flex bg-black">
    <div class="p-4 fluid relative">
      <Video @loadeddata="loadeddata" class="object-contain" :stream="peerVideo" />
      <div
        v-if="!peerVideoLoaded"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white rounded-2xl"
      >
        <h2 class="align-middle text-black text-xl">Share this code to start!</h2>
        <div class="flex mt-6 rounded-md idInput">
          <input ref="copyField" class="w-full p-3 focus:outline-none" :value="myPeer.id" readonly />
          <button class="mr-2 focus:outline-none" @click="copyID">
            <div class="flex w-9 h-9 mx-auto rounded-full hover:bg-gray-300">
              <i
                class="flex-auto self-center text-2xl copyIcon"
                :class="copied ? 'ri-check-line' : 'ri-clipboard-line'"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="p-4 fluid">
      <Video class="object-contain" :stream="localVideo" />
    </div>
  </div>
</template>

<script>
  import Video from '@/components/Video'
  import { generatePeer, requestAudioVideo } from '@/utils/peerUtils'
  import { socket } from '@/utils/socketUtils'

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
        outgoingPeerId: '',
        peerVideoLoaded: false,
        copied: false
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

      socket.on('connect', () => {
        console.log(socket.id)
      })
    },
    methods: {
      loadeddata() {
        this.peerVideoLoaded = true
      },
      copyID() {
        this.copied = true

        this.$refs.copyField.select()

        document.execCommand('copy')

        setTimeout(() => {
          this.copied = false
        }, 300)
      }
    }
  }
</script>

<style scoped>
  .fluid {
    width: 100%;
    height: 100%;
  }

  .fluid video {
    height: 100%;
    margin: auto;
  }

  .idInput,
  .idInput input {
    background: #f1f3f4;
  }

  .copyIcon {
    color: #5f6368;
  }
</style>
