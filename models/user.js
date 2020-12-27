const { Pool, Client } = require("pg");
var connectionString = "postgres://postgres:23051998@localhost:5432/postgres";
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

    updateRooms(user, callback){
        pool.query(`UPDATE users SET rooms = '${user.rooms}'  WHERE email = '${user.email}';`,(err,data)=>{
            callback(err,data)
        })
    }

    getRoomsByUser(user, callback){
        pool.query(`SELECT rooms FROM users WHERE email = '${user.email}' AND passwords = '${user.passwords}';`,(err,data)=>{
            callback(err,data)
        })
    }

    addRoomByUser(user, room, callback){
        pool.query(`UPDATE users SET rooms = array_append(rooms, ${room}) WHERE email = '${user.email}' AND passwords = '${user.passwords}';`,(err,data)=>{
            callback(err,data)
        })
    }

    getById(id, callback) {
        callback(err, true)
    }
}
module.exports =  User;