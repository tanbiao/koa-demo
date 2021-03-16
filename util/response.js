const response = {
    success(data, message) {
        return {
            code: 0,
            message: message || "成功",
            data: data,
        };
    },

    error(message, code) {
        return {
            code: code || 1,
            message: message || "",
            data: [],
        };
    },
};

module.exports = response;
