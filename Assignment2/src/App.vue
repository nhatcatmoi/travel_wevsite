<script setup lang="ts">

  import { RouterLink, RouterView, useRouter } from 'vue-router';
  import { ref } from 'vue';
  import { isAuthenticated } from './stores/user';

  const keyword = ref('');
  const router = useRouter();

  const handleSearch = () => {
    if(keyword.value) {
      router.push({
        path: 'tim-kiem', query: {
          tukhoa: keyword.value
        }
      });
    }
  }
</script>

<template>
  <!-- Navbar sử dụng Vue Router -->
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container">
      <div class="navbar-brand">
        <RouterLink to="/">
          <img src="/logo1.png" alt="Logo" width="100" />
        </RouterLink>
      </div>
      
      <!-- Search Form -->
      <form class="d-flex mx-auto" style="max-width: 400px; width: 100%;" role="search">
        <input class="form-control me-2" type="text" placeholder="Tìm kiếm" v-model="keyword" @keyup.enter="handleSearch" />
        <button class="btn btn-outline-success" @click="handleSearch">Tìm</button>
      </form>
      
      <!-- Navbar content -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/noi-luu-tru">NƠI LƯU TRÚ</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/dia-diem">ĐỊA ĐIỂM</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/phuong-tien-di-chuyen">PHƯƠNG TIỆN DI CHUYỂN</RouterLink>
          </li>
          <!-- Notification -->
          <li class="nav-item">
            <a href="#">
              <i class="bi bi-bell-fill nav-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Nhấp vào để xem thông báo"></i>
            </a>
          </li>
          <!-- Tài Khoản -->
          <li class="nav-item">
            <RouterLink v-if="!isAuthenticated" to="/dang-nhap" class="nav-link d-block">Tài Khoản</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink v-if="isAuthenticated" to="/thong-tin" class="nav-link d-block">Thông tin</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  <RouterView />

  <footer class="bg-dark text-white pt-4 pb-2">
    <div class="container">
        <div class="row">
            <div class="col-md-3 mb-3">
                <h5>Thông tin liên hệ</h5>
                <p>Email: hoangnhat211002@gmail.com</p>
                <p>Điện thoại: +84 768 829 ***</p>
                <p>Địa chỉ: *** Đường ***, Thành phố ***</p>
            </div>
            <div class="col-md-3 mb-3">
                <h5>Thông tin về dự án</h5>
                <p>Dự Án Web Du Lịch</p>
            </div>
            <div class="col-md-3 mb-3">
                <div class="row">
                    <h5>Mạng xã hội</h5>
                </div>
                <div class="row mb-2">
                    <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i> Nguyễn Hoàng Nhật</a>
                </div>
                <div class="row mb-2">
                    <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i> nhatxxx</a>
                </div>
                <div class="row mb-2">
                    <a href="#" class="text-white"><i class="bi bi-instagram"></i> _nhatcatmoi_</a>
                </div>
            </div>
        </div>
        <div class="text-center mt-3">
            <p>&copy; 2024 Nguyễn Hoàng Nhật - Dự Án Boostrap. Bảo lưu mọi quyền.</p>
        </div>
    </div>
  </footer>
</template>