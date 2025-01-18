const express = require("express")

// Create an HTTP server instance.
const server = require("http").createServer()

// Initializes an Express application.
const app = express()

// Set up a route that listens for GET requests to the root URL ("/").
app.get("/", (req, res) => {
  //  Sends the index.html file located in the current directory (__dirname) as the response.
  res.sendFile("index.html", { root: __dirname })
})

// Make the Express app handle all HTTP requests received by the server.
server.on("request", app)

// Start the server on port 3000 and logs a message when it’s ready.
server.listen(3000, () => {
  console.log("server started on port 3000")
})

/* Begin Websocket */
const WebSocketServer = require("ws").Server

// Attach the WebSocket server to the express server
const wss = new WebSocketServer({ server: server })

wss.on("connection", function connection(ws) {
  const numClients = wss.clients.size
  console.log("🚀 ~ connection ~ numClients:", numClients)

  wss.broadcast(`🙋🏼‍♂️ Current visitors: ${numClients}`)

  if (ws.readyState === ws.OPEN) {
    ws.send("👋🏼 Welcome to my server")
  }

  ws.on("close", function close() {
    console.log("A client has disconnected")
    console.log("🚀 ~ close ~ numClients:", numClients)
  })
})

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data)
  })
}
