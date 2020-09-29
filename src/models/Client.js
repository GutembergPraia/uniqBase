const { Model, DataTypes } = require('sequelize');

class client extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            canal: DataTypes.INTEGER,
            cep: DataTypes.STRING,
            end: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = client;