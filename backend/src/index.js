import express  from "express";
import { ExpressPeerServer } from "peer";

const main = async () => {
    const app = express();

    app.use(express.json());

    app.listen(4040, () => {
        console.log("Server listening on https://localhost:4040");
    });

    app.get("/ping", (_req, _res) => {
        _res.status(200).send({
            ping: "pong",
        });
    });

    // Configure peer server endpoint with express
    app.use("/peer", ExpressPeerServer(app, {
        debug: true,
    }));
};

main().catch((err) => {
    console.warn(err);
});
