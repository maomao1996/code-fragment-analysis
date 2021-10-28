import { myNew } from './index'

describe('new 运算符模拟实现', () => {
  test('默认返回值', () => {
    function Person(name) {
      this.name = name
    }
    const p1 = myNew(Person, 'maomao')

    expect(p1 instanceof Person).toBeTruthy()
    expect(p1.name).toBe('maomao')
  })

  test('显示返回值', () => {
    function Person(name) {
      this.name = name

      return {
        name: 'maomao1996'
      }
    }
    const p1 = myNew(Person, 'maomao')

    expect(p1 instanceof Person).toBeFalsy()
    expect(p1.name).toBe('maomao1996')
  })
})
