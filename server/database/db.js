import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();



const DBConnection = async () => {
    const MONGO_URL = process.env.MONGO_URL;
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
        console.log("DB is connected succesfully...")
    } catch (error) {
        console.log("Error while connecting with DB" + error.message);
    }
}

export default DBConnection;