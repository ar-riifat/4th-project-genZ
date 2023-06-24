import mongoose from "mongoose";


export const Connection = async () => {
    const URL = `mongodb+srv://arrifat:Rifat7676@cluster0.gl4jgnt.mongodb.net/`;

        try{
    mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Database Connected Successfully');
            } catch (error) {
                    console.log('Error while connection with database', error.message);
    }
    }

export default Connection;