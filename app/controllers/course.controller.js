const db = require('../models')
const Course  = db.courses
const Op = db.Sequelize.Op


module.exports = {
    create: (req, res) => {
        if(!req.body.title) {
            res.status(400).send({
                message: 'title cannot be blank'
            })
            return
        }

        const course = {
            title: req.body.title,
            courseDetail: req.body.courseDetail,
            published: req.body.published ? req.body.published : false
        }

        Course.create(course)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Something went wrong while creating the course"
                })
            })
    },

    findAll: (req, res) => {
        const title = req.query.title
        let condition = title ? { title: { [Op.iLike]: `%${title}%`} } : null

        Course.findAll({ where: condition })
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Something went wrong while fetching courses"                    
                })
            })
    },

    findOne: (req, res) => {
        const id = req.params.id

        Course.findByPk(id)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(500).send({
                  message: `Could not retrieve the Course with the id: ${id}`   
                })
            })            
    },

    update: (req, res) => {
        const id = req.params.id

        Course.update(req.body, {
            where: {id: id}
        })
            .then(num => {
                num == 1 ? res.send({
                    message: 'Course was updated'
                }) : res.send({
                    message: `Could not update the Course with the id: ${id}. \n Perhaps the Course was not found, NOTE that the request body should not be blank`
                })
            })
            .catch(err => {
                res.status(500).send({
                    message: `Could not update the Course with the id: ${id}`
                })
            })
    },

    delete: (req, res) => {
        const id = req.params.id

        Course.destroy({
            where: {id: id}
        })
            .then(num => {
                num == 1 ? res.send({
                    message: 'Course successfully deleted '
                }) : res.send({
                    message: `Could not delete the Course with the id: ${id}. Perhaps Course was not found`
                })
            })
            .catch(err => {
                res.status(500).send({
                    message: `Error deleting the Course with the id: ${id}`
                })
            })
    },

    deleteAll: (req, res) => {
        Course.destroy({
            where: {},
            truncate : false
        })
            .then(nums => {
                res.send({message: `Successfully deleted ${nums} course(s)` })
            })
            .catch(err => {
                res.send(500).send({
                    message: err.message || "Error encountered, could not clear courses"
                })
            })
    },

    findAllPublished: (req, res) => {
        Course.findAll({where : {published: true}})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.nessage || 'Error encountered while retrieving courses'
                })
            })
    }    
}