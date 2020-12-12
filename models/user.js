const { Pool, Client } = require("pg");
var connectionString = "postgres://postgres:123@localhost:5432/Ouchi";
var pool = new Pool({
    connectionString: connectionString,
})

var err = false

class User {
    getAll(callback){
        pool.query('select * from users',(err,data)=>{
            callback(err,data)
        })
    }

    getByEmail(email, callback){
        pool.query(`select * from users 
        where email = '${email}'`,(err,data)=>{
            callback(err,data)
        })
    }

    createNewUser(user,callback){
        pool.query(`INSERT INTO users (email, passwords)
        VALUES ('${user.email}', '${user.passwords}')`,(err,data)=>{
            callback(err,data)
        })
    }

    getById(id, callback) {
        callback(err, true)
    }
}
module.exports =  User;