<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 text-center">{{ office.provincia.title }}</div>
    </q-card-section>

    <q-card-section class="q-py-none">
      <div class="row">
        <div class="col">
          <q-icon name="las la-map-marker" size="sm" /> Ubicación
        </div>
        <div class="col-auto text-right text-weight-medium">{{ office.provincia.cod }} {{ office.provincia.title }}</div>
      </div>
      <q-separator class="q-my-sm"/>
      <div class="row">
        <div class="col">
          <q-icon name="las la-user" size="sm" /> Coordinador
        </div>
        <div class="col-auto text-right text-weight-medium">{{ office.users.length ? office.users[0].fullname : '' }}</div>
      </div>
      <q-separator class="q-my-sm"/>
    </q-card-section>

    <q-card-actions class="row justify-around q-px-md q-pt-none">
      <q-btn flat round icon="las la-phone" size="17px" color="primary"
             type="a" :href="`tel:${office.users.length ? office.users[0].telephone : ''}`"
      />
      <q-btn flat round icon="las la-comment-alt" size="17px" color="primary"
             type="a" :href="`tel:${office.users.length ? office.users[0].telephone : ''}`"
      />
      <q-btn flat round icon="las la-envelope" size="17px" color="primary"
             type="a" :href="`mailto:${office.users.length ? office.users[0].email : ''}`"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'SingleOffice',
  props: ['office']
}
</script>
