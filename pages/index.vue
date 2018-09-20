<template>
  <section class="container">
    
    <div>
      <app-logo/>
      <h1 class="title">
        website
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      显示计数器: <strong>{{$store.state.testStore.testIndex}}</strong> {{testIndex}} {{getTestIndex}}
      <el-button @click="testIndexAdd" type="warning">+</el-button>
      <el-button @click="testIndexReduce" type="danger">-</el-button>
      <nuxt-link to='/test'>跳转测试</nuxt-link>
      <el-button @click="testRequest" type="danger">测试axios</el-button>
      
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import AppLogo from '~/components/AppLogo.vue'

export default {
  computed: {
    ...mapState({
      testIndex: state => state.testStore.testIndex
    }),
    ...mapGetters(['getTestIndex'])
  },
  components: {
    AppLogo
  },
  methods: {
    ...mapActions([
      'testIndexAdd',
      'testIndexReduce',
      "testAxios"
    ]),
    testRequest(){
      this.testAxios({}).then(res => {
        console.log('---> res', res)
      })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

