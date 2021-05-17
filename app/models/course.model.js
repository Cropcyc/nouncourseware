module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define('course', {
        title: {
            type: Sequelize.STRING
        },
        courseDetail: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
        // ,
        // uploadedFile: {
        //     type: Sequelize.BLOB
        // }

    })

    return Course
}