export const fcoseLayoutConfig = {
  name: "fcose",
  // 'draft', 'default' 或 'proof'
  // - "draft" 仅应用谱布局
  // - "default" 通过增量布局提高质量(快速冷却率)
  // - "proof" 通过增量布局提高质量(慢速冷却率)
  quality: "default",
  // 布局开始时是否使用随机节点位置
  // 如果设为false,则quality选项必须为"proof"
  randomize: true,
  // 是否启用布局动画
  animate: true,
  // 启用动画时的持续时间(毫秒)
  animationDuration: 1000,
  // 启用动画时的缓动函数
  animationEasing: undefined,
  // 是否将视图适配到重新定位的节点
  fit: true,
  // 布局周围的内边距
  padding: 30,
  // 计算节点尺寸时是否包含标签。在"proof"质量下有效
  nodeDimensionsIncludeLabels: false,
  // 简单节点(非复合节点)是否具有统一尺寸
  uniformNodeDimensions: false,
  // 是否打包断开的组件 - 需要注册并初始化cytoscape-layout-utilities扩展
  packComponents: true,
  // 布局步骤 - all,transformed,enforced,cose - 仅用于调试
  step: "all",

  /* 谱布局选项 */

  // False表示随机,true表示贪心采样
  samplingType: true,
  // 构建距离矩阵的样本大小
  sampleSize: 25,
  // 节点之间的分隔量
  nodeSeparation: 75,
  // 幂迭代容差
  piTol: 0.0000001,

  /* 增量布局选项 */

  nodeRepulsion: function (node: any) {
    // 节点排斥(非重叠)乘数
    return 4500;
  },
  idealEdgeLength: function (edge: any) {
    // 理想边(非嵌套)长度
    return 50;
  },
  edgeElasticity: function (edge: any) {
    // 计算边力的除数
    return 0.45;
  },
  // 计算嵌套边理想长度的嵌套因子(乘数)
  nestingFactor: 0.1,
  // 要执行的最大迭代次数 - 这是建议值,算法可能会根据需要调整
  numIter: 2500,
  // 是否启用平铺
  tile: true,
  // 平铺操作时用于对节点进行排序的比较函数
  // 接收2个要比较的节点ID作为参数,未设置时执行默认平铺操作
  // 工作方式类似于Array.prototype.sort()的compareFunction参数
  // 如果node1按某种排序标准小于node2,tilingCompareBy(nodeId1, nodeId2)必须返回负值
  // 如果node1按某种排序标准大于node2,tilingCompareBy(nodeId1, nodeId2)必须返回正值
  // 如果node1按某种排序标准等于node2,tilingCompareBy(nodeId1, nodeId2)必须返回0
  tilingCompareBy: undefined,
  // 平铺操作时零度成员之间的垂直空间量(也可以是函数)
  tilingPaddingVertical: 10,
  // 平铺操作时零度成员之间的水平空间量(也可以是函数)
  tilingPaddingHorizontal: 10,
  // 重力力(常量)
  gravity: 0.25,
  // 复合节点的重力范围(常量)
  gravityRangeCompound: 1.5,
  // 复合节点的重力力(常量)
  gravityCompound: 1.0,
  // 重力范围(常量)
  gravityRange: 3.8,
  // 增量布局的初始冷却因子
  initialEnergyOnIncremental: 0.3,

  /* 约束选项 */

  // 将指定节点固定到预定义位置
  // [{nodeId: 'n1', position: {x: 100, y: 200}}, {...}]
  fixedNodeConstraint: undefined,
  // 在垂直/水平方向对齐指定节点
  // {vertical: [['n1', 'n2'], [...]], horizontal: [['n2', 'n4'], [...]]}
  alignmentConstraint: undefined,
  // 在垂直/水平方向相对放置两个节点
  // [{top: 'n1', bottom: 'n2', gap: 100}, {left: 'n3', right: 'n4', gap: 75}, {...}]
  relativePlacementConstraint: undefined,

  /* 布局事件回调 */
  ready: () => {}, // 布局就绪时
  stop: () => {}, // 布局停止时
};
