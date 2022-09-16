import baseController from './base-controller'

class homeController extends baseController {
  async indexHtml () {
    await this.ctx.render('home');
  }
  async getNavMenu () {
    this.ctx.body = {
      code: 0,
      data: [{
        name: '主页',
        path: '/home'
      }, {
        name: '用户中心',
        path: '/user'
      }, {
        name: '其他',
        path: '/other'
      }]
    }
  }
}

export default homeController