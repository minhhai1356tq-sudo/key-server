const express = require("express");

const app = express();

app.use(express.json());


// KEY ĐÚNG
const VALID_KEY = "abc123";


// API NHẬN KEY
app.post("/get-script", (req, res) => {

    // lấy key client gửi lên
    const key = req.body.key;

    // nếu sai
    if (key !== VALID_KEY) {

        return res.status(401).json({
            success: false,
            message: "Key sai"
        });

    }

    // script trả về nếu đúng key
    const script = `
print("Hello từ server")
`;

    // trả dữ liệu
    res.json({
        success: true,
        script: script
    });

});


// chạy server
const PORT = 3000;

app.listen(PORT, () => {

    console.log("Server đang chạy cổng " + PORT);

});