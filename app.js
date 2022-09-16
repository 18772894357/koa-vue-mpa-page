import { App } from './base'

const app = new App()

app.listen(3000, () => {
  console.log('app is starting at: http://localhost:3000;')
})