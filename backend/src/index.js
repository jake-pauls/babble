import express from "express";
import cors from "cors";
import { ExpressPeerServer } from "peer";
import { createServer } from "http"
import { Server } from "socket.io"

const main = async () => {
    const app = express();
    const httpServer = createServer(app);

    app.enable('trust proxy');
    app.use(cors());
    app.use(express.json());

    const PORT = process.env.PORT || 4040;
    const server = httpServer.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });

    // Test endpoint
    app.get("/ping", (_req, _res) => {
        _res.status(200).send({
            ping: "pong",
        });
    });

    // Establish connection to peer server
    const peerServer = ExpressPeerServer(server, {
        path: "/peer",
    });

    app.use("/", peerServer);

    const io = new Server(httpServer, {
      serveClient: false
    });;

    const unMatched = []

    const removeSocket = socketId => {
      const index = unMatched.findIndex(socket => socket.id === socketId);

      if (index > -1) {
        unMatched.splice(index, 1);
      }
    }

    io.on("connection", socket => {
      unMatched.push(socket);

      socket.on("setPeerId", peerId => {
        socket.peerId = peerId
      });

      socket.on("getMatch", () => {
        const match = unMatched.shift();

        if (match.id === socket.id || !match.peerId) {
          unMatched.push(match);
        } else {
          removeSocket(socket.id);

          socket.emit("foundMatch", match.peerId);
        }
      })

      socket.on("disconnect", () => {
        removeSocket(socket.id)
      })
    })
};

main().catch((err) => {
    console.warn(err);
});
