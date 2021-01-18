<template>
  <div class="full-width">
<!--    <q-parallax-->
<!--            src="images/app-promotion-background.jpg" :height="340" :speed="0.8"-->
<!--    >-->
<!--      <div class="row full-width bg-transparent text-dark full-height">-->
<!--        <div class="col"></div>-->
<!--        <div class="col-auto flex flex-center">-->
<!--          <div class="q-px-xs">-->
<!--            <div style="font-size: 1.8rem; font-weight: 600;">Descarga nuestra App!!!</div>-->
<!--            <div class="q-pb-lg" style="font-size: 1.2rem;">Así Opdomun es más fácil</div>-->
<!--            <div class="q-gutter-sm row items-start">-->
<!--              <q-btn type="a"-->
<!--                     href="https://play.google.com/store/apps/details?id=com.opdomun"-->
<!--                     target="_blank"-->
<!--                     rel="noopener noreferrer">-->
<!--                <q-img src="images/google_play.png" style="width: 150px"/>-->
<!--              </q-btn>-->
<!--              &lt;!&ndash;              <q-btn type="a"&ndash;&gt;-->
<!--              &lt;!&ndash;                     href=""&ndash;&gt;-->
<!--              &lt;!&ndash;                     target="_blank"&ndash;&gt;-->
<!--              &lt;!&ndash;                     rel="noopener noreferrer">&ndash;&gt;-->
<!--              &lt;!&ndash;                <q-img src="images/app_store.png" style="width: 150px"/>&ndash;&gt;-->
<!--              &lt;!&ndash;              </q-btn>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col col-xs-1"></div>-->
<!--      </div>-->
<!--    </q-parallax>-->

    <q-img src="images/app-promotion-background.jpg" style="max-height: 320px; min-height: 250px;">
      <div class="row full-width bg-transparent text-dark full-height">
        <div class="col"></div>
        <div class="col-auto flex flex-center">
          <div class="q-px-xs">
            <div style="font-size: 1.8rem; font-weight: 600;">Descarga nuestra App!!!</div>
            <div class="q-pb-lg" style="font-size: 1.2rem;">Así Opdomun es más fácil</div>
            <div class="q-gutter-sm row items-start">
              <q-btn type="a"
                     href="https://play.google.com/store/apps/details?id=com.opdomun"
                     target="_blank"
                     rel="noopener noreferrer">
                <q-img src="images/google_play.png" style="width: 150px"/>
              </q-btn>
<!--              <q-btn type="a"-->
<!--                     href=""-->
<!--                     target="_blank"-->
<!--                     rel="noopener noreferrer">-->
<!--                <q-img src="images/app_store.png" style="width: 150px"/>-->
<!--              </q-btn>-->
            </div>
          </div>
        </div>
        <div class="col col-xs-1"></div>
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
