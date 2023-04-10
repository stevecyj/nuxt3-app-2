<template>
  <p>id: {{ $route.params.id }}</p>
  <NuxtLink to="/">Index Page</NuxtLink>
</template>
<style scoped lang="scss">
p {
  color: $linkColor;
}
</style>
