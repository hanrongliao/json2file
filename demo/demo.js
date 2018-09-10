var headers = [
  {
    text: '姓名',
    key: 'name',
  },
  {
    text: '年龄',
    key: 'age',
  },
  {
    text: '性别',
    key: 'sex',
  },
]
var data = [
  {
    sex: '男',
    name: '小明',
    age: 3,
  },
  {
    age: 7,
    name: '小红',
    sex: '女',
  }
];
setTimeout(() => {
  console.log(Json2FileJs)
}, 1000)

var saver = new Json2FileJs({ headers, data })
console.log(saver)