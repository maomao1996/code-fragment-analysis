import { myInstanceof } from './index'

test('instanceof 运算符模拟实现', () => {
  function Person(name) {
    this.name = name
  }

  const p1 = new Person('maomao')

  expect(myInstanceof(p1, Person)).toBeTruthy()
  expect(myInstanceof(p1, Object)).toBeTruthy()
})
