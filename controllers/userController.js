const {dataUsers} = require('../db/users/users')

const getUser = async (req, res) => {
    try {
        const {id} = req.query;
        const selectUser = dataUsers.filter(user => user.id === id);
        console.log('Route: Users GET');
        return res.status(200).send(selectUser);
    } catch (error) {
        console.log("an ERR ocurred");
        return res.status(404).send(error.message);
    } 
}

const createUser = async (req, res) => {
    try {
        console.log('Route: Users POST');
        const newDataUsers = [...dataUsers, req.body]
        res.send(newDataUsers)
    } catch (error) {
        console.log("an ERR ocurred");
        return res.status(404).send(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const {id, name} = req.body;
        const oldDataUsers = dataUsers.filter(user => user.id !== id);

        console.log('Route: Users PUT');

        const isUser = (id) => {
            const item = dataUsers.filter(item => item.id === id);
            return item.length > 0;
        }

        if (!isUser(id)) throw new Error('User do not exist.');

        const selectUser = dataUsers.reduce((acc, currentUser) => {
            const checkedUser = currentUser.id === id;
            if (checkedUser) {
                acc = {...acc, ...{id, name}};
            }
            return acc;
        }, {})
        
        const newDataUsers = [...oldDataUsers, selectUser];

        return res.status(200).send(newDataUsers);
    } catch (error) {
        console.log("an ERR ocurred");
        return res.status(404).send(error.message);
    }
}

module.exports = {
    getUser,
    createUser,
    updateUser
}