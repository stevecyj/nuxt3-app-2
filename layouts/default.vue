<template>
  <div>
    <nav
      class="border-b border-slate-200 px-5 py-2 flex items-center justify-between"
    >
      <h1 class="text-2xl font-bold">Nuxt3 in Action</h1>
      <img
        class="w-[50px] border-[1px] border-slate-300 rounded-full inline-block"
        src="~/assets/avatar/1.png"
        alt="avatar"
      />
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
