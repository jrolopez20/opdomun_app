<template>
  <q-card>
    <q-img src="images/test.jpg"/>

    <q-card-section class="q-pb-sm">
      <div class="col text-h6 ellipsis">
        {{ office.provincia }}
      </div>
      <div class="text-grey-8 text-body2 row no-wrap ">
        <q-icon name="las la-map-marker" size="xs"/>
        {{ office.address }}
      </div>

    </q-card-section>

    <q-separator inset/>

    <q-card-actions class="justify-around q-px-md q-py-sm">
      <a :href="`tel:${office.phone}`" style="text-decoration: none;">
        <q-btn unelevated round color="primary" icon="lab la-whatsapp"/>
      </a>
      <a :href="`tel:${office.phone}`" style="text-decoration: none;">
        <q-btn unelevated round color="primary" icon="las la-phone"/>
      </a>
      <a :href="`mailto:${office.email}`" style="text-decoration: none;">
        <q-btn unelevated round color="primary" icon="las la-envelope"/>
      </a>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'SingleOffice',
  props: ['office']
}
</script>
