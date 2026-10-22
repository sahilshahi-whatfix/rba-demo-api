// RbA demo API on Vercel: json-server 0.17 serving db.json.
// Data is loaded into memory, so writes (POST/PUT/PATCH/DELETE) work but reset
// whenever Vercel starts a fresh instance. Fine for a demo; db.json is the source of truth.
const jsonServer = require("json-server");
const data = require("../db.json");

const server = jsonServer.create();
const router = jsonServer.router(JSON.parse(JSON.stringify(data))); // in-memory copy
server.use(jsonServer.defaults({ logger: false }));                 // CORS + body parsing
server.use(router);

module.exports = server;
