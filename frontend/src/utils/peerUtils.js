import Peer from "peerjs";

export const generatePeerId = () => {
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

export const connectToPeer = (peer, peerId) => {
    let conn = peer.connect(peerId);
    conn.on("data", (data) => {
        console.log(`received: ${data}`);
    });
    conn.on("open", () => {
        conn.send("You called me!");
    });
};
