<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { userLogout, email } from '@/stores/user';

const user = ref<any>({});
const router = useRouter();

const handleLogout = () => {
    userLogout();
    router.push('/dang-nhap');
};

onMounted(async () => {
    const response = await fetch(`http://localhost:3000/user?email=${email.value}`);
    const users = await response.json();
    if (users.length === 0) {
        alert('Người dùng không tồn tại');
        return;
    }
    user.value = users[0];
});
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 22rem;">
      <h3 class="text-center mb-3">Thông Tin Người Dùng</h3>
      <div class="mb-3">
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
      <button class="btn btn-danger w-100" @click="handleLogout">Đăng Xuất</button>
    </div>
  </div>
</template>
