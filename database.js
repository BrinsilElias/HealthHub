var fs = require('fs');
var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

function getData(searchTerm) {
    // Get all the Data
    if(!searchTerm) {
        return data
    }
    return data.filter(d => d.name.includes(searchTerm))
}
exports.getData = getData

function addData(newData) {
    // Add Data                         
    let id = Object.keys(data).length + 1
    const updatedNewData = [{"id": id, ...newData}]
    const updatedData = [...data, ...updatedNewData]
    data.push({
        "id": id,
        ...newData
    })
    fs.writeFileSync('data.json', JSON.stringify(updatedData))
}
exports.addData = addData

function deleteData(id) {
    // Delete Data
    data = data.filter((d) => d.id !== id)
    fs.writeFileSync('data.json', JSON.stringify(data))
}
exports.deleteData = deleteData