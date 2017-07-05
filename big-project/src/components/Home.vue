<template>
  <div>
    <headerBar></headerBar>
    <registryForm></registryForm>
  </div>

</template>

<script>
  import registryForm from '../components/registry-form'
  import headerBar from '../components/headerbar'
  export default {
    name: 'home',
    components: {
      registryForm,
      headerBar
    }
  }
</script>
<style>
  

</style>
