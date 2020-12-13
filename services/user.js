const { findUser } = require("../models/user");
const userModel = require("../models/user");

module.exports = {

    async findUser(id) {
        return await userModel.findUser(id);
    }
};