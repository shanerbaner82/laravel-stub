<template>
  <div>
    <header class="bg-gray-900 lg:hidden fixed w-full z-10">
      <div class="flex items-center justify-between px-4 py-3">
        <div>
          <Logo class="h-10" />
        </div>
        <div>
          <button
            type="button"
            class="block text-gray-500 focus:text-white focus:outline-none hover:text-white"
            @click="open = !open"
          >
            <Hamburger />
          </button>
        </div>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="px-2 pt-2 pb-4"
        @click="open = false"
      >
          <router-link
              class="block text-white font-semibold rounded hover:bg-gray-800 px-2"
              :to="'/app/Whatever'"
          >
              Whatever
          </router-link>
          <router-link
              class="block text-white font-semibold rounded hover:bg-gray-800 px-2"
              :to="'/app/You'"
          >
              You
          </router-link>
          <router-link
              class="block text-white font-semibold rounded hover:bg-gray-800 px-2"
              :to="'/app/Want'"
          >
              Want
          </router-link>
      </div>
      <div
        class="h-20 block bg-gray-400 w-full flex justify-between items-center px-4 shadow-md z-10"
      >
        <Search />
        <div class="flex">
          <DropdownOptions :user="JSON.parse(user)" />
        </div>
      </div>
    </header>
    <div class="flex w-full h-screen hidden lg:flex">
      <header class="bg-gray-800  h-screen" style="width:300px;">
        <div class="w-full">
          <div class="bg-gray-900 px-4 py-5 pr-10 w-full">
            <Logo class="h-16" />
          </div>
          <div class="text-lg lg-nav mt-4 ml-4">
              <router-link
                  class="block text-white font-semibold rounded hover:bg-gray-800 px-2"
                  :to="'/app/Whatever'"
              >
                  Whatever
              </router-link>
              <router-link
                  class="block text-white font-semibold rounded hover:bg-gray-800 px-2"
                  :to="'/app/You'"
              >
                  You
              </router-link>
              <router-link
                  class="block text-white font-semibold rounded hover:bg-gray-800 px-2"
                  :to="'/app/Want'"
              >
                  Want
              </router-link>
          </div>
        </div>
      </header>
      <div class="flex flex-col w-full">
        <div
          class="h-20 hidden lg:flex bg-gray-400 w-full justify-between items-center px-4 shadow-md py-4"
        >
          <Search />
          <div class="flex">
            <DropdownOptions :user="JSON.parse(user)" />
          </div>
        </div>
        <div class="flex-auto w-full h-full overflow-y-scroll">
            <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hamburger from '../Icons/Hamburger';
import Logo from '../Icons/Logo';
import Search from '../Search/Search';
import DropdownOptions from '../Account/DropdownOptions';
export default {
  name: 'Navbar',
  components: { Hamburger, Logo, Search, DropdownOptions },
  props: ['user'],
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped></style>
