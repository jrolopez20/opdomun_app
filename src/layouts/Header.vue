<template>
    <div class="full-width bg-header" style="height: 250px;">
        <div class="row items-end full-height full-width q-px-lg q-pb-xl text-white">
            <div class="col">
                <div class="text-h4 text-white text-left full-width">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
</style>
