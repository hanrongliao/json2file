## 介绍
使用JS实现将Json数据为导出csv和xlsx文件。

## 使用场景
将渲染为表格的报表数据直接通过JS导出，省去再解析表格DOM。

## 依赖
本插件依赖[`FileSaver.js`](https://github.com/clarketm/FileSaver.js/)和[`js-xlsx`](https://github.com/SheetJS/js-xlsx)两个库，使用请先引入这两个库
```
<script src='./FileSaver.min.js'></script>
<script src='./xlsx.core.min.js'></script>
```

## 安装
1. 通过npm安装使用
```bash
npm install json2filejs --save
```
```js
import Json2fileJs from 'json2filejs'
```
 或
```html
<script src="./json2filejs/dist/index.min.js"></script>
```
## 用法
```js
    const jsonFile = new Json2fileJs(headers, data, filename)
    jsonFile.exprotCSV() // 导出为csv文件
    jsonFile.exportXLSX() // 导出为xlsx文件
```
`Json2fileJs`接受三个参数，分别是表头`headers`数据`data`和文件名`filename`，后者为字符串类型,前两个参数均为对象数组, 如下:
```js
const headers = [{  // 数据的键和表头名字
        key: 'name', // key对应data元素对象的key
        text: '名称' // name 为对应的表头名字
    }
];
const data = [{
    name: 'csv'
}]
`Json2fileJs` 实例化后拥有两个调用方法，分别是导出csv文件方法 `exprotCSV`  和导出xlsx文件方法 `exportXLSX`
```

## 例子

```js
const headers = [{
        key: 'name',
        text: '名称'
    },
    {
        key: 'count',
        text: '使用量'
    }];
const data = [{
        name: 'csv'，
        count: 10000
    },
    {
        name: 'xlsx',
        count: 100000000
    }];
const jsonFile =  new Json2fileJs(headers, data, 'file')
```
导出csv文件
```
 jsonFile.exprotCSV() // 导出为csv文件
```
导出为xlsx文件
```
jsonFile.exportXLSX() // 导出为xlsx文件
```