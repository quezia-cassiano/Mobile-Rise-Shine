const mongoose = require("mongoose");

const { Schema } = mongoose;

const plantSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    { timestamps: true }
});

const Plant = mongoose.model("Plant", plantSchema);

model.exports = {
    Plant,
    plantSchema,
};