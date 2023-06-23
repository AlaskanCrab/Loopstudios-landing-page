<template>
  <div class="flex w-full justify-center items-center flex-col">
    <div
      v-if="store.menuStatus === true"
      class="max-lg:absolute max-lg:w-full max-lg:h-full max-lg:bg-black max-lg:z-10 max-lg:right-0 max-lg:top-0 max-lg:flex max-lg:flex-col lg:hidden"
    >
      <div class="flex justify-between items-center p-16">
        <img class="w-64 cursor-pointer" src="./images/logo.svg" alt="" />
        <img
          @click="store.closeMenu"
          class="w-10 cursor-pointer active:scale-90 hover:scale-105 hover:opacity-80"
          src="./images/icon-close.svg"
          alt=""
        />
      </div>
      <ul
        class="flex gap-9 text-white text-6xl flex-col justify-start mt-24 font-light ml-10"
      >
        <a class="cursor-pointer hover:opacity-90 active:scale-95">About</a>
        <a class="cursor-pointer hover:opacity-90 active:scale-95">Careers</a>
        <a class="cursor-pointer hover:opacity-90 active:scale-95">Events</a>
        <a class="cursor-pointer hover:opacity-90 active:scale-95">Products</a>
        <a class="cursor-pointer hover:opacity-90 active:scale-95">Support</a>
      </ul>
    </div>
    <div
      class="flex max-w-[90rem] min-h-[40rem] bg-navbar-background justify-center bg-no-repeat bg-center bg-cover"
    >
      <div
        class="flex flex-col gap-28 m-16 px-24 max-lg:px-10 max-lg:w-full max-lg:m-10 max-sm:px-10 max-sm:p-6 max-sm:m-2 max-sm:gap-56"
      >
        <Navbar></Navbar>
        <div
          class="border-4 text-start px-5 py-10 w-1/2 max-lg:border-2 max-md:border-4 max-md:w-full max-sm:border-2"
        >
          <h2
            class="font-Josefin text-7xl text-white max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-6xl max-sm:text-3xl"
          >
            IMMERSIVE EXPERIENCES THAT DELIVER
          </h2>
        </div>
      </div>
    </div>
    <div
      class="flex justify-around relative items-center mr-[24rem] mt-64 mb-64 max-md:flex-col max-md:h-full max-md:w-full max-md:mr-0 max-md:p-5 max-md:mt-24 max-md:mb-24"
    >
      <img
        class="max-2xl:w-[38rem] max-xl:w-[34rem] max-lg:w-[28rem] max-md:w-full max-md:mb-10"
        src="./images/desktop/image-interactive.jpg"
        alt=""
      />
      <div
        class="bg-white w-full absolute -bottom-20 -right-[36rem] p-20 max-2xl:-bottom-36 max-2xl:-right-[30rem] max-2xl:p-18 max-xl:-bottom-36 max-xl:-right-[26rem] max-xl:p-14 max-lg:p-5 max-lg:-bottom-20 max-lg:-right-[21rem] max-md:inline-block max-md:-bottom-0 max-md:-right-0 max-md:relative max-md:text-center"
      >
        <h1
          class="font-Josefin text-5xl font-normal tracking-wider max-2xl:text-4xl max-lg:text-3xl max-md:text-5xl"
        >
          THE LEADER IN INTERACTIVE VR
        </h1>
        <br />
        <p
          class="font-medium text-[1rem] text-dark-gray leading-7 max-lg:text-[0.8rem] max-lg:leading-6 max-md:text-[1.2rem]"
        >
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
    <div
      class="flex flex-row justify-around align-middle w-full mb-64 max-md:mb-24"
    >
      <div class="flex font-normal text-5xl">OUR CREATIONS</div>
      <div
        class="flex justify-center items-center px-5 tracking-[0.4rem] border-2 border-black font-semibold text-base hover:bg-black hover:text-white cursor-pointer active:scale-95 max-md:hidden"
      >
        SEE ALL
      </div>
    </div>
    <!-- desktop version cards -->
    <div
      class="flex justify-center items-center flex-col gap-20 max-xl:gap-12 max-lg:gap-10"
    >
      <div
        class="flex justify-center items-center gap-28 max-xl:gap-10 max-lg:gap-10"
      >
        <div class="bg-deep-earth card">
          <p
            class="absolute bottom-10 left-10 w-16 text-4xl max-xl:text-3xl font-medium max-xl:font-normal"
          >
            DEEP EARTH
          </p>
        </div>
        <div class="bg-night-arcade card">
          <p
            class="absolute bottom-10 left-10 text-4xl max-xl:text-3xl font-medium max-xl:font-normal"
          >
            NIGHT ARCADE
          </p>
        </div>

        <div class="bg-soccer-team card">
          <p
            class="absolute bottom-10 left-10 text-4xl max-xl:text-3xl font-medium max-xl:font-normal"
          >
            SOCCER TEAM VR
          </p>
        </div>
        <div class="bg-grid-a card">
          <p
            class="absolute bottom-10 left-10 text-4xl max-xl:text-3xl font-medium max-xl:font-normal"
          >
            THE GRID
          </p>
        </div>
      </div>
      <div
        class="flex justify-center items-center gap-28 max-xl:gap-10 max-lg:gap-10"
      >
        <div class="bg-above-a card">
          <p
            class="absolute bottom-10 left-10 text-4xl max-xl:text-3xl font-medium max-xl:font-normal"
          >
            FROM UP ABOVE VR
          </p>
        </div>
        <div class="bg-pocket-borealis card">
          <p
            class="absolute bottom-10 left-10 text-4xl max-xl:text-3xl font-medium max-xl:font-normal"
          >
            POCKET BOREALIS
          </p>
        </div>
        <div class="bg-curiosity-a card">
          <p
            class="absolute bottom-10 left-10 text-4xl max-xl:text-3xl font-medium max-xl:font-normal"
          >
            THE CURIOSITY
          </p>
        </div>
        <div class="bg-fisheye-a card">
          <p
            class="absolute bottom-10 left-10 text-4xl max-xl:text-3xl font-medium max-xl:font-normal"
          >
            MAKE IT FISHEYE
          </p>
        </div>
      </div>
    </div>
    <!-- hidden mobile versiyon cards -->
    <div class="flex flex-col justify-center items-center gap-5 md:hidden">
      <div
        class="bg-deep-earth-mobile w-[40rem] h-[15rem] relative cursor-pointer hover:opacity-50 hover:transition-opacity max-md:w-[38rem] max-md:h-[14rem] max-sm:w-[25rem] max-sm:h-[14rem]"
      >
        <p
          class="absolute bottom-8 left-8 text-5xl text-white w-6 max-sm:text-4xl max-sm:w-48"
        >
          DEEP EARTH
        </p>
      </div>
      <div
        class="bg-night-arcade-mobile w-[40rem] h-[15rem] relative cursor-pointer hover:opacity-50 hover:transition-opacity max-md:w-[38rem] max-md:h-[14rem] max-sm:w-[25rem] max-sm:h-[14rem]"
      >
        <p
          class="absolute bottom-8 left-8 text-5xl text-white w-6 max-sm:text-4xl max-sm:w-48"
        >
          NIGHT ARCADE
        </p>
      </div>
      <div
        class="bg-soccer-team-mobile w-[40rem] h-[15rem] relative cursor-pointer hover:opacity-50 hover:transition-opacity max-md:w-[38rem] max-md:h-[14rem] max-sm:w-[25rem] max-sm:h-[14rem]"
      >
        <p
          class="absolute bottom-8 left-8 text-5xl text-white w-64 max-sm:text-4xl max-sm:w-48"
        >
          SOCCER TEAM VR
        </p>
      </div>
      <div
        class="bg-grid-mobile w-[40rem] h-[15rem] relative cursor-pointer hover:opacity-50 hover:transition-opacity max-md:w-[38rem] max-md:h-[14rem] max-sm:w-[25rem] max-sm:h-[14rem]"
      >
        <p
          class="absolute bottom-8 left-8 text-5xl text-white w-6 max-sm:text-4xl max-sm:w-48"
        >
          THE GRID
        </p>
      </div>
      <div
        class="bg-above-mobile w-[40rem] h-[15rem] relative cursor-pointer hover:opacity-50 hover:transition-opacity max-md:w-[38rem] max-md:h-[14rem] max-sm:w-[25rem] max-sm:h-[14rem]"
      >
        <p
          class="absolute bottom-8 left-8 text-5xl text-white w-64 max-sm:text-4xl max-sm:w-48"
        >
          FROM UP ABOVE VR
        </p>
      </div>

      <div
        class="flex bg-pocket-mobile w-[40rem] h-[15rem] relative cursor-pointer hover:opacity-50 hover:transition-opacity max-md:w-[38rem] max-md:h-[14rem] max-sm:w-[25rem] max-sm:h-[14rem]"
      >
        <p
          class="absolute bottom-8 left-8 text-5xl text-white w-64 max-sm:text-4xl max-sm:w-48"
        >
          POCKET BOREALIS
        </p>
      </div>
      <div
        class="flex bg-curiosity-mobile w-[40rem] h-[15rem] relative cursor-pointer hover:opacity-50 hover:transition-opacity max-md:w-[38rem] max-md:h-[14rem] max-sm:w-[25rem] max-sm:h-[14rem]"
      >
        <p
          class="absolute bottom-8 left-8 text-5xl text-white w-64 max-sm:text-4xl max-sm:w-48"
        >
          THE CURIOSITY
        </p>
      </div>
      <div
        class="flex bg-fisheye-mobile w-[40rem] h-[15rem] relative cursor-pointer hover:opacity-50 hover:transition-opacity max-md:w-[38rem] max-md:h-[14rem] max-sm:w-[25rem] max-sm:h-[14rem]"
      >
        <p
          class="absolute bottom-8 left-8 text-5xl text-white w-64 max-sm:text-4xl max-sm:w-48"
        >
          MAKE IT FISHEYE
        </p>
      </div>
    </div>
    <div
      class="flex justify-center items-center px-14 py-5 tracking-[0.6rem] border-2 border-black text-lg font-semibold hover:bg-black hover:text-white cursor-pointer active:scale-95 md:hidden m-5"
    >
      SEE ALL
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import Navbar from "./components/navbar.vue";
import Footer from "./components/Footer.vue";
import useStore from "./store/store.js";
import { storeToRefs } from "pinia";

const store = useStore();

const { closeMenu } = storeToRefs(useStore());
</script>
