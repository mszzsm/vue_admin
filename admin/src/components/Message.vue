<template>
   <div class="alert" :class="'alert-' + type">
       <h2>{{text}}</h2>
       <button class="btn btn-primary" @click="$emit('onNext')">
           continue
       </button>
   </div>

</template>
<script>

export default {
    props: ['type', 'text']
}
</script>

<style>
    
</style>
