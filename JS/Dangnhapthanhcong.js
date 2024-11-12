function loginUser() {
    // Lấy thông tin người dùng từ localStorage
    var storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
        var userData = JSON.parse(storedUserData);
        var storedEmail = userData.email;
        var storedPassword = userData.password;

        // Lấy thông tin email và mật khẩu từ trang đăng nhập
        var email = document.getElementById("email1").value;
        var password = document.getElementById("password1").value;

        // So sánh thông tin đăng nhập với thông tin trong localStorage
        if (email === storedEmail && password === storedPassword) {
            // Nếu đúng, thông báo đăng nhập thành công và chuyển hướng đến trang đã đăng nhập
            alert("Login successful!");
            window.location.href = "../HTML/Dulieunguoidung.html";
        } else {
            // Nếu sai, thông báo đăng nhập thất bại
            alert("Incorrect email or password. Please try again.");
        }
    } else {
        // Nếu không có thông tin người dùng trong localStorage, thông báo đăng nhập thất bại
        alert("No user data found. Please register first.");
    }
}
