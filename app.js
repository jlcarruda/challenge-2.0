const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  await next();
  console.log("LOG")
})

app.use(async (ctx, next) => {
  const start = Date.now()
  await next();
  console.log("DALE")
})

app.use(async ctx => {
  ctx.body = "HELLO WORLD"
})

app.listen(3000)