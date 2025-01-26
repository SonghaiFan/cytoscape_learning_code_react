export const ciseLayoutConfig = {
  name: "cise",
  /* 集群配置 */
  // 集群信息可以通过以下两种方式之一提供:
  // 1. 二维数组方式:
  //    - 数组索引表示该索引处所有元素的集群ID
  //    - 未聚类的节点不能出现在此数组中
  //    例如: [ ['n1','n2','n3'],
  //           ['n5','n6'],
  //           ['n7','n8','n9','n10'] ]
  //
  // 2. 函数方式:
  //    - 函数接收一个Cytoscape节点作为参数
  //    - 返回该节点对应的集群ID
  //    - 返回负数、null或undefined表示未聚类节点
  //    例如: function(node){ return node.data("clusterID"); }
  clusters: function (node: any) {
    return node.data("group");
  },

  /* 布局选项 */
  // 布局开始时是否使用随机节点位置
  // 如果设为false,布局将是增量式的
  randomize: true,

  // 布局动画设置
  // - true: 布局运行时动画
  // - false: 只显示最终结果
  // - 'end': 直接动画到最终结果
  animate: "end",

  // 每帧的迭代次数;值越高速度越快但越不平滑
  refresh: 10,

  // animate:'end'时使用的动画持续时间
  animationDuration: undefined,

  // animate:'end'时的缓动函数
  animationEasing: undefined,

  // 是否将视图适配到重新定位的图形
  fit: true,

  // 渲染坐标中的内边距
  padding: 30,

  // 计算节点尺寸时是否包含标签
  nodeDimensionsIncludeLabels: false,

  /* 节点间距和边长度设置 */
  // 集群内节点之间的分隔距离
  // 注意:增加这个值也会增加模拟时间
  nodeSeparation: 12.5,

  // 集群间边长度因子
  // 2.0表示集群间边应该是集群内边的两倍长
  idealInterClusterEdgeLengthCoefficient: 1.4,

  /* 圆形布局选项 */
  // 是否允许圆上的节点移到圆内
  allowNodesInsideCircle: false,

  // 可以移到圆内的圆上节点的最大百分比
  maxRatioOfNodesInsideCircle: 0.1,

  /* 力导向参数 */
  // 弹簧系数
  // - 较小的值使弹簧更松
  // - 较大的值使弹簧更紧
  springCoeff: function (edge: any) {
    return 0.45;
  },

  // 节点排斥(防止重叠)乘数
  nodeRepulsion: function (node: any) {
    return 4500;
  },

  // 重力力(常量)
  gravity: 0.25,

  // 重力范围(常量)
  gravityRange: 3.8,

  // 是否打包图的组件
  // 如果设为true,需要导入cytoscape.js-layout-utilities
  packComponents: false,

  /* 布局事件回调 */
  // 布局就绪时的回调
  ready: function () {},
  // 布局停止时的回调
  stop: function () {},
};
