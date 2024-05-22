<template>
  <div class="container mx-auto">
    <h2 class="text-2xl mt-10 font-bold tracking-tight text-gray-900 sm:px-6 lg:px-8">Product Details :</h2>
    <!-- {{ JSON.stringify(product) }} -->
    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img :src="product?.['images'][0]" class="h-full w-full object-cover object-center" />
      </div>
      <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img :src="product?.images[1]" class="h-full w-full object-cover object-center" />
        </div>
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img :src="product?.images[2]" class="h-full w-full object-cover object-center" />
        </div>
      </div>
      <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <img :src="product?.images[3]" class="h-full w-full object-cover object-center" />
      </div>
    </div>

    <!-- Product info -->
    <div
      class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.title }}</h1>
        <div>
          <h3 class="sr-only">Description</h3>

          <div class="space-y-6">
            <p class="text-base text-gray-900">{{ product.description }}</p>
          </div>
        </div>
        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Details</h2>

          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">Brand : {{ product.brand }}</p>
            <p class="text-sm text-gray-600">Category : {{ product.category }}</p>
          </div>
        </div>
      </div>

      <!-- Options -->
      <div class="mt-4 lg:row-span-3 lg:mt-0">
        <h2 class="sr-only">Product information</h2>
        <p class="text-3xl tracking-tight text-gray-900">${{ product.price }}</p>


        <div class="mt-6">
          <h3 class="sr-only">Reviews</h3>
          <div class="flex items-center">
            <div class="flex items-center">
              <div>
                <svg style="width: 0; height: 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <defs>
                    <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
                      <stop :offset="(product.rating - Math.floor(product.rating)) * 100 + '%'" stop-color="#000"></stop>
                      <stop :offset="(product.rating - Math.floor(product.rating)) * 100 + '%'" stop-color="#dedede">
                      </stop>
                    </linearGradient>

                    <linearGradient id="zero" x1="0" x2="100%" y1="0" y2="0">
                      <stop offset="0%" stop-color="#dedede"></stop>
                      <stop offset="100%" stop-color="#dedede"></stop>
                    </linearGradient>
                    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="star">
                      <path
                        d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                    </symbol>
                  </defs>
                </svg>
              </div>

              <p class="star-rating flex" aria-label="4.5 stars out of 5">
                <svg class="c-star active" width="32" height="32" viewBox="0 0 32 32" v-for="rating in [1, 2, 3, 4, 5]"
                  :key="rating">
                  <use xlink:href="#star"
                    :fill="Math.floor(product.rating) > rating ? '' : Math.floor(product.rating) == rating ? 'url(#half)' : 'url(#zero)'">
                  </use>
                </svg>
              </p>&nbsp;
              {{ product.rating }}
            </div>
            <p class="sr-only">{{ product.rating }} out of 5 stars</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useProducts } from '../../stores/products'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { ref } from 'vue'

export default {
  setup() {
    const products = useProducts()
    const { getProductById } = storeToRefs(products);


    return {
      getProductById
    }
  },
  data() {
    return {
      product: { title: 'zz', images: [], rating: 0 },
    }
  },
  mounted() {
    //console.log(this.getProductById(this.$route.params.id))
    this.product = this.getProductById(this.$route.params.id)
  },
  computed: {

  },
  methods: {

  }
}
</script>