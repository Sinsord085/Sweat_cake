// ใช้งาน mongoose
const mongoose = require('mongoose')

// ออกแบบ Schema
let productSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    image: String,
    des: String
})

// สร้างโมเดล
let Product = mongoose.model("products", productSchema)

// ส่งออกโมเดล
module.exports = Product

//ออกแบบฟังก์ชั่นสำหรับบันทึกข้อมูล
module.exports.saveProduct = function(model, data) {
    model.save(data)
}