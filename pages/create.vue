<script setup lang="ts">
const router = useRouter();
const formStore = useFormStore();
const { username, email, password, confirmPassword } = storeToRefs(formStore);

const confirmTerms = ref(false);
const terms = ref(false);

const fieldsFilled = computed(() =>
  formStore.username &&
  formStore.email &&
  formStore.password &&
  formStore.confirmPassword &&
  confirmTerms.value &&
  passwordsMatch
    ? true
    : false
);
const passwordsMatch = computed(() =>
  formStore.password === formStore.confirmPassword ? true : false
);

const login = () => {
  contactForm();
  formStore.clearPassword();
  router.push("/otp");
};
const backToLogin = () => {
  if (confirm("Все данные могут быть потеряны")) {
    router.push("/");
    formStore.clearAll();
  }
};

function contactForm() {
  $fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      username: formStore.username,
      password: formStore.password,
      expiresInMins: 30,
    },
  });
}
</script>
<template>
  <div class="max-w-[1440px] h-[1024px] my-0 mx-auto relative">
    <div class="w-full h-full rounded-[50px] flex-row flex overflow-hidden">
      <div class="w-1/2 h-full bg-[#F5F8FF] justify-center items-center flex">
        <div
          class="justify-center items-center w-[477px] h-[384px] px-[12px] flex-col flex">
          <div class="w-full text-left mb-[25px]">
            <h2
              class="text-[#09090B] text-[40px] text-left font-bold font-['Montserrat'] leading-[24px] h-[38px]">
              Create your account
            </h2>
            <p
              class="text-[20px] w-[213px] text-left font-regular font-['Montserrat'] text-[#71717A] bg-[#F5F8FF] leading-[24px]">
              Unlock all Features!
            </p>
          </div>

          <form action="" class="flex flex-col w-full">
            <FormComp
              inputType="text"
              nameAndId="text"
              placeholder="Username"
              v-model="username"
              class="w-full mb-[10px]">
              <SvgPerson
            /></FormComp>
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
              class="w-full mb-[10px]">
              <SvgShield
            /></FormComp>
            <FormComp
              inputType="password"
              nameAndId="passwordConfirm"
              placeholder="Confirm Password"
              v-model="confirmPassword"
              :eye="true"
              class="w-full mb-[10px]"
              :class="{ notMatch: !passwordsMatch }">
              <SvgShield
            /></FormComp>
            <div
              class="flex mb-[25px] font-['Montserrat'] font-regular text-[#71717A]">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                v-model="confirmTerms"
                class="custom-checkbox" />
              <label for="terms">&nbsp;Accept&nbsp;</label>
              <p
                @click="terms = true"
                class="text-[#8098F9] font-medium font-['Montserrat'] cursor-pointer">
                terms and conditions
              </p>
            </div>

            <input
              type="submit"
              value="SIGN UP"
              :disabled="!fieldsFilled"
              @click.prevent="login"
              class="w-full h-[64px] mb-[20px] bg-[#8098F9] rounded-[10px] text-[20px] text-white hover:opacity-70 cursor-pointer font-['Inter'] font-bold disabled:opacity-75 disabled:cursor-default" />
          </form>
          <p
            class="text-[16px] font-[16px] font-['Montserrat'] font-regular leading-[24px] text-[#71717A]">
            You have account?
            <NuxtLink
              to="/"
              @click="backToLogin"
              class="text-[#8098F9] font-bold"
              >Login now</NuxtLink
            >
          </p>
        </div>
      </div>
      <div class="w-1/2 h-full">
        <img
          src="@/assets/createPage.png"
          alt="1"
          class="w-auto h-full object-cover" />
      </div>
    </div>
    <div
      v-if="terms"
      class="absolute w-1/2 h-1/2 top-1/4 left-1/4 bg-[#8098F9]/90 text-[32px] text-center text-[white]">
      <p>Some terms</p>
      <button @click="terms = false" class="absolute top-[5px] right-[5px]">
        &#10006;
      </button>
    </div>
  </div>
</template>
<style scoped>
.notMatch {
  outline: 1px solid #ed684b;
  border-radius: 10px;
}
.custom-checkbox {
  position: absolute;
  z-index: -1;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid #8098f9;

  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgb(245 248 255 / 0%);
  cursor: pointer;
}

.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: #b3d7ff;
}

.custom-checkbox:checked + label::before {
  border-color: #8098f9;
  background-color: #8098f9;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
</style>
