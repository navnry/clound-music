<template>
  <div class="home">
  </div>
</template>

<script>
  import { recommondSheet } from '@/request/api'

  export default {
    name: 'home',
    components: {},
    created () {
      this.onLoad()
    },
    methods: {
      // 获取数据
      onLoad () {
        // 调用api接口，并且提供了两个参数
        recommondSheet().then(res => {
          console.log(res)
        })
      }
    }
  }
</script>
