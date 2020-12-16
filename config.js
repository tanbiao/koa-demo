const config = {
    port:8000,
    
    redis:{
        port: 6379, // Redis port
        host: "127.0.0.1", // Redis host
        password: "",
        db: 0, 
        keyPrefix:"",
    },

    database:{
        host:"192.168.40.23",
        port:3306,
        username:"root",
        password:"a12345",
        database:"lt_muwu_0716",
    }
};

module.exports = config;