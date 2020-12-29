const { Pool, Client } = require("pg");
// var connectionString = "postgres://postgres:postgres@localhost:5432/postgres";
var connectionString = "postgres://ibopwkuadljenm:d85e238d6f5ca39607e4a284e16964066fc5bd846d76b2560f8b07673d659dd4@ec2-52-2-82-109.compute-1.amazonaws.com:5432/dccumjm93dgmf0";

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

