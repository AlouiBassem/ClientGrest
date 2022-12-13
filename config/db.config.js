module.exports = {
    HOST: "192.168.100.20",
    USER: "root",
    PASSWORD: "",
    DB: "project",
    dialect: "mysql", 
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
    };
    