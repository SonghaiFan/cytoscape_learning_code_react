export const breadthfirstLayoutConfig = {
  name: "breadthfirst",
  // 是否将视图适配到图形
  fit: true,
  // 是否将树向下定向(false则边可以指向任意方向)
  directed: false,
  // 适配时的内边距
  padding: 30,
  // true时将层级放置在同心圆上,false时将层级从上到下排列
  circle: false,
  // 是否将DAG放置在均匀网格中(仅当circle:false时有效)
  grid: false,
  // 节点间距因子,值越大节点间距越大
  spacingFactor: 1.75,
  // 限制布局边界,可以是{x1,y1,x2,y2}或{x1,y1,w,h}
  boundingBox: undefined,
  // 防止节点重叠,如果空间不足可能会超出boundingBox
  avoidOverlap: true,
  // 计算节点边界框时是否包含标签
  nodeDimensionsIncludeLabels: false,
  // 树的根节点
  roots: undefined,
  // 用于对相同深度的节点进行排序的函数
  depthSort: undefined,
  // 是否启用节点位置动画
  animate: true,
  // 动画持续时间(毫秒)
  animationDuration: 500,
  // 动画缓动函数
  animationEasing: undefined,
  // 确定节点是否应该被动画化的函数
  animateFilter: function (node, i) {
    return true;
  },
  // 布局就绪时的回调
  ready: undefined,
  // 布局停止时的回调
  stop: undefined,
  // 转换节点位置的函数,用于改变离散布局中的流向
  transform: function (node, position) {
    return position;
  },
};
