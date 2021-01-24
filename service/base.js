const initModels = require("../models/init-models");
const sequelize = require("../core/db");

class BaseService {
    
    
    constructor() {
        let models = initModels(sequelize);
        Object.assign(this,models);
    }
    
}

module.exports = BaseService;
