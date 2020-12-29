const { Pool, Client } = require("pg");
var connectionString = "postgres://postgres:postgres@localhost:5432/postgres";
var pool = new Pool({
    connectionString: connectionString,
})

var err = false

class Room {
    getAll(callback){
        pool.query('select * from room',(err,data)=>{
            callback(err,data)
        })
    }

    createNewRoom(room,callback){
        pool.query(`INSERT INTO room (type, descriptions, userId)
        VALUES ( ${room.id}, '${room.description}', ${room.userId});`,(err,data)=>{
            callback(err,data)
        })
    }

    getById(id, callback) {
        callback(err, true)
    }

    getSavedRoom(email, callback){
        pool.query(`select * from depend where depend.email = '${email}'`, (err, data)=>{
            callback(err, data)
        })
    }
}
module.exports = Room ;

