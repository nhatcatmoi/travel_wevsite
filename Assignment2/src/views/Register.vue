<script setup lang="ts">
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import bcrypt from "bcryptjs";

// Khai báo schema với các điều kiện validate cho form đăng ký
const schema = yup.object({
  email: yup.string()
    .email("Email không hợp lệ")
    .required("Email bắt buộc"),
  password: yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .matches(/[A-Z]/, "Phải chứa ít nhất một chữ hoa")
    .matches(/[a-z]/, "Phải chứa ít nhất một chữ thường")
    .matches(/[0-9]/, "Phải chứa ít nhất một chữ số")
    .matches(/[^A-Za-z0-9]/, "Phải chứa ít nhất một ký tự đặc biệt")
    .required("Mật khẩu là bắt buộc"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Mật khẩu không khớp")
    .required("Xác nhận mật khẩu là bắt buộc"),
});

const router = useRouter();

// Khởi tạo form và các trường dữ liệu
const { handleSubmit, errors } = useForm({ validationSchema: schema });
const { value: email } = useField("email");
const { value: password } = useField("password");
const { value: confirmPassword } = useField("confirmPassword");

// Hàm xử lý đăng ký
const register = handleSubmit(async (values: any) => {
    // Kiểm tra xem email đã tồn tại chưa
    const existingUsers = await fetch(`http://localhost:3000/user?email=${values.email}`)
      .then(response => response.json());

    if (existingUsers.length > 0) {
      alert("Email đã tồn tại");
      return;
    }

    // Mã hóa mật khẩu bằng bcryptjs
    const hashedPassword = await bcrypt.hash(values.password, 10);

    // Gửi dữ liệu đăng ký lên server
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
        password: hashedPassword,
      })
    });

    if (response.ok) {
      alert("Đăng ký thành công!");
      router.push("/dang-nhap");
    } else {
      alert("Đăng ký thất bại, vui lòng thử lại.");
    }
});
</script>
<template>
    <main>
      <section class="vh-75" style="background-color: #f8f9fa;">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-6 col-xl-5 mt-5 mb-5">
              <div class="card text-dark" style="border-radius: 20px;">
                <div class="card-body p-4">
                  <h2 class="text-center fw-bold mb-4">Create Account</h2>
                  <form @submit="register">
                    <div class="mb-3">
                      <label for="email" class="form-label">Your Email*</label>
                      <input
                        type="email"
                        id="email"
                        class="form-control"
                        v-model="email"
                        required
                      />
                      <div class="text-danger">{{ errors.email }}</div>
                    </div>
                    <div class="mb-3">
                      <label for="password" class="form-label">Password*</label>
                      <input
                        type="password"
                        id="password"
                        class="form-control"
                        v-model="password"
                        required
                      />
                      <div class="text-danger">{{ errors.password }}</div>
                    </div>
                    <div class="mb-3">
                      <label for="confirmPassword" class="form-label">Repeat Password*</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        class="form-control"
                        v-model="confirmPassword"
                        required
                      />
                      <div class="text-danger">{{ errors.confirmPassword }}</div>
                    </div>
                    <div class="form-check mb-4">
                      <input class="form-check-input" type="checkbox" id="terms" />
                      <label class="form-check-label" for="terms">
                        I agree to the <a href="#!">Terms of Service</a>
                      </label>
                    </div>
                    <div class="d-flex justify-content-center">
                      <button type="submit" class="btn btn-success btn-lg">Sign Up</button>
                    </div>
                    <div class="text-center mt-3">
                      <RouterLink to="/dang-nhap">Đã có tài khoản? Đăng nhập ngay</RouterLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                class="img-fluid"
                style="max-width: 100%; height: auto;"
                alt="Sample image"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  