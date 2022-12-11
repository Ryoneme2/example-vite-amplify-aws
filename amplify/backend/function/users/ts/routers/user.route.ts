import express from 'express'
import * as control from '../controllers/user.controller'

const route = express.Router()

route.get('/', control.getList)
route.get('/:id', control.getOne)

export default route