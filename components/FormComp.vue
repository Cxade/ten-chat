<script setup lang="ts">
const props = defineProps({
  inputType: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
  svgPath: String,
  nameAndId: String,
  placeholder: String,
  eye: Boolean,
});
const type = ref(props.inputType);
function changeInputType() {
  type.value = type.value === "password" ? "text" : "password";
  changeActiveEye();
}
const activeEye = ref(false);
function changeActiveEye() {
  activeEye.value = !activeEye.value;
}
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="w-full relative">
    <div class="absolute w-[30px] h-[30px] left-[10px] top-[17px]">
      <slot></slot>
    </div>
    <input
      :type="type"
      :name="nameAndId"
      :id="nameAndId"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      required
      class="py-[10px] px-[50px] h-[64px] text-[18px] bg-[#8098F9]/10 border-[#8098F9]/50 focus:outline-none focus:border-[#8098F9] border-2 border-solid rounded-[10px] w-full" />
    <div
      v-if="eye"
      @click="changeInputType()"
      class="absolute w-[30px] h-[30px] right-[20px] top-[17px] cursor-pointer select-none">
      <svg
        :class="{ activeEye: activeEye }"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.0479 21.0704C28.2399 18.2268 30 15 30 15C30 15 24.375 4.6875 15 4.6875C13.0962 4.6875 11.347 5.11279 9.76813 5.79063L11.2135 7.23601C12.3934 6.8122 13.6583 6.5625 15 6.5625C18.9738 6.5625 22.2731 8.75284 24.6898 11.1696C25.8819 12.3617 26.8085 13.5599 27.4364 14.4608C27.5727 14.6564 27.6945 14.8373 27.8012 15C27.6945 15.1627 27.5727 15.3436 27.4364 15.5392C26.8085 16.4401 25.8819 17.6383 24.6898 18.8304C24.3808 19.1395 24.0573 19.4448 23.7198 19.7423L25.0479 21.0704Z"
          fill="#2D31A6"
          fill-opacity="0.2" />
        <path
          d="M21.1828 17.2053C21.4286 16.516 21.5625 15.7737 21.5625 15C21.5625 11.3756 18.6244 8.4375 15 8.4375C14.2263 8.4375 13.484 8.57138 12.7947 8.81723L14.3366 10.3591C14.5533 10.3284 14.7748 10.3125 15 10.3125C17.5888 10.3125 19.6875 12.4112 19.6875 15C19.6875 15.2252 19.6716 15.4467 19.6409 15.6634L21.1828 17.2053Z"
          fill="#2D31A6"
          fill-opacity="0.2" />
        <path
          d="M15.6635 19.6409L17.2053 21.1828C16.5161 21.4286 15.7737 21.5625 15 21.5625C11.3756 21.5625 8.4375 18.6244 8.4375 15C8.4375 14.2263 8.57138 13.4839 8.81724 12.7947L10.3591 14.3365C10.3284 14.5533 10.3125 14.7748 10.3125 15C10.3125 17.5888 12.4112 19.6875 15 19.6875C15.2252 19.6875 15.4467 19.6716 15.6635 19.6409Z"
          fill="#2D31A6"
          fill-opacity="0.2" />
        <path
          d="M6.2802 10.2576C5.94273 10.5552 5.61925 10.8605 5.3102 11.1696C4.11808 12.3617 3.19155 13.5599 2.56364 14.4608C2.42726 14.6564 2.30555 14.8373 2.19881 15C2.30555 15.1627 2.42726 15.3436 2.56364 15.5392C3.19155 16.4401 4.11808 17.6383 5.3102 18.8304C7.72693 21.2472 11.0262 23.4375 15 23.4375C16.3418 23.4375 17.6066 23.1878 18.7865 22.764L20.2319 24.2094C18.6531 24.8872 16.9039 25.3125 15 25.3125C5.625 25.3125 0 15 0 15C0 15 1.76009 11.7732 4.95209 8.92954L6.2802 10.2576Z"
          fill="#2D31A6"
          fill-opacity="0.2" />
        <path
          d="M25.5871 26.9129L3.08709 4.41291L4.41291 3.08709L26.9129 25.5871L25.5871 26.9129Z"
          fill="#2D31A6"
          fill-opacity="0.2" />
      </svg>
    </div>
  </div>
</template>
<style scoped>
.activeEye path {
  fill: #8098f9;
  fill-opacity: 1;
}
input::placeholder {
  color: rgba(45.37, 49.37, 165.63, 0.2);
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}
</style>
