<script setup lang="ts">

</script>

<template>
  <main>
    <div class="container mt-5">
        <!-- Tên tour -->
        <div class="row">
            <div class="col-12">
                <h2 class="text-danger">TOUR MŨI NÉ | BÃI BIỂN THƠ MỘNG TRỮ TÌNH</h2>
            </div>
        </div>
        
        <!-- Hình ảnh chính -->
        <div class="row">
            <div class="col-md-8">
                <img src="/muine.jfif" class="img-fluid mb-3" alt="Tour Image" width="800px">
                <!-- Ảnh nhỏ phía dưới -->
                <div class="d-flex justify-content-start">
                    <img src="/muine1.jfif" class="img-thumbnail img-fluid me-2" alt="Image 1" style="height: 120px; width: auto;">
                    <img src="/muine2.jfif" class="img-thumbnail img-fluid me-2" alt="Image 2" style="height: 120px; width: auto;">
                    <img src="/muine3.jfif" class="img-thumbnail img-fluid me-2" alt="Image 3" style="height: 120px; width: auto;">
                    <img src="/muine4.jfif" class="img-thumbnail img-fluid me-2" alt="Image 3" style="height: 120px; width: auto;">
                </div>
            </div>
        
            <!-- Thông tin tour -->
            <div class="col-md-4">
                <ul class="list-unstyled">
                    <li class="mb-3"><strong>Thời gian:</strong> 5 ngày 4 đêm</li>
                    <li class="mb-3"><strong>Ngày khởi hành:</strong> <span class="badge bg-danger">09/10/2024</span></li>
                    <li class="mb-3"><strong>Phương tiện:</strong> Bay khứ hồi</li>
                    <li class="mb-3"><strong>Lưu trú:</strong> 3 sao</li>
                    <li class="mb-3"><strong>Số chỗ còn:</strong> 15 chỗ</li>
                    <li class="mb-3"><strong>Điểm khởi hành:</strong> Hồ Chí Minh</li>
                    <li class="mb-3"><strong>Mã tour:</strong> No1-5132-09102024</li>
                    <li class="mb-3"><strong>Loại Tour:</strong> Tour khách lẻ</li>
                </ul>
                <div class="bg-info p-3 mb-3">
                    <p class="mb-0">Chiêm ngưỡng bờ biển dài vô tận cùng làn nước trong xanh</p>
                    <p class="mb-0">Văn hóa đời sống phong phú</p>
                    <p class="mb-0">Thưởng thức ẩm thực địa phương</p>
                </div>
                <!-- Giá và nút đặt tour -->
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-danger fs-4"><strong>8,990,000đ</strong></span>
                    <button class="btn btn-danger">ĐẶT TOUR NGAY</button>
                </div>
            </div>
        </div>
        
        
        <!-- Hướng dẫn -->
        <div class="row mt-4 mb-3">
            <div class="col-12">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Hướng dẫn đặt tour
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Thông tin chi tiết về cách đặt tour.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hướng dẫn thanh toán
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Thông tin chi tiết về thanh toán.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Hướng dẫn hủy đổi vé
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Thông tin chi tiết về hủy đổi vé.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Hướng dẫn vận chuyển hành lý
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Thông tin chi tiết về vận chuyển hành lý.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>