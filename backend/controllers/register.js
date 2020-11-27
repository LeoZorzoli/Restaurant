const registerRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

registerRouter.post('/', async (request, response) => {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        username: body.username,
        name: body.name,
        passwordHash
    })

    const savedUser = await user.save()
    response.json(savedUser)
})

module.exports = registerRouter