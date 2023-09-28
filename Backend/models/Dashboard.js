module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Dashboard', {
        task: {
            type: DataTypes.STRING(255) 
        }
    }, {
        tableName: 'dashboard', 
        timestamps: false,
    });

    model.associate = models => {
        model.belongsTo(models.User, { foreignKey: 'user_id' });
    };

    return model
}