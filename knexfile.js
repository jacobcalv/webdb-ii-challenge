module.exports = {
    development: {
      client: "sqlite3", 
      useNullAsDefault: true, 
      connection: { 
        filename: "./cars.db3",
      },
    },
  }
  