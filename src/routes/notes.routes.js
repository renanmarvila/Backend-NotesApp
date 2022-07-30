const { Router } = require('express')

const NotesController = require('../controllers/NotesControllers')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

notesRoutes.get('/', notesController.index)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)
notesRoutes.post('/', notesController.create)

module.exports = notesRoutes
