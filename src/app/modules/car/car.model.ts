import { Schema } from "mongoose";
import { Car } from "./car.interface";
import { model } from "mongoose";

const carSchema = new Schema<Car>(
  {
    brand: {
      type: String,
      required: [true, "brand is required"],
    },
    model: {
      type: String,
      required: [true, "model is required"],
    },
    year: {
      type: Number,
      required: [true, "year is required"],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    category: {
      type: String,
      enum:{
        values:["Sedan", "SUV", "Truck", "Coupe", "Convertible"],
        message:`category must be any of them - "Sedan", "SUV", "Truck", "Coupe", "Convertible"`
      },
      required: true,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    quantity: {
      type: Number,
      required: [true, "quantity is required"],
    },
    inStock: {
      type: Boolean,
      required: [true, "inStock is required"],
    },
  },
  {
    timestamps: true, // Enable timestamps
  }
);

export const carModel = model<Car>("cars", carSchema);
