import express from "express";
import { carController } from "./car.controller";

const router = express.Router();

router.post("/cars", carController.createCar)
router.get("/cars", carController.getAllCar)
router.get("/cars/:carId", carController.getSingleCar)
router.put("/cars/:carId",carController.updateCar)
router.delete("/cars/:carId",carController.deleteCar)

export const carRoute = router;
