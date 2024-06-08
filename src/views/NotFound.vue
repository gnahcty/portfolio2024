<template>
  <div class="page">
    <router-link to="/"
      ><div class="absolute ml-8 mt-8 aspect-square w-12 select-none items-center text-center">
        <span class="icon-[teenyicons--x-circle-outline] text-3xl font-bold"></span></div
    ></router-link>
    <div class="flex-center flex h-full w-full">
      <div>
        <img
          src="@/assets/img/404_pc.png"
          alt="x_x 404"
          class="max-w-screen hidden h-full max-h-[90vh] w-full md:block"
        />
        <img
          src="@/assets/img/404_mobile.png"
          alt="x_x 404"
          class="max-w-screen h-full max-h-[90vh] w-full md:hidden"
        />
      </div>
    </div>
  </div>
</template>
