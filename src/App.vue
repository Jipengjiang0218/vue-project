<template>
<div>
  <router-view />
  <FooterNav/>
</div>
</template>


<script>
import FooterNav from './components/FooterNav/FooterNav'
export default {
name: 'App',
components:{FooterNav},

props:[ ],

data(){
return{

}
},
methods:{

}


  }
</script>

<style scoped>

</style>
