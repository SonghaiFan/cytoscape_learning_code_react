export const dagreLayoutConfig = {
  name: "dagre",
  /* dagre算法选项,未定义时使用默认值 */
  // 同一层级中相邻节点之间的分隔
  nodeSep: undefined,
  // 同一层级中相邻边之间的分隔
  edgeSep: undefined,
  // 布局中每一层级之间的分隔
  rankSep: undefined,
  // 流向方向
  // - 'TB': 从上到下
  // - 'LR': 从左到右
  rankDir: undefined,
  // 层级节点的对齐方式
  // - 'UL': 上左对齐
  // - 'UR': 上右对齐
  // - 'DL': 下左对齐
  // - 'DR': 下右对齐
  align: undefined,
  // 如果设置为'greedy',使用贪心启发式算法寻找图的反馈弧集
  // 反馈弧集是可以移除以使图无环的边集
  acyclicer: undefined,
  // 用于为输入图中的每个节点分配层级的算法类型
  // - 'network-simplex': 网络单纯形算法
  // - 'tight-tree': 紧凑树算法
  // - 'longest-path': 最长路径算法
  ranker: undefined,
  // 边的源节点和目标节点之间要保持的层级数
  minLen: function (edge: any) {
    return 1;
  },
  // 边的权重,权重较高的边通常比权重较低的边更短更直
  edgeWeight: function (edge: any) {
    return 1;
  },

  /* 通用布局选项 */
  // 是否适配视图
  fit: true,
  // 适配内边距
  padding: 30,
  // 用于扩展或压缩节点占用总面积的乘数(>0)
  spacingFactor: undefined,
  // 计算节点占用空间时是否包含标签
  nodeDimensionsIncludeLabels: false,
  // 是否对节点位置进行动画
  animate: true,
  // 启用动画时是否对特定节点进行动画
  // 非动画节点在布局开始时立即到达最终位置
  animateFilter: function (node: any, i: number) {
    return true;
  },
  // 启用动画时的动画持续时间(毫秒)
  animationDuration: 500,
  // 启用动画时的缓动函数
  animationEasing: undefined,
  // 限制布局边界 { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: undefined,
  // 对最终节点位置应用变换的函数
  transform: function (node: any, pos: any) {
    return pos;
  },
  // 布局就绪时的回调
  ready: function () {},
  // 用于对节点和边进行排序的函数
  // 因为cytoscape dagre创建有向图时,会使用节点顺序作为决胜条件
  // 此排序函数可以帮助确保节点/边的正确顺序
  // 在同一图中多次添加和删除相同的节点和边时特别有用
  sort: undefined,
  // 布局停止时的回调
  stop: function () {},
};
