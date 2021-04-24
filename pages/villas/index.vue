<template>
    <div>

        <h1>Villas page</h1>
		<h2>{{ $t('app.searchEngine') }}</h2><br/><br/>
     	
		<nuxt-link :to="switchLocalePath('en')" class="mr-8">EN</nuxt-link>
        <nuxt-link :to="switchLocalePath('bg')" class="mr-8">BG</nuxt-link>
        <nuxt-link :to="switchLocalePath('ru')" class="mr-8">RU</nuxt-link>
		
    </div>
</template>

<script>
export default {
    
    nuxtI18n: {
		paths: {
			en: encodeURI(`/villas`).trim(),
			bg: encodeURI(`/вили-халкидики`).trim(),
			ru: encodeURI(`/халкидики-виллы`).trim()
		}
	},

    async asyncData({store, payload}){
		console.log('PAYLOAD LIST');
		console.log('------');
		if (payload) {
			console.log('static');
			// payload staff
		} else {
			console.log('dynamic');
			// vuex store staff
		}
	}
}
</script>