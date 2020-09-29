const Client = require('../models/Client');

module.exports = {
    async store(req, res){
        const { name, cpf, canal, cep, end, email} = req.body;

        const client = await Client.create({name, cpf, canal, cep, end, email});

        return res.json(client);
    }
}