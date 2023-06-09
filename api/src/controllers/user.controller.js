const { createUser, loginUser } = require("../services/user.services")


const signUp = async (req, res) => {
    try {
        const { username, name, email, password } = req.body;
        // console.log(username, name, email, password)
        const newUser = await createUser(username, name, email, password);
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).send(error.message);
    }
} 


const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const loggedUser = await loginUser(email, password);
        //console.log(loggedUser);
        return loggedUser !== "You aren't in our database" ? 
        res.status(200).json(loggedUser) :
        res.status(404).send("Invalid Credentials")
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
}


module.exports = {
    signUp,
    logIn
}