import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { checkLogin } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  // Thay đổi path thành "/"
      name: 'home',
      component: HomeView
    },
    {
      path: '/noi-luu-tru',
      name: 'Nơi Lưu Trú',
      component: () => import('../views/NoiLuuTru.vue')
    },
    {
      path: '/chi-tiet-noi-luu-tru/:homeStay_ID',
      name: 'Chi Tiết Nơi Lưu Trú',
      component: () => import('../views/ChiTiet_NoiLuuTru.vue')
    },
    {
      path: '/dia-diem',
      name: 'Địa Điểm',
      component: () => import('../views/DiaDiem.vue')
    },
    {
      path: '/chi-tiet-dia-diem',
      name: 'Chi Tiết Địa Điểm',
      component: () => import('../views/ChiTietDiaDiem.vue')
    },
    {
      path: '/phuong-tien-di-chuyen',
      name: 'Phương Tiện Di Chuyển',
      component: () => import('../views/PhuongTienDiChuyen.vue')
    },
    {
      path: '/dang-nhap',
      name: 'Đăng Nhập',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/thong-tin',
      name: 'Thông tin',
      component: () => import('../views/InfoView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/dang-ky',
      name: 'Đăng Ký',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/product-view',
      name: 'Trang Sản Phẩm Fake',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/tim-kiem',
      name: 'Thanh Tìm Kiếm',
      component: () => import('../views/SearchView.vue')
    },
  ]
})

export default router

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!checkLogin()) {
      next({
        path: '/dang-nhap',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
