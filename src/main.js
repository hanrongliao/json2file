import saveAs from 'file-saverjs'
import XLSX from 'xlsx/dist/xlsx.core.min'

function Json2FileJs(options) {
  this.headers = options.headers
  this.data = options.data
  this.filename = options.name
  return this
}

const getCSVFormatData = (headers, data) => {
  const result = '\uFEFF'
  const list = []
  const headerKey = []
  let hList = []
  headers.forEach((header) => {
    hList.push(header.text)
    headerKey.push(header.key)
  })
  list.push(hList.join(','))
  data.forEach((item) => {
    let dList = []
    headerKey.forEach((key) => {
      dList.push(item[key])
    })
    list.push(dList.join(','))
  })
  return result + list.join('\r\n')
}

const getXLSXFormatData = (headers, data) => {
  const order = []
  const headerList = {}
  headers.forEach((header) => {
    order.push(header.key)
    headerList[header.key] = header.text
  })
  return { order, data: [headerList].concat(data) }
}

Json2FileJs.prototype = {
  exportCSV() {
    const data = getCSVFormatData(this.headers, this.data)
    const blob = new Blob([data], { type: 'text/csv;charset=utf-8' })
    const filename = this.filename || 'file'
    saveAs(blob, `${filename}.csv`)
  },
  exportXLSX() {
    const filename = this.filename || 'file'
    const d = getXLSXFormatData(this.headers, this.data)
    const ws = XLSX.utils.json_to_sheet(d.data, { header: d.order, skipHeader: true })
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "sheet1")
    XLSX.writeFile(wb, `${filename}.xlsx`);
  },
}

export default Json2FileJs