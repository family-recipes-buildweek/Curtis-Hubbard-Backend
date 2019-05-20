module.exports = {

  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    useNullAsDefault:true,
    pool:{
      afterCreate:(connection,done)=>{
        connection.run("PRAGMA foreign_keys = ON",done)
      }
    },
    migrations:{
      directory:"./data/migrations"
    },
    seeds:{
      directory:"./data/seeds"
    }
  },
  testing:{
    client: "sqlite3",
    connection:{
      filename:
        "./data/test.sqlite3"
    },
      useNullAsDefault: true,
      migrations:{
        directory:"./data/migrations"
      },
      seeds:{
        directory:"./data/seeds"
    }
  }
};