import mongoose, { Schema, model } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: function (value: string) {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailRegex.test(value);
        },
        message: `{VALUE} is not a valid email!`,
      },
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cars",
      required: true,
    },
    quantity: {
      type: Number,
      required: [true, "quantity is required"],
    },
    totalPrice: {
      type: Number,
      required: [true, "totalPrice is required"],
    },
  },
  {
    timestamps: true, // Enable timestamps
  }
);

export const orderModel = model<Order>("orders", orderSchema);
