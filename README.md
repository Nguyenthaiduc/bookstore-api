## BOOK STORE API theo Pattern Decorator
### Xây dựng Database
- Book: tên, mô tả, tác giả, thể loại, số lượng
- Thể Loại : id, tên thể loại

`1 book thuộc 1 hoặc nhiều thể loại 1 thể loại có 1 hoặc nhiều book`

- Khách Hàng :  id, tên, sdt, địa chỉ, email
- Giỏ Hàng : id khách hàng, ngày đặt hàng

`1 khách hàng có 1 hoặc nhiều giỏ hàng) (1 giỏ hàng có 1 hoặc nhiều book`

### Package
>1. `npm init -y`
>2. `npm i -D @types/node`
>3. `npm i -D nodemon`
>4. `npm i -D prettier`
>5. `npx tsc --init`
>6. `install TypeORM`