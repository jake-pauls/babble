<template>
    <h1>This is the Start view</h1>
    <div>
        <input type="text" v-model="submittedPeerId" placeholder="Enter a peer id" />
        <button v-on:click="submitPeerId">Submit</button>
    </div>
    <div>
        <video width="300" height="300" autoplay="autoplay" muted="true"></video>
        <span>You</span>
    </div>
    <div>
        <video width="300" height="300" autoplay="autoplay"></video>
        <span>Them</span>
    </div>
</template>

<script>
import { generatePeerId, connectToPeer } from "../utils/peerUtils.js";

export default {
  name: 'Start',
  data() {
    return {
      myPeerId: "",
      submittedPeerId: "",
    };
  },
  mounted() {
    // On mount create a peer ID
    this.myPeerId = generatePeerId();
    console.log(`ID: ${this.myPeerId}`);
    this.myPeerId.on("connection", (conn) => {
        console.log("Incoming peer connection!");
        conn.on("data", (data) => {
            console.log(`received: ${data}`);
        });
        conn.on("open", () => {
            conn.send("I called you!");
        });
    });
  },
  methods: {
    submitPeerId() {
      console.log(`Submitting peer id: ${this.submittedPeerId}`);
      connectToPeer(this.myPeerId, this.submittedPeerId)
    }
  }
}
</script>
