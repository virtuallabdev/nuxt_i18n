<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
       <h1>Home page</h1>
		    <h2>{{ $t('app.searchEngine') }}</h2><br/><br/>

        <nuxt-link :to="localePath('villas')">Go To Villas Pages</nuxt-link><br/>
     	
		    <nuxt-link :to="switchLocalePath('en')" class="mr-8">EN</nuxt-link>
        <nuxt-link :to="switchLocalePath('bg')" class="mr-8">BG</nuxt-link>
        <nuxt-link :to="switchLocalePath('ru')" class="mr-8">RU</nuxt-link>
       

      </div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {

}
</script>
