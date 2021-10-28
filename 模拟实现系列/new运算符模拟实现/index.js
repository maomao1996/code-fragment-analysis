/**
 * new 运算符会进行如下的操作：
 * 1. 创建一个全新的对象
 * 2. 为新创建的对象添加属性 __proto__ 并指向构造函数的原型对象
 * 3. 将新创建的对象作为函数调用的 this
 * 4. 如果构造函数没有返回对象类型，则新创建的对象
 **/

// MDN: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
// 相关学习文章: https://github.com/mqyqingfeng/Blog/issues/13

export function myNew() {
  // 获取构造函数
  const Constructor = [].shift.call(arguments)

  // 创建空对象并设置原型
  const obj = Object.create(Constructor.prototype)

  // 绑定 this 并执行构造函数
  const result = Constructor.apply(obj, arguments)

  // 返回构造函数显示返回的值或新对象
  return result && typeof result === 'object' ? result : obj
}
