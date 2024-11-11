<script setup lang="ts">
    import type { Product } from '@/stores/Product';
    import { RouterLink } from 'vue-router';

    defineProps <{
        title: String;
        products: Product[];
    }>();
</script>

<template>
  <main>
    <h3>{{ title }}</h3>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3 mb-4"  v-for="product in products" :key="product.homeStay_ID">
            <div class="card">
                <img :src="'/img/img_homeStay/' + product.image" class="card-img-top" style="width: auto; height: 365px;"></img>
                <div class="card-body">
                    <div class="badge bg-warning"> {{ product.isVip }}</div>
                    <p class="card-title mb-0 "><RouterLink class="text-decoration-none" :to="'/chi-tiet-noi-luu-tru/' + product.homeStay_ID"><strong> {{ product.homeStay_Name }} </strong></RouterLink></p>
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
  </main>
</template>