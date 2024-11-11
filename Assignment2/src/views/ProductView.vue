<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import type { Product } from '../stores/Product';

  const products = ref<Product[]>([]);

  onMounted(async () => {
    products.value = await fetch('http://localhost:3000/products')
    .then(respone => respone.json());
    console.log(products.value);
  });
</script>

<template>
  <main>
    <div class="container">
      <h2 class="mt-5 mb-3">CÁC ĐỊA ĐIỂM NỔI TIẾNG</h2>
      <p>Các địa điểm nổi tiếng đang chờ đón bạn</p>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3 mb-4"  v-for="product in products" :key="product.homeStay_ID">
          <div class="card">
            <img :src="'/img/img_homeStay/' + product.image" class="card-img-top" style="width: auto; height: 365px;"></img>
            <div class="card-body">
              <div class="badge bg-warning"> {{ product.isVip }}</div>
              <RouterLink to="/chi-tiet-noi-luu-tru" class="text-decoration-none">
                <p class="card-title mb-0"><strong> {{ product.homeStay_Name }} </strong></p>
              </RouterLink>
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
  </main>
</template>
