const Client = require('../models/Client');
const Address = require('../models/Address');

module.exports = {
    async index(req, res) {
        const { client_id } = req.params;
    
        const client = await Client.findByPk(client_id, {
          include: { association: 'addresses' }
        });
        /*
        * return res.json(client);
        */
        return res.json(client.addresses);
    },
    async store(req, res) {
        const { client_id } = req.params;
        const { zipcode, street, number } = req.body;

        console.log(client_id);
    
        const client = await Client.findByPk(client_id);
    
        if (!client) {
          return res.status(400).json({ error: 'User not found' });
        }
    
        const address = await Address.create({
          zipcode,
          street,
          number,
          client_id,
        });
    
        return res.json(address);
      }
}