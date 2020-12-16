const db = require("../core/db");

const user = {
    async findUser(id) {
        return await db.query("SELECT *FROM sls_p_user WHERE suid=?",[id]);
    }
};

module.exports = user;