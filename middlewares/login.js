const login = async (context, next) => {
  console.log('假装我登录上了！')
  await next()
}
export default login
