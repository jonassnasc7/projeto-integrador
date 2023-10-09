const User = require('../models/User')

module.exports = class UserController {
    static loginUser(req, res){
        return res.render('user/login')
    }
    static async loginUserSave(req, res){
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        await User.create(user)
        return res.redirect('/user')
    }
    static showAll(req, res) {
        return res.render('user/home')
    }
} 