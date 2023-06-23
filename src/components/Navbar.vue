<template>
  <div>
    <div
      class="flex justify-between font-Alata font-semibold text-sm max-sm:justify-around"
    >
      <img
        class="h-8 cursor-pointer max-sm:h-7"
        src="../images/logo.svg"
        alt="LoopStudios logo"
      />
      <i
        @click="store.openMenu"
        class="fa-solid fa-bars fa-2xl lg:hidden flex justify-center items-center cursor-pointer"
        style="color: #ffffff"
      ></i>
      <ul class="flex gap-9 text-white max-lg:hidden text-base max-sm:text-sm">
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import useStore from "../store/store.js";
import { storeToRefs } from "pinia";

const store = useStore();

const { openMenu } = storeToRefs(useStore());
</script>
