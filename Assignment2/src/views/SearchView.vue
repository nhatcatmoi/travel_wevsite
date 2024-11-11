<script setup lang="ts">
    import { ref, onMounted, computed, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import type { Product } from '@/stores/Product';
    import { RouterLink } from 'vue-router';


    const products = ref<Product[]>([]);
    const route = useRoute();
    const keyword = ref(String(route.query.tukhoa || ''));

    onMounted(async () => {
        products.value = await fetch('http://localhost:3000/products')
        .then(respone => respone.json());
    });

    const filteredProducts = computed(() => {
        return products.value.filter(product =>
            product.homeStay_Name.toLowerCase().includes(keyword.value.toLowerCase())
        );
    });

    watch(() => route.query.tukhoa, (newQuery) => {
        keyword.value = String(newQuery || '')
    });

</script>

<template>
    <div class="container">
        <h3>Kết quả tìm kiếm "{{ keyword }}"</h3>
        <br>
        <div class="row">
            <div class="col-12 col-md-3 col-lg-4 mb-4"  v-for="product in filteredProducts" :key="product.homeStay_ID">
                <div class="card">
                    <img :src="'/img/img_homeStay/' + product.image" class="card-img-top" style="width: auto; height: 365px;" />
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
                            <div class="badge pt-2 mb-2" style="background-color: #003c94;"> {{ product.rating?.score }}</div>
                            <p><i class="bi bi-dot"></i> {{ product.rating?.description }} <i class="bi bi-dot"></i></p>
                            <p>{{ product.rating?.reviewCount }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>