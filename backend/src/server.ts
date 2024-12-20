import mongoose from "mongoose";
import app from "./app";
import env from "./env";
const port= process.env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING) 
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch(console.error);
