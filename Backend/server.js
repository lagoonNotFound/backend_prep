require("dotenv").config();
const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const app = require('./src/app.js');
const connectDB = require('./db/db');

connectDB();

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})