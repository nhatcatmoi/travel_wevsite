<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import type { Product } from '../stores/Product';
    import ProductList from '../components/ProductList.vue';

    const products = ref<Product[]>([]);
    const category1Products = ref<Product[]>([]);
    const category2Products = ref<Product[]>([]);

    onMounted(async () => {
        products.value = await fetch('http://localhost:3000/products?hot=1')
        .then(respone => respone.json());
        category1Products.value = await fetch('http://localhost:3000/products?category=1')
        .then(respone => respone.json());
        category2Products.value = await fetch('http://localhost:3000/products?category=1')
        .then(respone => respone.json());
    });
</script>

<template>
  <main>
    <!-- Banner Carousel -->
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
                <img src="/banner4.jpg" class="d-block w-100" alt="Banner 1" style="height: 100vh; object-fit: cover;">
                <div class="carousel-caption d-flex flex-column justify-content-center h-100">
                    <h1 class="display-4 fw-bold">Chào Mừng Đến Với Trang Web Du Lịch</h1>
                    <p class="lead">Khám Phá Những Điểm Đến Tuyệt Vời Nhất</p>
                    <a href="#explore" class="btn btn-light btn-lg mt-3" style="width: auto;">Khám Phá Ngay</a>
                </div>
            </div>
            <!-- Slide 2 -->
            <div class="carousel-item">
                <img src="/banner3.jpg" class="d-block w-100" alt="Banner 2" style="height: 100vh; object-fit: cover;">
                <div class="carousel-caption d-flex flex-column justify-content-center h-100">
                    <h1 class="display-4 fw-bold">Khám Phá Vẻ Đẹp Thiên Nhiên</h1>
                    <p class="lead">Chinh Phục Những Đỉnh Núi Cao Nhất</p>
                    <a href="#explore" class="btn btn-light btn-lg mt-3">Khám Phá Ngay</a>
                </div>
            </div>
            <!-- Slide 3 -->
            <div class="carousel-item">
                <img src="/banner5.jpg" class="d-block w-100" alt="Banner 3" style="height: 100vh; object-fit: cover;">
                <div class="carousel-caption d-flex flex-column justify-content-center h-100">
                    <h1 class="display-4 fw-bold">Du Lịch Và Khám Phá Văn Hóa</h1>
                    <p class="lead">Tận Hưởng Ẩm Thực Và Con Người Ở Mỗi Điểm Đến</p>
                    <a href="#explore" class="btn btn-light btn-lg mt-3">Khám Phá Ngay</a>
                </div>
            </div>
        </div>

        <!-- Carousel Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- Search Bar Section -->
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
                <form class="row g-2 p-3 bg-white rounded shadow">
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Tìm kiếm địa điểm" aria-label="Search">
                    </div>
                    <div class="col-md-4">
                        <input type="date" class="form-control" placeholder="Chọn ngày" aria-label="Date">
                    </div>
                    <div class="col-md-2">
                        <input type="number" class="form-control" placeholder="Số người" aria-label="People" min="1" max="20">
                    </div>
                    <div class="col-md-2">
                        <button type="submit" class="btn btn-primary w-100">Tìm kiếm</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Ưu đãi section -->
    <div class="container my-5">
        <h2 class="text-center mb-4">ƯU ĐÃI ĐẶC BIỆT</h2>
        <div class="row justify-content-center">
            <!-- Banner 1 -->
            <div class="col-md-5 mb-4">
                <div class="position-relative">
                    <img src="/banner1.jfif" alt="Ưu đãi 1" class="img-fluid rounded" style="width: 100%; height: 200px; object-fit: cover;">
                    <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
                        <h3 class="fw-bold">Ưu Đãi 1</h3>
                        <p>Giảm giá 30% cho chuyến du lịch mùa thu</p>
                        <a href="#" class="btn btn-light" style="background-color: #003c94; color: white;">Nhận Thêm Giảm giá</a>
                    </div>
                </div>
            </div>
            <!-- Banner 2 -->
            <div class="col-md-5 mb-4">
                <div class="position-relative">
                    <img src="/banner6.jpg" alt="Ưu đãi 2" class="img-fluid rounded" style="width: 100%; height: 200px; object-fit: cover;">
                    <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
                        <h3 class="fw-bold">Ưu Đãi 2</h3>
                        <p>Đặt vé trước để nhận ưu đãi 25%</p>
                        <a href="#" class="btn btn-light" style="background-color: #003c94; color: white;">Nhận Thêm Ưu Đãi</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <h2 class="mt-5 mb-4">Việc tìm kiếm sẽ trở nên nhanh hơn và tiện ích hơn với các lợi ích sau:</h2>
        <div class="mb-3">
            <a href="#" class="btn mb-2 me-2" role="button" style="background-color: #003c94; color: white;">
                <span><i class="bi bi-brightness-alt-high-fill"></i> Bãi Biển</span>
            </a>
            <a href="#" class="btn mb-2 me-2" role="button" style="background-color: #003c94; color: white;">
                <span><i class="bi bi-cloud"></i> Thiên nhiên</span>
            </a>            
            <a href="#" class="btn mb-2 me-2" role="button" style="background-color: #003c94; color: white;">
                <span><i class="bi bi-building"></i> Thành Phố</span>
            </a>           
            <a href="#" class="btn mb-2 me-2" role="button" style="background-color: #003c94; color: white;">
                <span><i class="bi bi-heart-fill"></i> Lãng Mạn</span>
            </a>            
            <a href="#" class="btn mb-2 me-2" role="button" style="background-color: #003c94; color: white;">
                <span><i class="bi bi-activity"></i> Thư Giãn</span>
            </a>           
            <a href="#" class="btn mb-2" role="button" style="background-color: #003c94; color: white;">
                <span><i class="bi bi-egg-fried"></i> Ẩm Thực</span>
            </a>
            
        </div>
    
        <div class="row mt-4">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 text-center">
                <img src="/vungtau.jfif" class="rounded" style="width: 100%; height: 150px; object-fit: cover;">
                <h3>Vũng Tàu</h3>
                <p>Bãi Biển</p>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 text-center">
                <img src="/camau.jfif" class="rounded" style="width: 100%; height: 150px; object-fit: cover;">
                <h3>Cà Mau</h3>
                <p>Sông Nước</p>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 text-center">
                <img src="/dalat.jfif" class="rounded" style="width: 100%; height: 150px; object-fit: cover;">
                <h3>Đà Lạt</h3>
                <p>Núi, Cao Nguyên</p>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 text-center">
                <img src="/hanoi.jfif" class="rounded" style="width: 100%; height: 150px; object-fit: cover;">
                <h3>Hà Nội</h3>
                <p>Đồng Bằng</p>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 text-center">
                <img src="/tphcm.jfif" class="rounded" style="width: 100%; height: 150px; object-fit: cover;">
                <h3>TPHCM</h3>
                <p>Đồng Bằng</p>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 text-center">
                <img src="/condao.jfif" class="rounded" style="width: 100%; height: 150px; object-fit: cover;">
                <h3>Côn Đảo</h3>
                <p>Đảo, Thiên Nhiên</p>
            </div>
        </div>
    </div>

    <div class="container mt-5">
        <h2 class="text-center">Cảm giác như ở nhà dù bạn đi đến đâu</h2>
        <div class="row justify-content-center mt-4">
            <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div class="card">
                    <img src="/dulich2.jfif" class="card-img-top" alt="Mũi Né" width="194px" height="259px">
                    <div class="card-body text-center">
                        <h5 class="card-title">Mũi Né</h5>
                        <p class="card-text">166.514 nhà nghỉ dưỡng</p>
                        <a href="#" class="btn btn-outline-primary">Khám phá</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-none mt-5 d-sm-block">
                <div class="card">
                    <img src="/dulich1.jfif" class="card-img-top" alt="Cổ Thạch" width="194px" height="259px">
                    <div class="card-body text-center">
                        <h5 class="card-title">Cổ Thạch</h5>
                        <p class="card-text">179.454 nhà nghỉ dưỡng</p>
                        <a href="#" class="btn btn-outline-primary">Khám phá</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-none d-sm-block">
                <div class="card">
                    <img src="/dulich3.jfif" class="card-img-top" alt="Sầm Sơn" width="194px" height="259px">
                    <div class="card-body text-center">
                        <h5 class="card-title">Sầm Sơn</h5>
                        <p class="card-text">181.734 nhà nghỉ dưỡng</p>
                        <a href="#" class="btn btn-outline-primary">Khám phá</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-none mt-5 d-sm-block">
                <div class="card">
                    <img src="/dulich4.jfif" class="card-img-top" alt="Ba Vì" width="194px" height="259px">
                    <div class="card-body text-center">
                        <h5 class="card-title">Ba Vì</h5>
                        <p class="card-text">60.560 nhà nghỉ dưỡng</p>
                        <a href="#" class="btn btn-outline-primary">Khám phá</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-none d-sm-block">
                <div class="card">
                    <img src="/dulich5.jfif" class="card-img-top" alt="Núi Cấm" width="194px" height="259px">
                    <div class="card-body text-center">
                        <h5 class="card-title">Núi Cấm</h5>
                        <p class="card-text">14.211 nhà nghỉ dưỡng</p>
                        <a href="#" class="btn btn-outline-primary">Khám phá</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    

    <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 mb-2">
            <h2 id="dynamicTitle" class="order-0">Số lượng càng nhiều, giá cả càng rẻ</h2>
            <a href="#" class="text-decoration-none text-primary order-1 mt-2 mt-md-0">Tìm hiểu thêm về các vé thưởng</a>
        </div>
        <div class="row">
            <div class="col-12 col-md-3 mb-4">
                <div class="border border-2 rounded-4" style="background-color: #003c94;">
                    <h4 class="p-1 text-white">
                        <i class="bi bi-star-fill text-warning"></i> Premium <i class="bi bi-star-fill text-warning"></i>
                    </h4>
                    <p class="p-1 text-white">Bạn ơi, bạn đang có cơ hội trở thành khách cao cấp sau khi đặt phòng trong chương trình khách hàng thân thiết bên chúng tôi</p>
                </div>
            </div>
            
            <div class="col-12 col-md-3 mb-4">
                <div class="border border-2 rounded-4">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="p-2">Giảm giá 15% đặt phòng</h5>
                        <i class="bi bi-percent bg-warning rounded-circle" style="width: 30px; padding-left: 7px; margin-right: 20px;"></i>
                    </div>
                    <p class="p-2 mb-5">Nhận 15% ưu đãi nếu lần đầu bạn sử dụng dịch vụ bên chúng tôi</p>
                </div>
            </div>
            <div class="col-12 col-md-3 mb-4">
                <div class="border border-2 rounded-4">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="p-2">Giảm giá 20% thuê xe</h5>
                        <i class="bi bi-car-front-fill bg-warning rounded-circle" style="width: 30px; padding-left: 7px; margin-right: 40px;"></i>
                    </div>
                    <p class="p-2 mb-5">Tiết kiệm việc thuê xe đi lại với những ưu đãi</p>
                </div>
            </div>
            <div class="col-12 col-md-3 mb-4">
                <div class="border border-2 rounded-4">
                    <div class="d-flex justify-content-between align-items-center">
                        <div><h5 class="p-2">Giảm giá 20% thuê xe</h5></div>
                        <div><i class="bi bi-lock-fill bg-warning rounded-circle" style="width: 30px; height: 30px; padding-right: auto; margin-right: 40px;"></i></div>
                    </div>
                    <p class="p-2 mb-5">Tiết kiệm việc thuê xe đi lại với những ưu đãi</p>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <h2 class="mt-5 mb-3">CÁC ĐỊA ĐIỂM NỔI TIẾNG</h2>
        <p>Các địa điểm nổi tiếng đang chờ đón bạn</p>
        <ProductList title="Tour Hot" :products="products"/>
        <ProductList title="Tour Miền Nam" :products="category1Products"/>
        <ProductList title="Tour Miền Bắc" :products="category2Products"/>
    </div>

    <div class="container">
        <h2 class="mt-5 mb-3">Đặt dễ dàng</h2>
        <p>Chúng tôi lưu ưu tiên với các phương châm sau</p>
        <div class="row mb-5">
            <div class="col-12 col-md-4 mb-4">
                <div class="border border-2 rounded-4 p-3">
                    <div class="d-flex align-items-center">
                        <img src="/price.jfif" class="rounded-circle" width="80" height="80">
                        <div class="d-flex flex-column ms-3">
                            <h3>Chi Phí Rõ Ràng</h3>
                            <p>Những gì bạn thấy là những gì bạn trả</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="border border-2 rounded-4 p-3">
                    <div class="d-flex align-items-center">
                        <img src="/like.jfif" class="rounded-circle" width="80" height="80">
                        <div class="d-flex flex-column ms-3">
                            <h3>Xác nhận tức thì</h3>
                            <p>Đa số có thể đặt tức thì sau khi bạn thao tác</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="border border-2 rounded-4 p-3">
                    <div class="d-flex align-items-center">
                        <img src="/cancel.jfif" class="rounded-circle" width="80" height="80">
                        <div class="d-flex flex-column ms-3">
                            <h3>Linh Hoạt</h3>
                            <p>Việc hủy bỏ nhanh chóng, không cầu kì</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container mt-3 mb-5 position-relative">
        <img class="img-fluid" src="/banner5.jpg" alt="Banner" width="1300" height="800">
        <div class="position-absolute top-50 start-50 translate-middle text-center">
            <h2 class="text-white">
                Bạn ơi, hãy tìm <span id="highlight" class="fw-bold">nơi nghỉ dưỡng</span>
                <br>
                <span>để tận hưởng và trải nghiệm chuyến du lịch đáng nhớ !!!</span>
            </h2>
        </div>
    </div>
  </main>
</template>

