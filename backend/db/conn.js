const mongoose = require("mongoose");

async function main(){
    try{
        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb+srv://qzcss:<teste>@cluster0.lwsgoad.mongodb.net/test");

        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Erro: ${error});
    },
};

module.exports = main;