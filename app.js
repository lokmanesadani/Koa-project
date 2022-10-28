const koa = require("koa")
const json = require("koa-json")


const app = new koa()

const port = process.env.port || 3000


app.listen(port, () => console.log(`Server started in port ${port}...`))