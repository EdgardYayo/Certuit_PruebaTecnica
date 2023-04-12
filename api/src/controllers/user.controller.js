const { createUser, loginUser } = require("../services/user.services")


const signUp = async (req, res) => {
    try {
        const { username, name, email, password } = req.body;
        const newUser = await createUser(username, name, email, password);
        res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
} 


const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const loggedUser = await loginUser(email, password);
        res.status(200).json(loggedUser);
    } catch (error) {
        return res.status(500).json({ message: error });
        
    }
}


module.export = {
    signUp,
    logIn
}