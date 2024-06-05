<script setup lang="ts">
const router = useRouter();
const formStore = useFormStore();

const moveToNext = (input) => {
  if (input.value.length == input.maxLength) {
    const nextInput = input.nextElementSibling;
    if (nextInput) {
      nextInput.focus();
    }
  }
};

const moveToPrev = (input) => {
  if (event.key === "Backspace" && input.value.length == 0) {
    const prevInput = input.previousElementSibling;
    if (prevInput) {
      prevInput.focus();
    }
  }
};
const modal = () => {
  if (confirm("Все данные могут быть потеряны")) {
    router.push("/create");
    formStore.clearPassword();
  }
};
</script>
<template>
  <div class="max-w-[1440px] h-[1024px] my-0 mx-auto">
    <div class="w-full h-full rounded-[50px] flex-row flex overflow-hidden">
      <div class="w-1/2 h-full bg-[#F5F8FF] justify-center items-center flex">
        <div
          class="justify-center items-center w-[484px] h-[269px] flex-col flex">
          <div class="w-full text-left mb-[25px]">
            <h2
              class="text-[#09090B] text-[40px] text-left font-bold font-['Montserrat'] leading-[24px] h-[38px]">
              Enter OTP
            </h2>
            <p
              class="text-[20px] text-left font-regular font-['Montserrat'] text-[#71717A] bg-[#F5F8FF] leading-[24px] h-[30px]">
              Sent OTP on
              <span
                class="font-semibold text-[16px] leading-[24px] text-[#8098F9]"
                >{{ formStore.email }}</span
              >
            </p>
            <p @click="modal" class="text-[#8098F9] font-bold cursor-pointer">
              Change email
            </p>
          </div>

          <form action="" class="flex flex-col items-center w-full">
            <div class="mb-[24px]">
              <label class="gap-[20px] flex">
                <input
                  v-for="n in 6"
                  :key="n"
                  :name="'num' + n"
                  type="number"
                  pattern="[0-9]{1}"
                  placeholder="-"
                  maxlength="1"
                  @input="moveToNext($event.target)"
                  @keydown="moveToPrev($event.target)"
                  aria-label="1-digit prefix"
                  class="h-[16px] w-[16px]" />
              </label>
            </div>
            <input
              type="submit"
              value="SUBMIT"
              class="w-[453px] h-[64px] mb-[20px] bg-[#8098F9] rounded-[10px] text-[20px] text-white hover:opacity-70 cursor-pointer font-['Inter'] font-bold" />
          </form>
        </div>
      </div>
      <div class="w-1/2 h-full">
        <img
          src="@/assets/otpPage.png"
          alt="1"
          class="w-auto h-full object-cover" />
      </div>
    </div>
  </div>
</template>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  appearance: textfield;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  font-size: 32px;
  line-height: 64px;
  width: 64px;
  height: 64px;
  background-color: hsla(228, 91%, 74%, 0.1);
  border: 2px solid rgba(128, 152, 249, 0.5);
  border-color: rgba(128, 152, 249, 0.5);
}
input[type="number"]:focus {
  outline: none;
  border: 2px solid #8098f9;
}
</style>
