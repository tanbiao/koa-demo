const BaseService = require("./base");

class UserService extends BaseService {
    async findUser(id) {
        return await this.models.User.find(id);
    }

    async findAll() {
        return await this.models.User.findAll();
    }

    async create(data) {
        return await this.models.User.create(data);
    }

    async find(id) {
        return await this.models.User.findByPk(id);
    }
}

module.exports = new UserService();
