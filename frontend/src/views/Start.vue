<template>
    <div>
      <h1>This is the Start view</h1>
      <div>
          <input v-model="submittedPeerId" placeholder="Enter a peer id" />
          <button v-on:click="submitPeerId">Submit</button>
      </div>
      <div>
          <Video :stream="localVideo" />
          <span>{{ myPeer.id }}</span>
      </div>
      <div>
          <Video :stream="peerVideo" />
          <span>{{ outgoingPeerId }}</span>
      </div>
    </div>
</template>

<script>
import Video from "@/components/Video.vue";
import { generatePeer, requestAudioVideo } from "../utils/peerUtils.js";

export default {
  name: 'Start',
  data() {
    return {
      myPeer: {},
      submittedPeerId: "",
      outgoingPeerId: "",
      localVideo: {},
      peerVideo: {},
    };
  },
  mounted() {
    // Request audio and video from local client
    requestAudioVideo({
      success: (stream) => {
        this.localVideo = stream;
      },
      error: (err) => {
        console.log("Error accessing local camera and video.");
        console.log(err);
      },
    });

    // Generate a local peer id
    this.myPeer = generatePeer();

    this.myPeer.on("call", (call) => {
        // Answer any calls with local video
        call.answer(this.localVideo)

        // Store outgoing peer id
        this.outgoingPeerId = call.peer;

        // Retrieve desired peer's stream
        call.on("stream", (stream) => {
            this.peerVideo = stream;
        });
    });
  },
  methods: {
    submitPeerId() {
      // Outgoing peer id is who we make the call too
      this.outgoingPeerId = this.submittedPeerId;

      // Call desired peer
      let call = this.myPeer.call(this.submittedPeerId, this.localVideo);

      // Retrieve desired peer's stream
      call.on("stream", (stream) => {
        this.peerVideo = stream;
      });
    }
  },
  components: {
    Video
  }
}
</script>
