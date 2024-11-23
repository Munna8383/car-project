import { Car } from "./car.interface";
import { carModel } from "./car.model";

const createCar = async (data: Car) => {
  const result = await carModel.create(data);
  return result;
};

const getAllCar = async(searchTerm:string|undefined)=>{
    const result = await carModel.find({
        $or:[
            {brand:{$regex:searchTerm||"",$options:"i"}},
            {model:{$regex:searchTerm||"",$options:"i"}},
            {category:{$regex:searchTerm||"",$options:"i"}}
        ]
    })
    return result
}

const getSingleCar = async(carId:string)=>{
     const result = await carModel.findById(carId)

     return result
}

const updateCar =async(id:string,data:Partial<Car>)=>{

  const result = await carModel.findByIdAndUpdate({_id:id},{...data},{new:true})

  return result



}

const deleteCar = async(id:string)=>{
  const result = await carModel.findByIdAndDelete({_id:id})

  return result
}



export const carServices = {
  createCar,
  getAllCar,
  getSingleCar,
  updateCar,
  deleteCar
};
