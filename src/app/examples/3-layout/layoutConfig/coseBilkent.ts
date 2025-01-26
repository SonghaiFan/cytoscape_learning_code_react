export const coseBilkentLayoutConfig = {
  name: "cose-bilkent",
  // 布局就绪时的回调
  ready: function () {},
  // 布局停止时的回调
  stop: function () {},
  // 布局质量选项
  // - 'draft' 快速冷却率
  // - 'default' 适中冷却率
  // - "proof" 慢速冷却率
  quality: "default",
  // 计算节点尺寸时是否包含标签,用于避免标签重叠
  nodeDimensionsIncludeLabels: false,
  // 每帧的迭代次数;值越高速度越快但越不平滑
  refresh: 30,
  // 布局完成后是否适配网络视图
  fit: true,
  // 适配时的内边距
  padding: 10,
  // 是否启用增量模式
  randomize: true,
  // 节点排斥(防重叠)乘数
  nodeRepulsion: 4500,
  // 理想(图内)边长度
  idealEdgeLength: 50,
  // 计算边力的除数
  edgeElasticity: 0.45,
  // 计算图间边理想长度的嵌套因子(乘数)
  nestingFactor: 0.1,
  // 重力力(常量)
  gravity: 0.25,
  // 最大迭代次数
  numIter: 2500,
  // 是否平铺断开的节点
  tile: true,
  // 布局动画类型。选项为{'during', 'end', false}
  animate: "end",
  // animate:end的持续时间(毫秒)
  animationDuration: 500,
  // 平铺时度数为零的节点之间的垂直间距(也可以是函数)
  tilingPaddingVertical: 10,
  // 平铺时度数为零的节点之间的水平间距(也可以是函数)
  tilingPaddingHorizontal: 10,
  // 复合节点的重力范围(常量)
  gravityRangeCompound: 1.5,
  // 复合节点的重力力(常量)
  gravityCompound: 1.0,
  // 重力范围(常量)
  gravityRange: 3.8,
  // 增量布局的初始冷却因子
  initialEnergyOnIncremental: 0.5,
};
