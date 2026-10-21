import express from "express"
import conn from "./config/conn.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
conn
.sync()
.then(() => {
    console.log("Banco de dados conectado e sincronizado com sucesso.")
})
.catch((error) => {
    console.error("Erro ao sincronizar o banco", error)
})




export default app;