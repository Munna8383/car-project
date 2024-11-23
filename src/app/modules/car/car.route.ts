import express from "express";
import { carController } from "./car.controller";

const router = express.Router();

router.post("/api/cars", carController.createCar)
router.get("/api/cars", carController.getAllCar)
router.get("/api/cars/:carId", carController.getSingleCar)
router.put("/api/cars/:carId",carController.updateCar)
router.delete("/api/cars/:carId",carController.deleteCar)

export const carRoute = router;
