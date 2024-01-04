const mongoose = require("mongoose");
const { countConnect } = require("../helpers/check.connect");

const connectString = "mongodb://127.0.0.1:27017/shopdev";

// mongoose
//   .connect(connectString)
//   .then((_) => console.log("Connected Mongodb Success"))
//   .catch((err) => console.log("Error Connect!", err));

// // dev
// if (1 === 1) {
//   mongoose.set("debug", true);
//   mongoose.set("debug", { color: true });
// }

// module.exports = mongoose;

// design patterns singleton
class Database {
  constructor() {
    this.connect();
  }

  // connect
  connect() {
    // dev
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then((_) => {
        console.log("Connected Mongodb Success");
        countConnect();
      })
      .catch((err) => console.log("Error Connect!", err));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
