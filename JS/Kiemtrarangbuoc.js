// Kiemtrarangbuoc.js

function validateLoginForm() {
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    var errorMessages = []; // Mảng để lưu trữ thông báo lỗi

    // Kiểm tra email
    if (!email) {
        errorMessages.push("Email is required.");
    } else if (email.indexOf("@gmail.com") === -1) {
        errorMessages.push("Invalid email format. Please enter a valid email address.");
    }

    // Kiểm tra mật khẩu
    if (!password) {
        errorMessages.push("Password is required.");
    } else if (password.length !== 12) {
        errorMessages.push("Password must be exactly 12 characters long.");
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
        errorMessages.push("Password must contain at least one uppercase letter, one lowercase letter, and one digit.");
    } else if (!/^[a-zA-Z0-9]+$/.test(password)) {
        errorMessages.push("Password must contain only letters and numbers.");
    }

    // Kiểm tra mật khẩu nhập lại
    if (!password2) {
        errorMessages.push("Please re-enter your password.");
    } else if (password !== password2) {
        errorMessages.push("Passwords do not match.");
    }


    // Kiểm tra xem có lỗi không
    if (errorMessages.length > 0) {
        // Nếu có lỗi, hiển thị thông báo lỗi
        alert(errorMessages.join("\n"));
    } else {
        
        // Nếu không có lỗi, thực hiện đăng nhập thành công và lưu thông tin người dùng vào localStorage
        alert("Register successful!");

        // Lưu thông tin người dùng vào localStorage
        var userData = {
            email: email,
            password: password
        };

        // Lưu thông tin người dùng vào localStorage
        localStorage.setItem("userData", JSON.stringify(userData));

        // Chuyển hướng đến trang Dulieunguoidung.html
        window.location.href = "../HTML/Dulieunguoidung.html";
    }
}


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
            window.location.href = "../HTML/Trangchu.html";
        } else {
            // Nếu sai, thông báo đăng nhập thất bại
            alert("Incorrect email or password. Please try again.");
        }
    } else {
        // Nếu không có thông tin người dùng trong localStorage, thông báo đăng nhập thất bại
        alert("No user data found. Please register first.");
    }
}
