module.exports = (conn, DataTypes) => {
    const work = conn.define('works', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        works_name1: {
            type: DataTypes.STRING
        },
        work_start1: {
            type: DataTypes.DATE
        },
        work_end1: {
            type: DataTypes.DATE
        },
        work_desc1: {
            type: DataTypes.STRING
        },
        works_name2: {
            type: DataTypes.STRING
        },
        work_start2: {
            type: DataTypes.DATE
        },
        work_end2: {
            type: DataTypes.DATE
        },
        work_desc2: {
            type: DataTypes.STRING
        },
    });
    return work
}