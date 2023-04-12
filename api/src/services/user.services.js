const { User } = require('../db')


// Funcion que crea el usuario
const createUser = async (username, name, email, password) => {

    if(!username || !name || !email || !password) {
        throw new Error("All the fields are required");
    }

    const newUser = await User.create({
        username,
        name,
        email,
        password
    })

    return newUser;
}


// Funcion que logea al usuario y le permite ingresar ala aplicacion
const loginUser = async (email, password) => {

    if(!email || !password){
        throw new Error("All the fields are required")
    }

    const loggedUser = await User.findOne({
        where: {
            name: name,
            password: password
        }
    })

    return loggedUser;
}

module.exports = {
    createUser,
    loginUser
}