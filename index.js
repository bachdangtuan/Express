const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


dataSinhVien = [
    {
        "id":"1",
        "ten":"Trần Văn Giàu",
        "lop":"12A3"
    },
    {
        "id":"2",
        "ten":"Nguyễn Văn Nghèo",
        "lop":"12A3"
    }


]

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// Function CRUD API
// Lấy danh sách học sinh
app.get('/sinhVien', (req, res) => {
    res.send(dataSinhVien)
})
// Lấy thông tin chi tiết học sinh
app.get('/sinhVien/:id', (req, res) => {

    const param = req.params
    console.log('param', param.id);
    
    const index = dataSinhVien.findIndex((sp) =>{
        return sp.id === param.id
         
    })
    if (index !== -1) {
       return  res.status(200).send(dataSinhVien[index])
    }else{
        res.status(400).send('Không tìm thấy tài Nguyên')
    }        
 
    
})
// Thêm học sinh
app.post('/themSinhVien', (req, res) => {

    console.log(req.body);
    res.send('Thêm danh sách sinh viên')
})
// Cập Nhật Học Sinh
app.put('/updateSinhVien/:id', (req, res) => {

    const param = req.params
    console.log('param', param);
    res.send(`Cập nhật sinh viên có ID là ${param.id}`)
})
// Xóa Học Sinh
app.delete('/delSinhVien/:id', (req,res) =>{
    const param = req.params
    console.log(param);
    res.send(`Xóa Học Sinh có ID là ${param.id}`)
} )







app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})