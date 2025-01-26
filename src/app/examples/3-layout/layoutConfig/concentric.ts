export const concentricLayoutConfig = {
  name: "concentric",
  fit: true, // 是否将视图适配到图形
  padding: 30, // 适配时的内边距
  startAngle: (3 / 2) * Math.PI, // 节点开始的弧度位置
  sweep: undefined, // 第一个和最后一个节点之间的弧度(默认为整圆)
  clockwise: true, // 布局是顺时针(true)还是逆时针(false)
  equidistant: false, // 层级之间是否有相等的径向距离,可能导致边界框溢出
  minNodeSpacing: 80, // 节点外部之间的最小间距(用于半径调整)
  boundingBox: undefined, // 限制布局边界 { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // 防止节点重叠,如果空间不足可能会超出boundingBox
  nodeDimensionsIncludeLabels: false, // 计算节点边界框时是否包含标签
  height: undefined, // 布局区域的高度(覆盖容器高度)
  width: undefined, // 布局区域的宽度(覆盖容器宽度)
  spacingFactor: undefined, // 用于扩展或压缩节点占用总面积的乘数(>0)
  concentric: function (node: any) {
    // 返回每个节点的数值,将较高的节点放置在靠近中心的层级
    return node.degree();
  },
  levelWidth: function (nodes: any) {
    // 每个层级中同心值的变化
    return nodes.maxDegree() / 4;
  },
  animate: true, // 是否对节点位置进行动画
  animationDuration: 500, // 启用动画时的动画持续时间(毫秒)
  animationEasing: undefined, // 启用动画时的缓动函数
  animateFilter: function (node: any, i: number) {
    // 确定节点是否应该被动画化的函数
    return true;
  },
  ready: undefined, // 布局就绪时的回调
  stop: undefined, // 布局停止时的回调
  transform: function (node: any, position: any) {
    // 对最终节点位置应用变换的函数
    return position;
  },
};
