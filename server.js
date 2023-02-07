import cors from "cors";
import express from "express";
import restaurants from "./api/restaurants.route.js";

const app = express();
app.use(cors());
app.use(express.json()); // Allow to the server to accept a json in thre body of the req

app.use("/", restaurants);
// app.use("*", (req, res) => {
//   res.status(404).json({
//     error: "not found",
//   });
// });

export default app;
