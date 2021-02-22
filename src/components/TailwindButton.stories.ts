import Button from './TailwindButton.vue';

export default {
  title: 'Components/StyledButton'
};

export const Default = () => ({
  components: { Button },
  template: '<Button />'
});

export const BlueButton = () => ({
  components: { Button },
  template: '<Button label="Blue" color="blue" />'
});
