import { Car } from "../car/car.interface";
import { carModel } from "../car/car.model";
import { Order } from "./order.interface";
import { orderModel } from "./order.model";

const createOrder = async (data: Order) => {
  const order = data;

  const data1: any = await carModel.findById({ _id: order.car });

  if (data1?.quantity - order.quantity < 0) {
    return null;
  } else {
    const result = await orderModel.create(order);

    const data2 = await carModel.findByIdAndUpdate(
      { _id: order.car },
      {
        $inc: { quantity: -order.quantity },
        $set: { inStock: data1.quantity <= 1 ? false : true },
      }
    );

    return result;
  }
};

const getAllRevenue = async () => {
  const result = await orderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  return result[0];
};

export const orderServices = {
  createOrder,
  getAllRevenue,
};
