<script setup lang="ts">

</script>

<template>
  <main>
    <div class="position-relative">
        <div class="container-fluid p-0">
            <img src="/banner7.jpg" alt="" class="img-fluid w-100" style="height: 80vh; object-fit: cover;">
        </div>          
        <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-center align-items-center text-white">
            <h4 class="mt-3">Đâu là điểm đến mong chờ của bạn ?</h4>
        </div>
    </div>

    <div class="container mt-3 mb-3">
        <div class="fs-2 fw-bold">Các điểm đến phổ biến</div>
        <div class="row mt-3">
            <div class="col-md-4 position-relative">
                <RouterLink to="/chi-tiet-dia-diem">
                    <img src="/muine.jfif" alt="Muine" class="img-fluid rounded" style=" width: 416px; height: 234px;">
                    <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                        Mũi Né 🇻🇳
                    </div>
                </RouterLink>
            </div>
            <div class="col-md-4 position-relative">
                <img src="/phanthiet.jfif" alt="Phanthiet" class="img-fluid rounded" style=" width: 416px; height: 234px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Phan Thiết 🇻🇳
                </div>
            </div>
            <div class="col-md-4 position-relative">
                <img src="/danang.jfif" alt="Danang" class="img-fluid rounded" style=" width: 416px; height: 234px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Đà Nẵng 🇻🇳
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-4 position-relative">
                <img src="/phuquoc.jfif" alt="Muine" class="img-fluid rounded" style=" width: 416px; height: 234px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Phú Quốc 🇻🇳
                </div>
            </div>
            <div class="col-md-4 position-relative">
                <img src="/angiang.jfif" alt="Phanthiet" class="img-fluid rounded" style=" width: 416px; height: 234px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Bình Phước 🇻🇳
                </div>
            </div>
            <div class="col-md-4 position-relative">
                <img src="/vinhlong.jfif" alt="Danang" class="img-fluid rounded" style=" width: 416px; height: 234px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Vĩnh Long 🇻🇳
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-3 mb-3">
        <div class="fs-2 fw-bold">Khám phá thêm nhiều địa điểm khác</div>
        <div class="row mt-3 ">
            <div class="col-md-2 position-relative">
                <img src="/angiang.jfif" alt="Muine" class="img-fluid rounded opacity-75" style="width: 416px; height: 120px;">
                <div class="position-absolute top-0 text-white start-25 text-white p-2" style="background-color: rgba(0, 0, 0, 0.5);">
                    An Giang 🇻🇳
                </div>
            </div>
            <div class="col-md-2 position-relative">
                <img src="/komtum.jfif" alt="Phanthiet" class="img-fluid rounded" style=" width: 416px; height: 120px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Kom Tum 🇻🇳
                </div>
            </div>
            <div class="col-md-2 position-relative">
                <img src="/tphcm1.jfif" alt="Danang" class="img-fluid rounded" style=" width: 416px; height: 120px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    TPHCM 🇻🇳
                </div>
            </div>
            <div class="col-md-2 position-relative">
                <img src="/hue.jfif" alt="Muine" class="img-fluid rounded" style=" width: 416px; height: 120px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Huế vn                
                </div>
            </div>
            <div class="col-md-2 position-relative">
                <img src="/gialai.jfif" alt="Phanthiet" class="img-fluid rounded" style=" width: 416px; height: 120px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Gia Lai 🇻🇳
                </div>
            </div>
            <div class="col-md-2 position-relative">
                <img src="/dalat1.jfif" alt="Danang" class="img-fluid rounded" style=" width: 416px; height: 120px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Đà Lạt 🇻🇳
                </div>
            </div>
        </div>
        <div class="row row-cols-5 justify-content-center mt-3">
            <div class="col position-relative">
                <img src="/lamdong.jfif" alt="Muine" class="img-fluid rounded opacity-75" style="width: 100%; height: 120px;">
                <div class="position-absolute top-0 start-25 text-white p-2" style="background-color: rgba(0, 0, 0, 0.5);">
                    Lâm Đồng 🇻🇳
                </div>
            </div>
            <div class="col position-relative">
                <img src="/caobang.jfif" alt="Phanthiet" class="img-fluid rounded" style="width: 100%; height: 120px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Cao Bằng 🇻🇳
                </div>
            </div>
            <div class="col position-relative">
                <img src="/hanoi.jfif" alt="Danang" class="img-fluid rounded" style="width: 100%; height: 120px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Hà Nội 🇻🇳
                </div>
            </div>
            <div class="col position-relative">
                <img src="/tayninh.jfif" alt="Muine" class="img-fluid rounded" style="width: 100%; height: 120px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Tây Ninh 🇻🇳
                </div>
            </div>
            <div class="col position-relative">
                <img src="/ninhbinh.jfif" alt="Phanthiet" class="img-fluid rounded" style="width: 100%; height: 120px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Ninh Bình 🇻🇳
                </div>
            </div>
        </div>
        <div class="row mt-3 mb-3">
            <div class="col-md-3 position-relative">
                <img src="/cangio.jfif" alt="Muine" class="img-fluid rounded opacity-75" style="width: 416px; height: 220px;">
                <div class="position-absolute top-0 text-white start-25 text-white p-2" style="background-color: rgba(0, 0, 0, 0.5);">
                    Cần Giờ 🇻🇳
                </div>
            </div>
            
            <div class="col-md-3 position-relative">
                <img src="/danang.jfif" alt="Phanthiet" class="img-fluid rounded" style=" width: 416px; height: 220px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Đà Nẵng 🇻🇳
                </div>
            </div>
            <div class="col-md-3 position-relative">
                <img src="/quangngai.jfif" alt="Danang" class="img-fluid rounded" style=" width: 416px; height: 220px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Quãng Ngãi 🇻🇳
                </div>
            </div>
            <div class="col-md-3 position-relative">
                <img src="/binhdinh.jfif" alt="Muine" class="img-fluid rounded" style=" width: 416px; height: 220px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Bình Định vn           
            </div>
        </div>
        <div class="row mt-3 mb-3">
            <div class="col-md-4 position-relative">
                <img src="/taynguyen.jfif" alt="Muine" class="img-fluid rounded opacity-75" style="width: 416px; height: 220px;">
                <div class="position-absolute top-0 text-white start-25 text-white p-2" style="background-color: rgba(0, 0, 0, 0.5);">
                    Tây Nguyên 🇻🇳
                </div>
            </div>
            
            <div class="col-md-4 position-relative">
                <img src="/dongnai.jfif" alt="Phanthiet" class="img-fluid rounded" style=" width: 416px; height: 220px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Đồng Nai 🇻🇳
                </div>
            </div>
            <div class="col-md-4 position-relative">
                <img src="/bentre.jfif" alt="Danang" class="img-fluid rounded" style=" width: 416px; height: 220px;">
                <div class="position-absolute top-0 start-0 text-white p-2 fw-bold" style="background-color: rgba(0, 0, 0, 0.5);">
                    Bên Tre 🇻🇳
                </div>
            </div>
        </div>
    </div>

    <div class="container"></div>
        <div class="fs-2 mb-3 fw-bold">Thông tin chi tiết về cách vận hành tour du lịch</div>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#area" type="button" role="tab" aria-controls="area" aria-selected="true">CHƯƠNG TRÌNH</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#city" type="button" role="tab" aria-controls="city" aria-selected="false">BẢNG GIÁ</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#locatedFavorite" type="button" role="tab" aria-controls="locatedFavorite" aria-selected="false">HỦY TOUR</button>
            </li>
        </ul>
        <!-- Tab content -->
        <div class="tab-content" id="myTabContent">
            <!-- Tab 1: Chương trình -->
            <div class="tab-pane fade show active" id="area" role="tabpanel" aria-labelledby="home-tab">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Ninh Thuận</a>
                        <p>168 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Bắc Kạn</a>
                        <p>29 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Cao Bằng</a>
                        <p>455 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Thanh Hóa</a>
                        <p>788 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Bình Định</a>
                        <p>699 chỗ nghỉ</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Mũi Né</a>
                        <p>1.700 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Phú Quốc</a>
                        <p>48 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Long An</a>
                        <p>96 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Bến Tre</a>
                        <p>55 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Trà Vinh</a>
                        <p>25 chỗ nghỉ</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Thành Phố Hồ Chí Minh</a>
                        <p>2.046 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Tây Ninh </a>
                        <p>235 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Đồng Nai</a>
                        <p>224 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Kiên Giang</a>
                        <p>57 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Bình Dương</a>
                        <p>98 chỗ nghỉ</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Hà Nội</a>
                        <p>1.578 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Gia Lai</a>
                        <p>557 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Côn Đảo</a>
                        <p>19 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Bình Thuận</a>
                        <p>478 chỗ nghỉ</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <a href="#" class="fw-bold mt-3 mb-0 text-decoration-none text-black">Bình Phước</a>
                        <p>355 chỗ nghỉ</p>
                    </div>
                </div>
                
            </div>

            <div class="tab-pane fade" id="city" role="tabpanel" aria-labelledby="profile-tab">
                <table class="table mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Dịch Vụ</th>
                            <th scope="col">Loại Dịch Vụ</th>
                            <th scope="col">Giá Từ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Giá phòng</th>
                            <td>Phòng đơn</td>
                            <td>500.000đ/đêm</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Phòng đôi</td>
                            <td>700.000đ/đêm</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Phòng gia đình</td>
                            <td>1.200.000đ/đêm</td>
                        </tr>
                        <tr>
                            <th scope="row">Thuê xe</th>
                            <td>Xe máy</td>
                            <td>200.000đ/ngày</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Xe ô tô</td>
                            <td>1.500.000đ/ngày</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="tab-pane fade" id="locatedFavorite" role="tabpanel" aria-labelledby="contact-tab">
                <div class="mt-3">
                    <ul>
                        <li>Quý khách có thể hủy phòng trước 5 ngày.</li>
                        <li>Phí hủy phòng sẽ là 30% giá phòng nếu hủy sau 5 ngày.</li>
                        <li>Phí hủy phòng sẽ là 50% giá phòng nếu hủy sau 3 ngày.</li>
                        <li>Phí hủy phòng sẽ là 100% giá phòng nếu hủy trong vòng 1 ngày trước ngày nhận phòng.</li>
                        <li>Việc hủy bỏ phải được thông báo qua email hoặc tin nhắn, và phải được xác nhận bởi khách sạn. Hủy bỏ qua điện thoại sẽ không được chấp nhận.</li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
  </main>
</template>