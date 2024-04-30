// email
function isEmail(input) {
  let regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regEx.test(input.value)) return true;
  return false;
}

// không rỗng

function isRequired(input) {
  if (input.value == "") return false;
  return true;
}

// ho ten
function isName(input) {
  if (input.value.length <= 20) return true;
  return false;
}

// sđt
function isPhoneNB(input) {
  if (input.value.length == 10) return true;
  return false;
}

// matkhau
function isPassword(input) {
  let regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regEx.test(input.value)) return true;
  return false;
}

// mật khâu 2:
function isConfirmedPassword(input, password) {
  if (input.value === password.value) return true;
  return false;
}

// validation form register and register user local storage
const inputEmailRegister = document.querySelector("#mail");
const inputPasswordRegister = document.querySelector("#pwd");
const btnRegister = document.querySelector("#sub");
let NameElement = document.querySelector("#uname");
let PNElement = document.querySelector("#sdt");
let PWAElement = document.querySelector("#rpwd");
var TBElement = document.querySelector("#thongbao");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isRequired(NameElement)) {
    TBElement.innerHTML = "Họ tên không được bỏ trống!";
    return false;
  } else if (!isName(NameElement)) {
    TBElement.innerHTML = "Họ tên không vượt quá 20 ký tự!";
    return false;
  } else if (!isRequired(PNElement)) {
    TBElement.innerHTML = "Số điện thoại không được bỏ trống!";
    return false;
  } else if (!isPhoneNB(PNElement)) {
    TBElement.innerHTML = "Số điện thoại phải đủ 10 số!";
    return false;
  } else if (!isRequired(inputEmailRegister)) {
    TBElement.innerHTML = "Email không được bỏ trống!";
    return false;
  } else if (!isEmail(inputEmailRegister)) {
    TBElement.innerHTML = "Email không hợp lệ!";
    return false;
  } else if (!isRequired(inputPasswordRegister)) {
    TBElement.innerHTML = "Mật Khẩu không được bỏ trống!";
    return false;
  } else if (!isPassword(inputPasswordRegister)) {
    TBElement.innerHTML =
      "Mật khẩu phải có ít nhất 1 chữ cái in Hoa và ít nhất một chữ số!";
    return false;
  } else if (!isConfirmedPassword(PWAElement, inputPasswordRegister)) {
    TBElement.innerHTML = "Mật khẩu không trùng khớp!";
    return false;
  } else {
    // array user
    const user = {
      username: inputEmailRegister.value,
      password: inputPasswordRegister.value,
      fullname: NameElement.value,
      phone: PNElement.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputEmailRegister.value, json);

    // Thêm user mới đăng kí vào danh sách user
    let ListUser = JSON.parse(localStorage.getItem("ListUser")) || [];
    ListUser.push(user);
    localStorage.setItem("ListUser", JSON.stringify(ListUser));

    alert("Đăng Ký Thành Công");
  }
});
