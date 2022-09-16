import Koa from 'koa'
import Router from 'koa-router'
import views from 'koa-views'
import path from 'path'
import routes from '../routers'
import KoaStatic from 'koa-static'
import BaseMiddleWare from '../middlewares/index'
import Login from '../middlewares/login'

class App extends Koa {
  constructor(options = {}) {
    super()
    this.options = options
    this.initMiddlewares()
    this.initRoute()
  }
  initRoute () {
    const router = new Router()
    this.use(views(path.join(__dirname, '../views/'), { extension: 'html' }))
    this.use(KoaStatic(path.join(__dirname, '../public')))
    routes.forEach(routeConfig => {
      const [method, url, path, event] = routeConfig
      router[method].apply(router, [url, Login, async (context, next) => {
        const IndexController = require(`../controller/${path}`).default
        const indexController = new IndexController(context, next)
        await indexController[event](context, next)
      }])
    })
    this.use(router.routes());
    this.use(router.allowedMethods({
      // throw: true, // 抛出错误，代替设置响应头状态
      // notImplemented: () => '不支持当前请求所需要的功能',
      // methodNotAllowed: () => '不支持的请求方式'
    }));
  }
  initMiddlewares () {
    this.use(BaseMiddleWare)
  }
}

export default App