const userModel = require("../model/user");

module.exports = {

    async findUser(id) {
        return await userModel.findUser(id);
    }
};