const { Plant: PlantModel } = require("../models/Plant");

const serviceController = {

    create: async(req, res) => {
        try{
            const plant = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };
            const response = await PlantModel.create(service);

            res.status(201).json({response, msg: "Planta cadastrada com sucesso!"});
        } catch (error){
            console.log(error);
        }
    },
};

module.exports = serviceController; 
