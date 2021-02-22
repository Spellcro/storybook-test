<template>
  <div>
    <button>
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ type: String, default: 'Click!' }) label!: string;
}
</script>

<style scoped>
div {
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

button {
  border-radius: 0.5rem;
  color: black;
  background-color: #f0f0f0;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  width: 12rem;
}
</style>
