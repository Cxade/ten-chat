<script setup lang="ts">
import { storeToRefs } from "pinia";

const formStore = useFormStore();
const { email, password } = storeToRefs(formStore);

const fieldsFilled = computed(() =>
  formStore.email && formStore.password ? true : false
);

function contactForm() {
  $fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      email: formStore.email,
      password: formStore.password,
      expiresInMins: 30,
    },
  });
}
const login = () => {
  contactForm();
  formStore.clearPassword();
};
</script>
<template>
  <div class="max-w-[1440px] h-[1024px] my-0 mx-auto">
    <div class="w-full h-full rounded-[50px] flex-row flex overflow-hidden">
      <div class="w-1/2 h-full bg-[#F5F8FF] justify-center items-center flex">
        <div
          class="justify-center items-center w-[477px] h-[384px] px-[12px] flex-col flex">
          <h2
            class="text-[#09090B] text-[40px] font-bold font-['Montserrat'] leading-[24px] h-[38px] mb-[25px] text-nowrap">
            Login to your Account
          </h2>
          <div
            class="h-[25px] mb-[25px] w-full flex justify-center items-center relative">
            <div class="h-0 w-full border border-zinc-500"></div>
            <p
              class="text-[15px] w-[213px] text-center font-medium font-['Montserrat'] text-[#71717A] bg-[#F5F8FF] leading-[24px] absolute">
              with email
            </p>
          </div>
          <form action="" class="flex flex-col w-full">
            <FormComp
              inputType="email"
              nameAndId="email"
              placeholder="Email"
              v-model="email"
              class="w-full mb-[10px]">
              <SvgEmail
            /></FormComp>
            <FormComp
              inputType="password"
              nameAndId="password"
              placeholder="Password"
              v-model="password"
              :eye="true"
              class="w-full mb-[25px]">
              <SvgShield
            /></FormComp>
            <input
              type="submit"
              value="LOG IN"
              @click.prevent="login"
              :disabled="!fieldsFilled"
              class="w-full h-[64px] mb-[20px] bg-[#8098F9] rounded-[10px] text-[20px] text-white hover:opacity-70 cursor-pointer font-['Inter'] font-bold disabled:opacity-75 disabled:cursor-default" />
          </form>
          <p
            class="text-[16px] font-[16px] font-['Montserrat'] font-regular leading-[24px] text-[#71717A]">
            Don't have account?
            <NuxtLink
              to="/create"
              class="text-[#8098F9] font-bold font-['Montserrat']"
              >Create an account</NuxtLink
            >
          </p>
        </div>
      </div>
      <div class="w-1/2 h-full">
        <img
          src="@/assets/loginPage.png"
          alt="1"
          class="w-auto h-full object-cover" />
      </div>
    </div>
  </div>
</template>
