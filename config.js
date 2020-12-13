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
        host:"127.0.0.1",
        port:3306,
        username:"root",
        password:"root",
        database:"demo",
    }
};

module.exports = config;