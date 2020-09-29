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

    static associate(models){
        this.hasMany(models.Address, { foreignKey: 'client_id', as: 'addresses'});
    }
}

module.exports = Client;