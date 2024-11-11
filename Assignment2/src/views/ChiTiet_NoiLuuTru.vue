<script setup lang="ts">
  import { ref, onMounted } from 'vue';
    import type { Product } from '../stores/Product';
    import { useRoute } from 'vue-router';

    const product = ref<Product | null>(null);
    const route = useRoute();

    onMounted(async () => {
        const respone = await fetch(`http://localhost:3000/products/${ route.params.homeStay_ID }`);
        product.value = await respone.json();
    });
</script>

<template>
  <main>
    <!-- Header with title and breadcrumbs -->
    <div class="container mt-4">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="ass1.html">Trang chủ</a></li>
            <li class="breadcrumb-item"><a href="homestay.html">Khách sạn</a></li>
            <li class="breadcrumb-item active" aria-current="page">Palm Boutique Village</li>
        </ol>
        </nav>
        <h1>Palm Boutique Village - STAY 24H</h1>
        <p><i class="bi bi-geo-alt"></i> 254 Cửa Đại, Cẩm Châu, Hội An, Quảng Nam</p>
    </div>

    <div class="container mt-4">
        <div class="row">
          <!-- Large image (center image in the grid) -->
          <div class="col-md-8">
            <img src="/palm1.jpg" class="img-fluid w-100 mb-3" alt="Large image">
          </div>
    
          <!-- Smaller images -->
          <div class="col-md-4">
            <div class="row mb-3">
              <div class="col-12">
                <img src="/palm1.jpg" class="img-fluid w-100" alt="Image 1" style="width: 416px; height: 234px;">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-12">
                <img src="/palm2.jpg" class="img-fluid w-100" alt="Image 2" style="width: 416px; height: 234px;">
              </div>
            </div>
          </div>
    
          <!-- Grid with 4 smaller images -->
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-3">
                <img src="/palm3.jpg" class="img-fluid w-100 mb-3" alt="Image 4" style="width: 306px; height: 172px;">
              </div>
              <div class="col-md-3">
                <img src="/palm4.jpg" class="img-fluid w-100 mb-3" alt="Image 5" style="width: 306px; height: 172px;">
              </div>
              <div class="col-md-3">
                <img src="/palm5.jpg" class="img-fluid w-100 mb-3" alt="Image 6" style="width: 306px; height: 172px;">
              </div>
              <div class="col-md-3">
                <div class="position-relative">
                  <img src="/palm6.jpg" class="img-fluid w-100 opacity-50" alt="Image 7" style="width: 306px; height: 172px;">
                  <div class="position-absolute top-50 start-50 translate-middle text-white bg-dark p-2 btn">
                    +37 ảnh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <!-- Information section -->
    <div class="container mt-4 mb-3">
        <div class="row">
        <!-- Hotel description -->
        <div class="col-md-8">
            <h2>Thông Tin Chi Tiết Về Phòng</h2>
            <p>
                Palm Boutique Village - STAY 24H có hồ bơi ngoài trời, khu vườn, phòng chờ chung và nhà hàng ở Hội An. 
                Khách sạn 4 sao này có dịch vụ phòng và dịch vụ tiền sảnh. Chỗ nghỉ cung cấp lễ tân 24/24, dịch vụ đưa đón sân bay, bếp chung và Wi-Fi miễn phí ở toàn bộ chỗ nghỉ.
            </p>
            <p>
                Palm Boutique Village - STAY 24H cách Bãi biển Cửa Đại 2.2 km và Bãi biển An Bàng 2.3 km. Sân bay gần nhất là Sân bay Quốc tế Đà Nẵng, cách khách sạn 28 km.
            </p>

            <p>
                Các cặp đôi đặc biệt thích địa điểm này — họ cho điểm 9,4 khi đánh giá chuyến đi hai người.
            </p>
            <p>
                Tại khách sạn, mỗi phòng đều có điều hòa, khu vực ghế ngồi, TV màn hình phẳng có truyền hình vệ tinh, bếp nhỏ, khu vực ăn uống, két an toàn, phòng tắm riêng, vòi xịt/chậu rửa vệ sinh, đồ vệ sinh cá nhân miễn phí và máy sấy tóc. 
                Tất cả các phòng có ấm đun nước, trong đó một số phòng có ban công và một số khác thì nhìn ra thành phố. Tại Palm Boutique Village - STAY 24H, tất cả các phòng đều có ga trải giường và khăn tắm.
            </p>
            <h5>Các tiện ích của phòng</h5>
            <div class="row mt-2 mb-3">
                <div class="col-md-3">Hồ bơi ngoài trời</div>
                <div class="col-md-3">Xe đưa đón sân bay</div>
                <div class="col-md-3">Phòng không hút thuốc</div>
                <div class="col-md-3">Dịch vụ phòng</div>
            </div>
            <div class="row mt-2 mb-3">
                <div class="col-md-3">Nhà hàng</div>
                <div class="col-md-3">Chỗ đỗ xe miễn phí</div>
                <div class="col-md-3">Tiện nghi</div>
                <div class="col-md-3">Wifi miễn phí</div>
            </div>
            <div class="row mt-2 mb-3">
                <div class="col-md-3">Lễ Tân 24h</div>
                <div class="col-md-3">Bữa sáng</div>
            </div>
        </div>
        <!-- Booking and rating section -->
        <div class="col-md-4">
            <div class="card">
            <div class="card-body">
                <h3>9.1 Tuyệt hảo</h3>
                <p>312 đánh giá</p>
                <a href="#" class="btn btn-success">Đặt ngay</a>
            </div>
            </div>
            <div class="card mt-3">
            <div class="card-body">
                <h4>Vị trí</h4>
                <p><i class="bi bi-geo-alt"></i> 254 Cửa Đại, Cẩm Châu, Hội An</p>
                <a href="#" class="btn btn-outline-secondary">Hiển thị trên bản đồ</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    
  </main>
</template>