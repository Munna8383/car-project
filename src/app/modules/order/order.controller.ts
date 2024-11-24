import { Request, Response } from "express";
import { orderServices } from "./order.services";


const createOrder = async (req: Request, res: Response) => {
    try {
      const data = req.body;
  
      const result = await orderServices.createOrder(data)
  
     if(result){
        res.json({
            message: "Order created successfully",
            success: true,
            data: result,
          });
     }else{

        res.json({
            message: "Insufficient Stock",
            success: false,
          
          });

     }
    } catch (err: any) {
      res.json({
        message: "Validation failed",
        success: false,
        error: err.message,
        stack: err.stack,
      });
    }
  };

  const getAllRevenue = async(req:Request,res:Response)=>{

    try{
        const result = await orderServices.getAllRevenue()

        res.json({
            message: "Revenue calculated successfully",
            status: true,
            data:result
          })
    }catch(err:any){
        res.json({
            message: "Validation failed",
            success: false,
            error: err.message,
            stack: err.stack,
          });
    }
  }

 export const orderController = {
            createOrder,
            getAllRevenue
  }