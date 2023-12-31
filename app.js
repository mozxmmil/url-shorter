import express from "express"
import path from "path"
const app = express()
app.set("views",path.resolve("./views"))
app.set("view engine", "ejs");
import cookieParser from "cookie-parser"
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.json())
app.use(express.static("public"))

import routerjs from "./router/router.js"

app.use("/api/v1/",routerjs)



export default app
