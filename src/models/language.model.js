module.exports = (conn, DataTypes) => {
    const language = conn.define('languages', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        name1: {
            type: DataTypes.STRING
        },
        name2: {
            type: DataTypes.STRING
        },
        name3: {
            type: DataTypes.STRING
        },
    });
    return language
}