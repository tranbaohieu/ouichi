const { Pool, Client } = require("pg");
// var connectionString = "postgres://postgres:postgres@localhost:5432/postgres"
var connectionString = "postgres://ibopwkuadljenm:d85e238d6f5ca39607e4a284e16964066fc5bd846d76b2560f8b07673d659dd4@ec2-52-2-82-109.compute-1.amazonaws.com:5432/dccumjm93dgmf0";
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
        // console.log(`INSERT INTO users (email, passwords) VALUES ('${user.email}', '${user.passwords}')
        pool.query(`INSERT INTO users (email, passwords) VALUES ('${user.email}', '${user.passwords}')`,(err,data)=>{
            callback(err,data)
        })
    }

    getById(id, callback) {
        callback(err, true)
    }

    updateRoom(user,callback){
        // console.log(`INSERT INTO users (email, passwords) VALUES ('${user.email}', '${user.passwords}')
        // console.log(`insert into depend (email, detail_link, size, title, image) values ('${user.email}','${user.detail_link}', '${user.size}')
        pool.query(`insert into depend (email, detail_link, size, title, image) values ('${user.email}','${user.detail_link}', '${user.size}', '${user.title}', '${user.image}');`,(err,data)=>{
            callback(err,data)
        })
    }
}
module.exports =  User;