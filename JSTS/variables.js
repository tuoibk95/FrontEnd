// var, let, const
// var keyword được sử ụng từ khi JS được tạo ra. Nó là dễ mắc lỗi và khó hiểu khi sử dụng các biến được khai báo bằng var
let num = 100;
let num = 200; //syntax error  
// biến khai báo với let keyword thì không được trùng tên, var thì có thể => khuyến nghị dùng let
var num = 100;
var num = 200; //Ok
// let keyword được thay thế để loại bỏ lỗi từ var. Nó mới và đc khuyến khích để khai báo biến in JS
let msg;
// giá trị 1 biến khi khai báo mà chưa đc gán giá trị ban đầu thì default là undefined
// có thể gán bất kỳ datatype cho nó như string, boolean. nnumeric
// có thể khai báo nhiều biến trên cùng 1 dòng
console.log(msg);

// Dynamic typing
/*
* JS là ngôn ngữ đạt được sự lỏng lẻo
* k cần chỉ định rõ ràng kiểu dữ liệu mà nó chứa
* Có thể update bất kỳ kiểu dữ kiểu nào sau khi khởi tạo
*/

// const keyword là biến hằng số để khai báo 1 biến cố định và k thể thay đổi sau khi đc gán giá trị.
// được khai báo và khởi tạo giá trị ngay cùng thời điểm
const person = { name: 'Steve'};
person.name = "Bill";
// Giá trị của biến const là k thể thay đổi nhưng nội dung là có thể thay đổi
// đặt tên biến const là inhoa khuyến nghị để phân biệt với các biến khác
alert(person.name); //Bill

// cũng có thể khai báo biến mà không có từ khóa var và let, 
// nhưng phải gán giá trị ngay khi khai báo và nó trở thành biến global