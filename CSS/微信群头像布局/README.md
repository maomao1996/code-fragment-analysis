# 微信群头像布局

有一天来了一个需求: 要做一个微信群头像布局 😨

然后忽然想起以前看过的一篇文章 [张鑫旭 —— 伪类匹配列表数目实现微信群头像 CSS 布局的技巧](https://www.zhangxinxu.com/wordpress/2019/03/nth-last-child-css-layout/) 瞬间感觉问题不大 😁

## 在微信小程序中使用

小程序不支持 `~` 选择器，所以需要写一堆伪类选择来帮助我们判断当前存在几个元素

```css
.img {
  outline: var(--border-width) solid #ddd;
  outline-offset: -3px;
  flex: none;
  width: calc(100% / 3);
  object-fit: contain;
}
/* 只有一个时 */
.img:only-child {
  width: 100%;
}
/* 存在二到四个时 */
.img:last-child:nth-child(2),
.img:first-child:nth-last-child(2),
.img:last-child:nth-child(3),
.img:nth-child(2):nth-last-child(2),
.img:first-child:nth-last-child(3),
.img:last-child:nth-child(4),
.img:nth-child(2):nth-last-child(3),
.img:nth-child(3):nth-last-child(2),
.img:first-child:nth-last-child(4) {
  width: 50%;
}
```

## 其他

本实现参考并魔改了 [张鑫旭 —— 伪类匹配列表数目实现微信群头像 CSS 布局的技巧](https://www.zhangxinxu.com/wordpress/2019/03/nth-last-child-css-layout/) 中 `Flex` 写法，并做了优化: 按照数据返回顺序排列头像
