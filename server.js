const express = require("express");
const app = express();

// KEY DATABASE (có thể sau này chuyển sang DB)
const keys = {
  "hai123": "https://orrxl4-protector.com/api/raw?id=rs1olsb3",
  "VIP999": "https://pastefy.app/TMlop60f/raw"
};

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running"
  });
});

// Check key
app.get("/check", (req, res) => {
  const key = req.query.key;

  // check thiếu key
  if (!key) {
    return res.json({
      success: false,
      message: "Missing key"
    });
  }

  const url = keys[key];

  if (!url) {
    return res.json({
      success: false,
      message: "Invalid key"
    });
  }

  return res.json({
    success: true,
    url: url
  });
});

// chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API running on port " + PORT);
});
