<template>
  <div
    class="bg-black flex justify-evenly items-center w-full h-40 max-md:h-full"
  >
    <div
      class="flex flex-row justify-around w-full max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-12 max-md:mt-10"
    >
      <div class="flex flex-col justify-center items-center gap-5">
        <img
          class="self-start cursor-pointer max-lg:h-7"
          src="../images/logo.svg"
          alt=""
        />
        <ul
          class="flex gap-9 text-white font-Alata font-semibold text-lg max-lg:text-base max-lg:font-medium max-md:gap-6 max-md:flex-col max-md:font-semibold max-md:text-xl"
        >
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>
      <div class="flex flex-col justify-center items-center gap-6">
        <ul class="flex gap-5">
          <li class="after:-bottom-[10px] max-lg:w-5 max-md:w-9">
            <img src="../images/icon-facebook.svg" alt="" />
          </li>
          <li class="after:-bottom-[10px] max-lg:w-5 max-md:w-9">
            <img src="../images/icon-twitter.svg" alt="" />
          </li>
          <li class="after:-bottom-[10px] max-lg:w-5 max-md:w-9">
            <img src="../images/icon-pinterest.svg" alt="" />
          </li>
          <li class="after:-bottom-[10px] max-lg:w-5 max-md:w-9">
            <img src="../images/icon-instagram.svg" alt="" />
          </li>
        </ul>

        <p
          class="flex text-gray-300 text-base font-medium self-start max-lg:text-sm max-md:mb-10 max-md:text-xl"
        >
          © 2023 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  </div>
  <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by
    <a href="https://github.com/AlaskanCrab" target="_blank">AlaskanCrab</a>.
  </div>
</template>
<script setup></script>
