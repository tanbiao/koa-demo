const BaseService = require("./base");

class UserService  extends BaseService {
    
    async findUser(id) {
        return await this.User.find(id);
    }
    
    async findAll() {
        return await this.User.findAll();
    }
    
    async create(data) {
        return await this.User.create(data);
    }
    
    async find(id) {
        return await this.User.findByPk(id);
    }

}

module.exports = new UserService();