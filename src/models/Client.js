const { Model, DataTypes } = require('sequelize');

class Client extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Client;