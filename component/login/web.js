function signin() {
    const tendangnhap = document.getElementById("username").value;
    const matkhau = document.getElementById("password").value;

    if (localStorage.getItem(tendangnhap)) {
        alert("Tài khoản đã tồn tại!");
    } else {
        localStorage.setItem(tendangnhap, matkhau);
        alert("Đăng ký thành công!");
    }
}

function login() {
    const tendangnhap = document.getElementById("username").value;
    const matkhau = document.getElementById("password").value;

    const storedPassword = localStorage.getItem(tendangnhap);
    if (storedPassword === matkhau) {
        alert("Đăng nhập thành công");
        localStorage.setItem("tendangnhap", tendangnhap);
        window.location.href = "/../../index.html";
        document.getElementsByClassName("login_button").style.display = "none";
    } else {
        alert("Mật khẩu sai hoặc tài khoản không tồn tại!");
    }
}

function logout() {
    localStorage.removeItem("tendangnhap");
    window.location.href= "/../../index.html";
}

window.onload = function () {
    const user = localStorage.getItem("tendangnhap");
    if (user) {
      document.getElementById("loginBtn").style.display = "none";
      document.getElementById("logoutBtn").style.display = "block";
    } else {
      document.getElementById("logoutBtn").style.display = "none";
    }
};