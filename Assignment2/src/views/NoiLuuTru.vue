<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue';
    import type { Product } from '../stores/Product';

    const products = ref<Product[]>([]);
    const keyword = ref('');
    const sort = ref('');

    onMounted(async () => {
        products.value = await fetch('http://localhost:3000/products')
        .then(respone => respone.json());
        console.log(products.value);
    });

    const filtereAndSortedProducts = computed(() => {
        let filteredProducts = products.value.filter(product => 
            product.homeStay_Name.toLowerCase().includes(keyword.value.toLowerCase())
        );
        if(sort.value === 'price-asc') {
            filteredProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
        } else {
            filteredProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
        }
        return filteredProducts;
    })
</script>

<template>
  <main>
    <!-- <h1>Nơi lưu trú</h1> -->
    <div class="position-relative">
        <div class="container-fluid p-0">
            <img src="/banner6.jpg" alt="" class="img-fluid w-100" style="height: 80vh; object-fit: cover;">
        </div>          
        <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-center align-items-center text-white">
            <h4 class="mt-3">Bạn dự định sẽ nghỉ ngơi tại đâu ?</h4>
        </div>
    </div>

    <div class="container mt-5">
        <div class="row">
            <div class="col-md-3">
                <h3>TÌM KIẾM CÁC NƠI NGHỈ DƯỠNG</h3>
                <hr />
                <input type="text" class="form-control" v-model="keyword" placeholder="Nhập tên TOUR DU LỊCH cần tìm">
                <br />
                <h5>BỘ LỌC</h5>
                <div class="row d-flex align-items-center">
                    <div class="col-4 p-2">
                        <input type="text" class="form-control" placeholder="From">
                    </div>
                    <div class="col-2 ps-1"></div>
                    <div class="col-4 p-2">
                        <input type="text" class="form-control" placeholder="To">
                    </div>
                    <div class="col-2 ps-1">VNĐ</div>
                </div>
                <input type="range" class="form-range" min="0" max="1000000" id="customRange2">
            </div>
    
            <div class="col-md-9">
                <div class="d-flex justify-content-between bg-body-tertiary p-2 align-items-center">
                    <p class="fs-5">Hiển thị 6 nơi nghỉ dưỡng</p>
                    <select v-model="sort" class="form-control w-25">
                        <option value="">Sắp xếp</option>
                        <option value="price-asc">Giá tăng dần</option>
                        <option value="price-desc">Giá giảm dần</option>
                    </select>
                </div>
    
                <div class="row">
                    <div class="col-12 col-md-3 col-lg-4 mb-4"  v-for="product in filtereAndSortedProducts" :key="product.homeStay_ID">
                        <div class="card">
                            <img :src="'/img/img_homeStay/' + product.image" class="card-img-top" style="width: auto; height: 365px;"></img>
                            <div class="card-body">
                                <div class="badge bg-warning"> {{ product.isVip }}</div>
                                <p class="card-title mb-0 text-decoration-none"><RouterLink to="/chi-tiet-noi-luu-tru"><strong> {{ product.homeStay_Name }} </strong></RouterLink></p>
                                <p class="mb-1"> {{ product.homeStay_Location }} </p>
                                <div class="d-flex">
                                    <div class="badge pt-2 mb-2" style="background-color: #003c94;"> {{ product.rating.score }}</div>
                                    <p><i class="bi bi-dot"></i> {{ product.rating.description }} <i class="bi bi-dot"></i></p>
                                    <p>{{ product.rating.reviewCount }}</p>
                                </div>
                                <div class="badge bg-success"> {{ product.promotion }}</div>
                                <div class="d-flex mt-2">
                                    <div> {{ product.nights }} </div>
                                    <p class="text-decoration-line-through text-danger"> {{ product.originalPrice }} VNĐ </p>
                                    <p> {{ product.discountedPrice }} VNĐ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>
