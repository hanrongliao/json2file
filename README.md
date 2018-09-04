## 介绍
使用JS实现将Json数据为导出csv和xlsx文件。

## 使用场景
将渲染为表格的报表数据直接通过JS导出，省去再解析表格DOM。

## 安装使用
1. 通过 npm 安装
```bash
npm install json2filejs --save
```
2. 直接通过script标签应用，此时会暴露全局变量`Json2file`
```html
<script src="./json2file/dist/index.js"></script>
```
## 使用
```js
new Json2file({
    headers: [{
        key: 'name',
        text: '姓名',
    },
    {
        key: 'age',
        text: ''
    }], // 表头
    data: [{
        name: 'json'
    }] // 数据
})
```