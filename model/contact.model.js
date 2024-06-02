import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: { // Correct field name
        type: String,
        required: true,
    },
});

export default mongoose.model("Contact", contactSchema);


