export const circleLayoutConfig = {
  name: "circle",
  /* 视图适配选项 */
  // 是否将视图适配到图形
  fit: true,
  // 适配时的内边距
  padding: 30,
  // 限制布局边界 { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: undefined,

  /* 节点布局选项 */
  // 防止节点重叠,如果空间不足可能会超出boundingBox和radius
  avoidOverlap: true,
  // 计算节点边界框时是否包含标签
  nodeDimensionsIncludeLabels: false,
  // 用于扩展或压缩节点占用总面积的乘数(>0)
  spacingFactor: undefined,
  // 圆的半径
  radius: undefined,

  /* 圆形布局参数 */
  // 节点开始的弧度位置
  startAngle: (3 / 2) * Math.PI,
  // 第一个和最后一个节点之间的弧度(默认为整圆)
  sweep: undefined,
  // 布局是顺时针(true)还是逆时针(false)
  clockwise: true,
  // 用于对节点排序的函数
  // 例如: function(a, b){ return a.data('weight') - b.data('weight') }
  sort: undefined,

  /* 动画选项 */
  // 是否对节点位置进行动画
  animate: true,
  // 启用动画时的动画持续时间(毫秒)
  animationDuration: 500,
  // 启用动画时的缓动函数
  animationEasing: undefined,
  // 确定节点是否应该被动画化的函数
  // 启用动画时默认所有节点都会动画
  // 非动画节点在布局开始时立即到达最终位置
  animateFilter: function (node: any, i: number) {
    return true;
  },

  /* 布局事件回调 */
  // 布局就绪时的回调
  ready: undefined,
  // 布局停止时的回调
  stop: undefined,
  // 对最终节点位置应用变换的函数
  transform: function (node: any, position: any) {
    return position;
  },
};
