const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const _SECONDS = 5000;

// count Connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections::${numConnection}`);
};

//  check over load
const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length; // check num core in computer
    console.log("numCores", numCores);
    const memoryUsage = process.memoryUsage().rss; // get momery used
    console.log("memoryUsage", memoryUsage);
    // Example maximun number of connection based on number of cores
    const maxConnections = numCores * 5;
    console.log(`Active connections::${numConnection}`);
    console.log(`Memory usage::${memoryUsage / 1024 / 1024} MB`);
    if (numConnection > maxConnections) {
      console.log("Connection overload detected!");
    }
  }, _SECONDS); // Monitor every 5 seconds
};

module.exports = { countConnect, checkOverLoad };
