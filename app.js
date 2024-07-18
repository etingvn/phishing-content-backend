const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Kết nối tới Express
const app = express();

// Middleware tự định nghĩa để thiết lập giới hạn kích thước payload response
const limitResponseSize = (req, res, next) => {
  const limit = '500mb'; // 500MB
  res.setHeader('Content-Length', limit);
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
}

// Sử dụng middleware limitResponseSize cho tất cả các yêu cầu
app.use(limitResponseSize); 
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use(cors({ origin: '*' }));
app.use(express.static("./dataphishing/"));


// Route cho trang chủ
app.get('/xoilaczkk-trang-chu', (req, res) => {
  res.sendFile(path.join(__dirname, 'dataphishing', 'trangchu.html'));
});
// Route cho bảng xếp hạng
app.get('/xoilaczkk-bang-xep-hang', (req, res) => {
  res.sendFile(path.join(__dirname, 'dataphishing', 'bangxephang.html'));
});
// Route cho livescore
app.get('/xoilaczkk-live-score', (req, res) => {
  res.sendFile(path.join(__dirname, 'dataphishing', 'livescore.html'));
});
// Route cho bum
app.get('/xoilaczkk-content', (req, res) => {
  res.sendFile(path.join(__dirname, 'dataphishing', 'content.html'));
});
    
module.exports = app;
