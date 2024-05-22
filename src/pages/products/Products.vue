<template>
  <div class="bg-white">
    <div class="mx-auto container">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:px-6 lg:px-8 mt-10">Products :</h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 sm:px-6 lg:px-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <RouterLink :to="'/product/' + product.id">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img :src="product.thumbnail" :alt="product.title"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.title }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapState } from 'pinia';
import { useProducts } from '../../stores/products';

export default {
  computed: {
    ...mapState(useProducts, { products: 'productStore' })
  },
  methods: {
    ...mapActions(useProducts, ['fetchProducts'])
  },
  created() {
    this.fetchProducts();
  }
}
</script>