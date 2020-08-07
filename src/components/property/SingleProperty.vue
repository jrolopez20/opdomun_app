<template>
  <article class="q-pa-sm">
    <q-card>
      <q-img src="images/test.jpg" />

      <q-card-section class="q-pb-sm">
        <q-btn
                fab
                color="primary"
                icon="la la-eye"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%);"
        />
        <div class="col text-h6 ellipsis">
          HAV, Diez de Octubre
        </div>
        <div class="text-grey-8 text-body2 row no-wrap ">
          <q-icon name="las la-map-marker" size="xs" />
          Calle Carlos 3ro #51 Apto A entre San Miguel y Gelabert
        </div>

        <div class="row text-body1">
          <div class="col-6 q-py-sm">
            <q-icon name="la la-crop" size="sm" /> 25m2
          </div>
          <div class="col-6 q-py-sm">
            <q-icon name="la la-bed" size="sm" /> 25m2
          </div>
          <div class="col-6 q-py-sm">
            <q-icon name="la la-calendar" size="sm" /> 25m2
          </div>
          <div class="col-6 q-py-sm">
            <q-icon name="la la-bath" size="sm" /> 25m2
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section class="q-py-sm text-h6">
        <div class="row">
          <div class="col-6 items-center">
            <q-icon name="la la-medal" size="sm" /> 24.7 Op
          </div>
          <div class="col-6 text-right">
            45 000 CUC
          </div>
        </div>
      </q-card-section>
    </q-card>
  </article>
</template>

<script>
export default {
  name: 'SingleProperty'
}
</script>
