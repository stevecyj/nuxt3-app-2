<template>
  <div>
    <nav>
      導航欄
      <img class="avatar" src="~/assets/avatar/1.png" alt="avatar" />
    </nav>
    <slot />
  </div>
</template>

<style scoped>
.avatar {
  width: 50px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 50%;
}
</style>
