import express  from "express";
import cors from "cors";
import { ExpressPeerServer } from "peer";

const main = async () => {
    const app = express();

    app.enable('trust proxy');
    app.use(cors());
    app.use(express.json());

    const PORT = process.env.PORT || 4040;
    const server = app.listen(PORT, () => {
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
};

main().catch((err) => {
    console.warn(err);
});
