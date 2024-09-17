1. MongoDB Atlas:
MongoDB Atlas là một dịch vụ cơ sở dữ liệu đám mây, được sử dụng để lưu trữ dữ liệu người dùng và giao dịch. Trong dự án này, MongoDB Atlas sẽ lưu trữ:

Thông tin người dùng (email, tên, mật khẩu đã mã hóa, vai trò...).
Dữ liệu về các giao dịch, đơn hàng, chi tiết thanh toán từ Stripe.
Dữ liệu sản phẩm hoặc dịch vụ liên quan đến thanh toán.
Mongoose thường được dùng để kết nối và làm việc với MongoDB trong Node.js.

2. Stripe:
Stripe là dịch vụ thanh toán trực tuyến, hỗ trợ xử lý các giao dịch thẻ tín dụng một cách an toàn. Trong dự án này:

Stripe API sẽ được tích hợp để nhận thanh toán từ người dùng.
Stripe xử lý các giao dịch thanh toán, xác thực thông tin thẻ tín dụng và gửi lại phản hồi thành công hoặc thất bại.
Các webhook từ Stripe sẽ được sử dụng để cập nhật trạng thái giao dịch trong cơ sở dữ liệu MongoDB khi có thay đổi.
3. Express.js:
Express.js là framework nhẹ giúp tạo các REST API trên Node.js. Trong dự án này, Express được dùng để tạo các route (đường dẫn) cho các chức năng:

Xác thực người dùng: Đăng ký, đăng nhập sử dụng JWT.
Quản lý thanh toán: Tạo đơn hàng, gọi đến Stripe API để xử lý thanh toán.
Lấy dữ liệu: Fetching dữ liệu từ MongoDB như lịch sử giao dịch, thông tin tài khoản, trạng thái đơn hàng.
4. Node.js:
Node.js là môi trường runtime cho dự án này. Dự án sử dụng Node.js để xử lý các yêu cầu API, quản lý cơ sở dữ liệu và tương tác với Stripe API. Một số vai trò chính:

Tạo các API backend cho các thao tác thanh toán, quản lý người dùng.
Xử lý các webhook từ Stripe khi có sự kiện giao dịch xảy ra (như thanh toán thành công, thất bại).
Tương tác với MongoDB để lưu và lấy dữ liệu.
5. JWT (JSON Web Token):
JWT được sử dụng cho cơ chế xác thực và phân quyền trong dự án. Người dùng khi đăng nhập thành công sẽ nhận được JWT token, sau đó token này được dùng để:

Xác thực người dùng trong các yêu cầu API tiếp theo.
Bảo vệ các route quan trọng, chỉ cho phép những người dùng đã xác thực truy cập.
6. API Integration & Data Fetching:
Dự án sẽ có các REST API để quản lý thanh toán, lấy dữ liệu từ MongoDB và trả về cho người dùng.
Ví dụ:
POST /payment: Gửi yêu cầu thanh toán đến Stripe.
GET /transactions: Lấy dữ liệu về các giao dịch của người dùng từ MongoDB.
Các API sẽ lấy dữ liệu từ MongoDB, xử lý qua Express, và trả về cho người dùng dưới dạng JSON.
