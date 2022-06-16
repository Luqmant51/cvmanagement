module.exports = (conn, DataTypes) => {
    const header  = conn.define('headers', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        professional: {
            type: DataTypes.STRING
        },
    });
    return header
}