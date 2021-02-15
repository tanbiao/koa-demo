const SequelizeAuto = require("sequelize-auto");

const sequelize = require("./db");

const options = {
    caseFile: "l",
    caseModel: "p",
    caseProp: "p",
    lang: "es6",
    singularize: true,
    additional: {},
};

const auto = new SequelizeAuto(sequelize, null, null, options);
auto.run().then((data) => {
    console.log("====================");
    console.log("\r\ngenerate all model successful.");
});
