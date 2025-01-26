export const gridLayoutConfig = {
  name: "grid",
  fit: true, // 是否将视图适配到图形
  padding: 30, // 适配时使用的内边距
  boundingBox: undefined, // 限制布局边界 { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // 防止节点重叠,如果空间不足可能会超出boundingBox
  avoidOverlapPadding: 10, // 当avoidOverlap为true时节点周围的额外间距
  nodeDimensionsIncludeLabels: false, // 计算节点边界框时是否包含标签
  spacingFactor: undefined, // 用于扩展或压缩节点占用总面积的乘数(>0)
  condense: false, // false时使用所有可用空间,true时使用最小空间
  rows: undefined, // 强制网格的行数
  cols: undefined, // 强制网格的列数
  position: function (node: any) {}, // 返回元素的{row, col}位置
  sort: undefined, // 用于对节点排序的函数 e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: true, // 是否对节点位置进行动画
  animationDuration: 500, // 启用动画时的动画持续时间(毫秒)
  animationEasing: undefined, // 启用动画时的缓动函数
  animateFilter: function (node: any, i: number) {
    return true;
  }, // 确定节点是否应该被动画化的函数。启用动画时默认所有节点都会动画。非动画节点在布局开始时立即定位
  ready: undefined, // 布局就绪时的回调
  stop: undefined, // 布局停止时的回调
  transform: function (node: any, position: any) {
    return position;
  }, // 对最终节点位置应用变换的函数。用于改变离散布局中的流向
};
