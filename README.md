# I. Quy trình phishing một phần tử content từ một trang web nào đó của đối thủ:
- Mở trang web trên browser 
- Phải chuột, chọn "Save As", chọn đường dẫn lưu về thư mục dataphishing cua project phishing-content-backend 
- Mỗi trang web sẽ được lưu thành 1 thư mục asset và 1 file endpoint .html  
- Mở file endpoint .html de customize (thêm, sửa, xóa những content theo yêu cầu)
- Thiết lập route trong file app.js
- Như vậy mỗi một api từ backend server sẽ trả về một trang html content. Chúng ta sẽ đưa api này vào một thẻ iframe và nhúng nó vào template của Wordpress để phishing những nội dung cần thiết
# II. How to run up project in local environment step by step:
### Case 1: run docker environment in  debug local
    npm run start
### Case 2: run docker environment in no-debug local
    make run
### Case 3: run docker environment in no-debug local
    make run
### Case 4: run docker environment in production
    make run
# III. Output
### Api content:
    http://localhost/xoilaczkk-trang-chu
    http://localhost/xoilaczkk-bang-xep-hang
    http://localhost/xoilaczkk-live-score
    http://localhost/xoilaczkk-content
    ....


