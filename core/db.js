const config = require("../config")
const dbConfig = config.database
const mysql = require("mysql")

const pool = mysql.createPool({
  host     : dbConfig.host,
  posrt    : dbConfig.port,
  user     : dbConfig.username,
  password : dbConfig.password,
  database : dbConfig.database
});

let query = function( sql, values ) {

  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        resolve( err )
      } else {
        connection.query(sql, values, ( err, result) => {

          if ( err ) {
            reject( err )
            
          } else {
            resolve( result )
          }
          connection.release()
        })
      }
    })
  })

}

const db = {
    query:query,
}
module.exports = db;