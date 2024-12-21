import mongoose from "mongoose";
import * as yup from "yup";

export const objectIdSchema =yup.string()
.test(
    "valid-object-id",                  
    "${path} is not a valid object ID",
    value => !value || mongoose.Types.ObjectId.isValid(value),
       
    
);
