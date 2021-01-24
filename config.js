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
        host:"localhost",
        port:3306,
        username:"root",
        password:"root",
        database:"demo",
        pool:{
            max: 5,
            min: 0,
            idle: 30000
        }
    }
};

module.exports = config;