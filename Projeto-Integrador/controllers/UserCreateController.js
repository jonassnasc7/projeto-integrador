const UserCreate  = require('../models/UserCreate')

module.exports = class UserCreateController {
   
    static createUser(req, res){
        return res.render('user/create')
    }
    static async createUserSave(req, res){
        const user = {
            name: req.body.name,
            email: req.body.email,
            tel: req.body.tel,
            password: req.body.password
        }
        await UserCreate.create(user)
        return res.redirect('/')
    }
   
} 


