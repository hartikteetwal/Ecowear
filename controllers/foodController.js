import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item

const addFood = async(req,res)=>{

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        Category:req.body.Category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// All food list 
const listFood = async(req,res)=>{
    try {
        const foods = await foodModel.find({})
        res.json({success:true,foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// Remove food item
const removeFood = async(req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"food remove"})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }
}

export {addFood,listFood,removeFood}