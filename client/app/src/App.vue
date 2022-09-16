<template>
  <div class="app">
    <el-container class="app-container">
      <el-header class="app-container__header">
        <el-menu mode="horizontal" :default-active="activeIndex" @select="handleSelect">
          <el-menu-item v-for="item in navList" :key="item.path" :index="item.path">{{item.name}}</el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="app-container__main">
        <slot />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { Container, Header, Main, Menu, MenuItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    [Container.name]: Container,
    [Header.name]: Header,
    [Main.name]: Main,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  },
  data () {
    return {
      navList: []
    }
  },
  computed: {
    activeIndex () {
      return location.pathname.replace(/\.html/, '')
    }
  },
  mounted () {
    this.getNavMenu()
  },
  methods: {
    handleSelect (path) {
      location.href = `${path}.html`
    },
    // 获取菜单
    getNavMenu () {
      axios.get('/api/getNavMenu').then(({data: {data = []}}) => {
        this.navList = data
      })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}
.app {
  height: 100%;
}
.app-container__header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.app-container__main {
  margin-top: 60px;
}
</style>
