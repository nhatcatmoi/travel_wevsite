<script setup lang="ts">
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import bcrypt from "bcryptjs";
    import { userLogin } from "@/stores/user";

    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const login = async () => {
        const response = await fetch(`http://localhost:3000/user?email=${email.value}`);

        const users = await response.json();

        if (users.length === 0) {
            alert("Người dùng không tồn tại!");
            return;
        } 

        const user = users[0];

        const isPasswordValid = await bcrypt.compare(password.value, user.password);

        if(isPasswordValid) {
            alert('Đăng nhập thành công');
            userLogin(user.email);
            router.push('/');
        } else {
            alert('Đăng nhập thất bại');
        }
    };
</script>

<template>
  <main>
    <!-- Section -->
    <section class="vh-75" style="background-color: #f8f9fa;">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-6 col-xl-5">
                    <div class="card text-dark mt-5 mb-5" style="border-radius: 20px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
                        <div class="card-body p-4">
                            <h2 class="text-center fw-bold mb-4">Login</h2>
                            <form @submit.prevent="login">
                                <div class="mb-3">
                                    <label for="loginEmail" class="form-label">Your Email</label>
                                    <input type="email" id="loginEmail" class="form-control" placeholder="Enter your email" v-model="email" required />
                                </div>
                                <div class="mb-3">
                                    <label for="loginPassword" class="form-label">Password</label>
                                    <input type="password" id="loginPassword" class="form-control" placeholder="Enter your password" v-model="password" required />
                                </div>
                                <div class="d-flex justify-content-center mb-4">
                                    <button type="submit" class="btn btn-primary btn-lg">Login</button>
                                </div>
                                <div class="text-center">
                                    <RouterLink class="nav-link" to="/dang-ky">Chưa có tài khoản? Đăng ký tại đây</RouterLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" 
                        class="img-fluid" 
                        style="max-width: 100%; height: auto;" 
                        alt="Sample image">
                </div>
            </div>
        </div>
    </section>
  </main>
</template>