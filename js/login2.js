const LoginButton = (e) => {
  e.preventDefault();
  let ListUser = JSON.parse(localStorage.getItem("ListUser")) || [];

  var TBElement = document.querySelector("#thongbao");
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  let userFind = ListUser.find((item, index) => {
    return email == item.username;
  });
  if (userFind) {
    if (userFind.password == password) {
      alert("Đăng nhập thành công!");
      window.location.href = "index.html";
      return true;
    } else {
      TBElement.innerHTML = "Email hoặc mật khẩu không chính xác!";
    }
  } else {
    TBElement.innerHTML = "Email hoặc mật khẩu không chính xác!";
  }
  return false;
};
var btn_submit = document.getElementById("loginbutton");
btn_submit.addEventListener("click", LoginButton);

//Hiện mật khẩu
function showPassword() {
  var passwordInput = document.getElementById("password");
  var showpass = document.getElementById("showpass").checked;

  if (showpass) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
