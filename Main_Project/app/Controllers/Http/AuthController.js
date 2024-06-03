'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

const User = use('App/Models/User');


class AuthController {
    async register({ request }) {
        const data = request.only(['username','business_name','email','telephone','password']);

        const user = await User.create(data);

        return user;
    }
    async authenticate({request, auth}){
        const { email, password } = request.all()

        const token = await auth.attempt(email, password);

        return token;
    }
    async index({}){

        return "Seja bem vindo a Salestime";
    }
    async changePassword({ request, auth}){
        const { password } = request.only(['password']);
        
        const newPassword = await Hash.make(password);

        const user = await User.query().where('id', auth.user.id).update({password: newPassword});
        const user_id = await User.find(2);

        return "Senha alterada com sucesso";
    }
    async delete({ auth }){
        
        await User.query().where('id', auth.user.id).delete();

        return 'conta deletada com sucesso';
    }

}

module.exports = AuthController
