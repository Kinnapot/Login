module.exports = (sequelize, DataType) => {
    const model = sequelize.define('User', {
        username: {
            type: DataType.STRING(255),
            unique: true
        },
        password: {
            type: DataType.STRING(255)
        },
        name: {
            type: DataType.STRING(255)
        }
    },{
        tableName:"users"
    });

    model.associate = models => {
        model.hasMany(models.Dashboard, { foreignKey: 'user_id' });
    };

    return model;
}