<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import { debounce } from '@/utils'
/*
// 按需加载
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入图表类型
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
require('echarts/lib/chart/pie')
require('echarts/lib/chart/scatter')
require('echarts/lib/chart/radar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/grid')
require('echarts/lib/component/axisPointer')
require('echarts/lib/component/dataZoom')
 */

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    echartOptions: {
      type: Object,
      default: () => {}
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '50vw'
    },
    height: {
      type: String,
      default: '30vh'
    }
  },
  data() {
    return {
      chartEnty: null,
      $_resizeHandler: null, // 窗口监听
      defaultColors: ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'] // 图表颜色配置
    }
  },
  watch: {
    echartOptions: {
      handler(newName, oldName) {
        // console.log('渲染')
        this.renderChart()
      }
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    this.destroyEnty()
  },
  // keep-alive 八种生命周期钩子将失效。取而代之的时activate和deactivated
  activated() {
    if (!this.$_resizeHandler) {
      // avoid duplication init
      this.initChart()
    }
    // when keep-alive chart activated, auto resize
    this.resize()
  },
  deactivated() {
    this.destroyEnty()
  },
  methods: {
    initChart() {
      this.chartEnty = echarts.init(document.getElementById(this.id))
      this.renderChart()
      this.$emit('inited', this.chartEnty)
      this.$_resizeHandler = debounce(() => {
        this.chartEnty.resize()
      }, 100)
      window.addEventListener('resize', this.$_resizeHandler)
    },
    renderChart() {
      this.echartOptions.color || (this.echartOptions.color = this.defaultColors)
      this.chartEnty.setOption(this.echartOptions)
      this.chartEnty.resize()
    },
    destroyEnty() {
      // console.log('销毁')
      if (!this.chartEnty) {
        return
      }
      this.chartEnty.dispose()
      this.chartEnty = null
      window.removeEventListener('resize', this.$_resizeHandler)
      this.$_resizeHandler = null
    },
    resize() {
      this.chartEnty && this.chartEnty.resize()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
