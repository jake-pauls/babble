import Peer from "peerjs";

export const generatePeer = () => {
    let peer = new Peer({
      host: "localhost",
      port: 4040,
      path: "/peer"
    });

    peer.on("open", (id) => {
      console.log("ID: " + id)
    });
    peer.on("error", (err) => {
      console.log(err);
    });

    return peer;
};

export const requestAudioVideo = (callbacks) => {
    // Ensure browser compatability
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    navigator.getUserMedia({ audio: true, video: true }, callbacks.success, callbacks.error);
};
