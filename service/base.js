const initModels = require("../models/init-models");
const sequelize = require("../core/db");

class BaseService {
    models = {};

    constructor() {
        let models = initModels(sequelize);
        this.models = models;
    }
}

module.exports = BaseService;
