import { Request, Response } from "express";
import { carServices } from "./car.services";

const createCar = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const result = await carServices.createCar(data);

    res.json({
      message: "car created successfully",
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.json({
      message: "Validation failed",
      success: false,
      error: err.message,
      stack: err.stack,
    });
  }
};
const getAllCar = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;

    const result = await carServices.getAllCar(searchTerm as string);

    res.json({
      message: "Cars retrieved successfully",
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.json({
      message: "Validation failed",
      success: false,
      error: err.message,
      stack: err.stack,
    });
  }
};
const getSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await carServices.getSingleCar(carId);

    res.json({
      message: "Cars retrieved successfully",
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.json({
      message: "Validation failed",
      success: false,
      error: err.message,
      stack: err.stack,
    });
  }
};

const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const data = req.body;
    const result = await carServices.updateCar(carId, data);

    res.json({
      message: "Car updated successfully",
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.json({
      message: "Validation failed",
      success: false,
      error: err.message,
      stack: err.stack,
    });
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;

    const result = await carServices.deleteCar(carId);

    res.json({
      message: "Car deleted successfully",
      success: true,
      data: {},
    });
  } catch (err: any) {
    res.json({
      message: "Validation failed",
      success: false,
      error: err.message,
      stack: err.stack,
    });
  }
};

export const carController = {
  createCar,
  getAllCar,
  getSingleCar,
  updateCar,
  deleteCar,
};
