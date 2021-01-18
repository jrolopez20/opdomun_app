<template>
  <div class="full-width">
    <q-img src="images/app-promotion-background.jpg" style="max-height: 320px; min-height: 250px;">
      <div class="row full-width bg-transparent text-dark full-height">
        <div class="col"></div>
        <div class="col-auto flex flex-center">
          <div class="q-px-xs text-right">
            <div style="font-size: 1.6rem; font-weight: 600;">Descarga nuestra App!!!</div>
            <div class="q-pb-lg" style="font-size: 1.2rem;">Así Opdomun es más fácil</div>
            <div class="row items-end">
              <div class="col">
                <q-btn type="a"
                       href="https://play.google.com/store/apps/details?id=com.opdomun"
                       target="_blank"
                       rel="noopener noreferrer">
                  <q-img src="images/google_play.png" style="width: 125px"/>
                </q-btn>
              </div>
              <div class="col">
                <q-btn type="a"
                       href=""
                       target="_blank"
                       rel="noopener noreferrer">
                  <q-img src="images/app_store.png" style="width: 125px"/>
                </q-btn>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-sm-1 col-xs-12"></div>
      </div>
    </q-img>
  </div>
</template>

<script>
export default {
  name: 'AppPromotion'
}
</script>

<style lang="sass">
  .q-btn__wrapper
    padding: 0px
</style>
