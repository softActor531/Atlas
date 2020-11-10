export const ValidateInputMixin = {
  methods: {
    handleChange: function(parent, variable_name, event) {
      this.$emit('handleChange', { parent, variable_name, event });
    }
  }
}