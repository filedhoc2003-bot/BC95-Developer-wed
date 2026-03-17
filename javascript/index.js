console.log("text tạo pull request");
// đếm số lượng phần tử của mảng
let number = [1, 2, 3, 4, 5, 6, 7];
let fruit = ["cam", "tao", "nho", "buoi"];
console.log(`số lượng phần tử xủa mảng: ${number.length}`);
// lấy phần tử cuối của mảng
// chỉ số phần tử cuối cùng của mảng: length-1
let lastIndex = number.length - 1;
console.log(`phần tử cuối cùng của mảng: ${number[lastIndex]}`);
// unshift()=> [đầu mảng] [1,2,3,4,5,6] [cuối mảng] <=push()
// shift() <= [đầu mảng] [1,2,3,4,5,6] [cuối mảng] => pop()
// push(): thêm phần tử vào cuổi mảng
number.push(7);
console.log(`mảng số nguyên mới là: ${number}`);
// unshift(): thêm phần tử vào đầu mảng
number.unshift(0);
console.log(`mảng số nguyên mới sau khi thêm vào đầu mảng là: ${number}`);
// pop(): xóa phần tử cuối cùng của mảng
let removeItem = number.pop();
console.log(`phần tử bị xóa là: ${removeItem}. mảng mới là: ${number}`);
// shift(): xóa phaafn tử đàu tiên của mảng
let removeFisrt = number.shift();
console.log(`phần tử bị xóa là: ${removeFisrt}. mảng mới là: ${number}`);
// splice: có thể xóa, sửa, thêm
// splice(vị trí bắt đầu , số lượng xóa, phần tử, thêm vào (xóa))
// lưu ý: hàm này sẽ làm thay đổi mảng gốc
// xóa -> splice(vị trí bắt đầu xóa, số lượng phần tử cần xóa)
let food = ["cầu", "dừa", "đủ", "xoài", "long"];
// TH1: xóa dừa
food.splice(1, 1);
console.log(`mảng mới là: ${food}`);
// TH2: xóa hết
food.splice(0);
console.log(`mảng sau khi xóa là: ${food}`);
// thêm: splice (vị trí bắt đầu thêm, 0, những item cần thêm)
let langs = ["HTML", "CSS", "JAVAscript", "Thúy"];
// thêm python và java vào giữa HTML và CSS [thêm vào, xóa từ số mình chọn để thêm, cái thêm ......]
langs.splice(1, 0, "python", "java");
console.log(`mảng sau khi thêm là: ${langs}`);
// thay thế: splice(vị trí thế, xóa lượng xóa, những item cần thêm)
let team = ["Huỳnh", "Minh", "Thư", "NGuyễn", "Thành", "Đạt"];
team.splice(1, 2, "Bá", "Kinh");
console.log(`mảng sau khi thêm: ${team}`);

//ES6:
//1. arrow functionL: () => {}
//2. let const
//3.let: dùng cho những biến mà có thể thay đổi giá trị được
//4. const: dùng cho biến không thể thay đổi
//5. template string: $(varible hoặc function)
//6. default paramete
const add1 = (number1 = 1, number2 = 2, number3 = 8) => {
  // code mới thêm
  if (number3) {
    return number1 + number2 + number3;
  }
  //
  return number1 + number2;
};
console.log("default parameter");
console.log(add1(3, 4));
console.log(add1(5));
console.log(add1());
console.log(add1(1, 2));
//7. spread operator
// spread - trải ra
// dùng trong:
// - copy mảng /object
// - nối mảng / merge object
// - truyền hàm vào
//ý nghĩa: giảm thiểu code thủ công: copy mảng, truyền vào hàm
// TH1. copy mảng
const original = [1, 2, 3];
// dùng để coppy
const coppyOriginal = [...original];
coppyOriginal.push(4);
console.log(`mảng cũ: ${original}`);
console.log(`mảng mới: ${coppyOriginal}`);
// TH2: nối mảng
const frontend = ["HTML", "CSS", "JAVASCRIPT"];
const backend = ["expressJS", "nestJS"];
const fullstack = [...frontend, ...backend];
console.log(`fullstack: ${fullstack}`);
