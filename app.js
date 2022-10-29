const koa = require("koa")
const json = require("koa-json")


const app = new koa()
const path = require('path')
const render = require('koa-ejs')
const KoaRouter = require('koa-router')

render(app, {
    root : path.join(__dirname, "views"),
    layout: "layout",
    viewExt: 'html',
    cache: false,
    debug: false
})
const router = new KoaRouter()
const port = process.env.port || 3000







router.get('/', async ctx => (ctx.render('index', {title : "lokmane sadani"})))



app.use(router.routes()).use(router.allowedMethods())

app.use(json())
app.listen(port, () => console.log(`Server started in port ${port}...`))