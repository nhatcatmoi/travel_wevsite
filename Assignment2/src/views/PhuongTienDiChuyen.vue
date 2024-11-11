<script setup lang="ts">

</script>

<template>
  <main>
    <div class="container mt-4">
        <!-- First Row: Genius Section -->
        <div class="row mb-4">
            <div class="col-lg-3 col-md-12">
                <div class="card p-3 bg-primary text-white">
                    <h5 class="card-title">Genius</h5>
                    <p>Nhật ơi, bạn đang là Genius Cấp 1 trong chương trình khách hàng thân thiết của chúng tôi</p>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-12">
                <div class="card p-3 mb-3">
                    <h5 class="card-title">Giảm 10% khi thuê xe</h5>
                    <p>Tiết kiệm cho một số xe cho thuê</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-12">
                <div class="card p-3">
                    <h5 class="card-title">Giảm giá 10% chỗ nghỉ</h5>
                    <p>Tận hưởng giảm giá tại các chỗ nghỉ giá trên toàn cầui</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-12">
                <div class="card p-3">
                    <h5 class="card-title">Giảm giá 15% chỗ nghỉ</h5>
                    <p>Hoàn tất 5 đơn đặt để mở khóa Genius Cấp 2</p>
                </div>
            </div>
        </div>

        

        <!-- FAQ Section -->
        <div class="row">
            <div class="col-md-6 mb-3">
                <div class="accordion" id="accordionFAQ1">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Tại sao tôi nên đặt thuê xe ở Việt Nam với Booking.com?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ1">
                            <div class="accordion-body">
                                <p>Để đăng ký thuê xe, bạn chỉ cần thẻ tín dụng hoặc ghi nợ.</p>
                                <p>Tại quầy cho thuê, bạn sẽ cần: Hộ chiếu, Voucher, Bằng lái xe, Thẻ tín dụng, v.v.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <div class="accordion" id="accordionFAQ2">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Tôi có thể đặt xe cho bạn bè, đồng nghiệp, v.v. của mình không?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ2">
                            <div class="accordion-body">
                                <p>Chắc chắn rồi! Bạn có thể đặt xe cho người khác.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <div class="accordion" id="accordionFAQ3">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Tôi cần xem xét những gì khi lựa chọn một chiếc xe?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ3">
                            <div class="accordion-body">
                                <p>Khi lựa chọn xe, bạn cần xem xét điều kiện thuê xe, loại xe và giá thuê phù hợp với bạn.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <div class="accordion" id="accordionFAQ4">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Tất cả các loại phí có được bao gồm trong giá thuê xe không?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFAQ4">
                            <div class="accordion-body">
                                <p>Tất cả các phí liên quan đến dịch vụ thuê xe sẽ được bao gồm trong hợp đồng thuê.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
  </main>
</template>