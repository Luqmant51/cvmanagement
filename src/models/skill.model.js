module.exports = (conn, DataTypes) => {
    const skill = conn.define('skills', {
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
        name4: {
            type: DataTypes.STRING
        },
    });
    return skill
}