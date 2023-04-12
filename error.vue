<template>
  <div class="pt-10">
    <h1 class="text-2xl text-center mb-2">
      出了點錯 - {{ props.error?.statusCode }}
    </h1>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({ error: Object });
console.log(props.error);
const router = useRouter();
const retry = () => (window.location.href = props.error!.url);
const handleError = () => clearError({ redirect: '/' });
</script>
