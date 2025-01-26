export const elkLayoutConfig = {
  name: "elk",
  // 计算节点尺寸时是否包含标签尺寸
  nodeDimensionsIncludeLabels: false,
  // 是否适配视图
  fit: true,
  // 适配时的内边距
  padding: 20,
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
  // 对最终节点位置应用变换的函数
  transform: function (node: any, pos: any) {
    return pos;
  },
  // 布局就绪时的回调
  ready: undefined,
  // 布局停止时的回调
  stop: undefined,
  // 每个节点的布局选项函数
  nodeLayoutOptions: undefined,

  /* ELK布局选项 */
  elk: {
    // 所有选项可在 http://www.eclipse.org/elk/reference.html 查看
    //
    // 标识符说明:
    // - 可以从标识符中删除'org.eclipse.'前缀
    // - 后续标识符必须用作引号中的属性键
    // - 例如,'org.eclipse.elk.direction'使用:
    //   'elk.direction'
    //
    // 枚举值说明:
    // - 枚举使用枚举的名称作为字符串
    // - 例如不使用Direction.DOWN而使用:
    //   'elk.direction': 'DOWN'
    //
    // 主要配置:
    // - algorithm: 控制使用哪种特定的布局算法
    // 示例(向下分层布局):
    algorithm: "layered",
    "elk.direction": "DOWN",
  },

  // 启用贪心边循环打破时的边处理
  // 返回非空值的边将被跳过
  priority: function (edge: any) {
    return null;
  },
};
