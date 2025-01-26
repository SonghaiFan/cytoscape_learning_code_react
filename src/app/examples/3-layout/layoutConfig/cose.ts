export const coseLayoutConfig = {
  name: "cose",

  // 布局就绪时的回调
  ready: function () {},

  // 布局停止时的回调
  stop: function () {},

  // 布局运行时是否动画
  // true : 布局运行时持续动画
  // false : 只显示最终结果
  // 'end' : 显示从初始位置到最终位置的动画
  animate: "end",

  // animate:'end'时的动画缓动函数
  animationEasing: undefined,

  // animate:'end'时的动画持续时间
  animationDuration: undefined,

  // 确定节点是否应该被动画化的函数
  // 启用动画时默认所有节点都会动画
  // 非动画节点在布局开始时立即到达最终位置
  animateFilter: function (node: any, i: number) {
    return true;
  },

  // animate:true时,动画延迟多少毫秒开始
  // (防止快速运行时闪烁)
  animationThreshold: 250,

  // 连续屏幕位置更新之间的迭代次数
  refresh: 20,

  // 完成后是否适配网络视图
  fit: true,

  // 适配时的内边距
  padding: 30,

  // 限制布局边界
  boundingBox: undefined,

  // 计算节点边界框时是否包含标签
  nodeDimensionsIncludeLabels: false,

  // 是否随机化节点的初始位置(true)或使用现有位置(false)
  randomize: false,

  // 非复合图中组件之间的额外间距
  componentSpacing: 40,

  // 节点排斥(非重叠)乘数
  nodeRepulsion: function (node: any) {
    return 2048;
  },

  // 节点排斥(重叠)乘数
  nodeOverlap: 4,

  // 理想边(非嵌套)长度
  idealEdgeLength: function (edge: any) {
    return 32;
  },

  // 计算边力的除数
  edgeElasticity: function (edge: any) {
    return 32;
  },

  // 计算嵌套边理想长度的嵌套因子(乘数)
  nestingFactor: 1.2,

  // 重力力(常量)
  gravity: 1,

  // 最大迭代次数
  numIter: 1000,

  // 初始温度(最大节点位移)
  initialTemp: 1000,

  // 冷却因子(连续迭代之间温度如何降低)
  coolingFactor: 0.99,

  // 温度下限(低于此值布局将结束)
  minTemp: 1.0,
};
