# Hệ Thống Tích Hợp Thanh Toán Sử Dụng MongoDB, Stripe, Express.js, Node.js và JWT

## Tổng Quan
Dự án này là một hệ thống tích hợp thanh toán sử dụng **MongoDB Atlas** làm cơ sở dữ liệu, **Stripe** để xử lý thanh toán, và được xây dựng trên nền tảng **Express.js**, **Node.js**, kết hợp với **JWT** để xác thực người dùng và tích hợp API. Hệ thống cung cấp cách thức bảo mật và hiệu quả để quản lý tài khoản người dùng, xử lý thanh toán và lấy dữ liệu từ cơ sở dữ liệu.

## Tính Năng Chính
- **MongoDB Atlas**: Lưu trữ dữ liệu người dùng và giao dịch.
- **Stripe**: Tích hợp API để xử lý thanh toán trực tuyến.
- **Express.js**: Framework giúp xây dựng các API RESTful.
- **Node.js**: Môi trường chạy server-side cho ứng dụng.
- **JWT**: Xác thực người dùng an toàn và phân quyền truy cập.

## Công Nghệ Sử Dụng
- **MongoDB Atlas**: Cơ sở dữ liệu NoSQL trên đám mây, dùng để lưu trữ thông tin người dùng và chi tiết giao dịch.
- **Stripe**: Cổng thanh toán trực tuyến để xử lý các giao dịch thẻ tín dụng một cách an toàn.
- **Express.js**: Framework nhẹ giúp xây dựng các API RESTful để quản lý thanh toán và xác thực người dùng.
- **Node.js**: Môi trường JavaScript để xây dựng các ứng dụng phía server.
- **JWT (JSON Web Token)**: Được sử dụng để xác thực và quản lý phiên đăng nhập một cách an toàn.

## Cách Hoạt Động
1. **Xác Thực Người Dùng**: 
   - Người dùng có thể đăng ký hoặc đăng nhập bằng phương thức xác thực JWT.
   - Sau khi đăng nhập thành công, người dùng sẽ nhận được một **JWT token** để thực hiện các yêu cầu API tiếp theo.

2. **Xử Lý Thanh Toán**:
   - Người dùng chọn sản phẩm hoặc dịch vụ và tiến hành thanh toán qua Stripe.
   - API sẽ gửi yêu cầu đến Stripe để xử lý thanh toán.
   - Stripe phản hồi trạng thái thanh toán (thành công hoặc thất bại) và chi tiết giao dịch sẽ được lưu vào MongoDB.

3. **Lấy Dữ Liệu**:
   - Hệ thống cung cấp các API RESTful để người dùng lấy lịch sử giao dịch và kiểm tra trạng thái đơn hàng.
   - Tất cả dữ liệu được lấy từ MongoDB một cách an toàn.

## API Endpoints
- **POST /auth/login**: Đăng nhập và nhận JWT token.
- **POST /auth/register**: Đăng ký tài khoản mới.
- **POST /payment**: Tạo yêu cầu thanh toán và xử lý qua Stripe.
- **GET /transactions**: Lấy lịch sử giao dịch của người dùng từ MongoDB.
## Cài Đặt

1. Clone repository:
   ```bash
   git clone https://github.com/your-username/payment-integration-system.git
   cd payment-integration-system
2. cài đặt phụ thuộc
  npm install
3.thết lập môi trường file .env
MONGODB_URI=your_mongodb_atlas_uri
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret_key
4. chạy dự án
npm run dev

