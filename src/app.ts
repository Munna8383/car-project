import { Application, Request, Response } from "express";
import cors from "cors";
import express from "express";
import { carRoute } from "./app/modules/car/car.route";
import { orderRoute } from "./app/modules/order/order.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

// routes
app.use("/api", carRoute);
app.use("/api", orderRoute);

app.get("/", async (req: Request, res: Response) => {
  res.send("car project is running");
});

export default app;
