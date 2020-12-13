const db = require("../utils/db");

module.exports = {
    async findUser(id) {
        return await db.query("SELECT *FROM tbl_user WHERE id=?",[id]);
    }
};