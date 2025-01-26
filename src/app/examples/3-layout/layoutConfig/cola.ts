export const colaLayoutConfig = {
  name: "cola",
  // 是否在布局运行时显示动画
  animate: true,
  // 每帧的迭代次数;值越高速度越快但越不平滑
  refresh: 1,
  // 布局运行的最大时长(毫秒)
  maxSimulationTime: 4000,
  // 是否在模拟过程中禁止拖动节点
  ungrabifyWhileSimulating: false,
  // 每次重新定位节点时是否适配视图
  fit: true,
  // 模拟时的内边距
  padding: 30,
  // 限制布局边界 { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: undefined,
  // 计算节点边界框时是否包含标签
  nodeDimensionsIncludeLabels: false,

  /* 布局事件回调 */
  // 布局就绪时的回调
  ready: function () {},
  // 布局停止时的回调
  stop: function () {},

  /* 位置选项 */
  // 布局开始时是否使用随机节点位置
  randomize: false,
  // 是否防止节点边界框重叠
  avoidOverlap: true,
  // 是否防止断开的组件重叠
  handleDisconnected: true,
  // 当alpha值(系统能量)低于此值时,布局停止
  convergenceThreshold: 0.01,
  // 节点周围的额外间距
  nodeSpacing: function (node: any) {
    return 10;
  },
  // 使用DAG/树流布局(如果指定)
  // 例如 { axis: 'y', minSeparation: 30 }
  flow: undefined,
  // 节点的相对对齐约束
  // 例如 {vertical: [[{node: node1, offset: 0}, {node: node2, offset: 5}]],
  //      horizontal: [[{node: node3}, {node: node4}], [{node: node5}, {node: node6}]]}
  alignment: undefined,
  // 节点间隙的不等式约束列表
  // 例如 [{"axis":"y", "left":node1, "right":node2, "gap":25}]
  gapInequalities: undefined,
  // 是否初始调整节点位置以居中图形
  // 设为false则从当前位置开始布局
  centerGraph: true,

  /* 边长度选项 */
  // 以下每个选项都可以是常数值或函数 function(edge){ return 2; }
  // 在模拟中直接设置边长度
  edgeLength: undefined,
  // 在模拟中设置对称差边长度
  edgeSymDiffLength: undefined,
  // 在模拟中设置jaccard边长度
  edgeJaccardLength: undefined,

  /* cola算法迭代选项 */
  // 未定义时使用默认值
  // 无约束初始布局迭代
  unconstrIter: undefined,
  // 带用户指定约束的初始布局迭代
  userConstIter: undefined,
  // 带所有约束(包括防重叠)的初始布局迭代
  allConstIter: undefined,
};
