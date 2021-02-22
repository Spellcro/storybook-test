<template>
  <div class="w-full my-2">
    <button
      class="rounded-full text-white text-xl py-2 px-4 focus:outline-none focus:ring focus:ring-offset-2 w-48"
      :class="colors"
    >
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TailwindButton extends Vue {
  @Prop({ type: String, default: 'Click!' }) label!: string;
  @Prop({ type: String, default: 'red' }) color!: string;
  @Prop({ type: String, default: 'round' }) shape!: 'round' | 'square';

  get colors() {
    return [
      `focus:ring-${this.color}-300`,
      `bg-${this.color}-600`,
      { 'rounded-lg': this.shape === 'square' },
      { 'rounded-full': this.shape === 'round' }
    ];
  }
}
</script>
