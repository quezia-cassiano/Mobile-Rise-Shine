const mongoose = require("mongoose");

const { Schema } = mongoose;

const {plantSchema} = require("./Plant");

const  userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    data_nascimento: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    { timestamps: true }
});

const User = mongoose.model("User", userSchema);

model.exports = User;