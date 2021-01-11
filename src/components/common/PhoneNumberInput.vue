<template>
  <VuePhoneNumberInput
          no-example
          v-model="phoneNumber"
          @update="onPhoneUpdate"
          default-country-code="CU"
          :translations="{
            countrySelectorLabel: 'Código país',
            phoneNumberLabel: this.$t('common.labels.phone')
          }"
          :required="required"
          error-color="red"
          no-validator-state
          :countries-height="35"
          :border-radius="20"
  />
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

export default {
  name: 'PhoneNumberInput',
  props: ['telephone', 'disabled', 'required'],
  components: {
    VuePhoneNumberInput
  },
  watch: {
    telephone: 'setPhoneNumber'
  },
  data () {
    return {
      phoneNumber: null
    }
  },
  methods: {
    onPhoneUpdate (payload) {
      this.$emit('update', payload.formattedNumber || null)
    },
    setPhoneNumber (value) {
      this.phoneNumber = value
    }
  }
}
</script>
