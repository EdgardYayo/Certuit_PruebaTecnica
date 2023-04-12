const { User } = require('../db')


// Funcion que crea el usuario
const createUser = async (username, name, email, password) => {
    
   try {
    if(!username || !name || !email || !password) {
        throw new Error("All the fields are required");
    }

    const newUser = await User.create({
        username,
        name,
        email,
        password
    })
    console.log(User)
    return newUser;
   } catch (error) {
    return error.message
   }
}


// Funcion que logea al usuario y le permite ingresar ala aplicacion
const loginUser = async (email, password) => {
    try {
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
    } catch (error) {
        return error.message
    }
 
}

module.exports = {
    createUser,
    loginUser
}