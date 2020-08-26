<template>
  <q-card>
    <q-img :src="'images/offices/'+office.provincia.cod+'.jpg'" style="height: 200px;"/>

    <q-card-section class="q-pb-sm">
      <div class="col text-h6 ellipsis">
        {{ office.provincia.title }}
      </div>
      <span class="text-grey-8 text-body2 ">
        <q-icon name="las la-user" size="sm"/>
        {{ office.users.length ? office.users[0].fullname : '' }}
      </span>

      <div class="text-body2">
        <a :href="`tel:${office.users[0].telephone}`" class="block text-grey-8" style="text-decoration: none;">
          <q-icon name="las la-phone" size="sm"/> {{ office.users[0].telephone }}
        </a>
        <a :href="`mailto:${office.users[0].email}`" class="block text-grey-8" style="text-decoration: none;">
          <q-icon name="las la-envelope" size="sm"/> {{ office.users[0].email}}
        </a>
      </div>
    </q-card-section>

<!--    <q-separator inset/>-->

<!--    <q-card-actions class="justify-around q-px-md q-py-sm" v-if="office.users.length">-->
<!--      <a :href="`tel:${office.users[0].telephone}`" style="text-decoration: none;">-->
<!--        <q-btn unelevated  color="primary" icon="las la-phone" :label="office.users[0].telephone"/>-->
<!--      </a>-->
<!--      <a :href="`mailto:${office.users[0].email}`" style="text-decoration: none;">-->
<!--        <q-btn unelevated round color="primary" icon="las la-envelope"/>-->
<!--      </a>-->
<!--    </q-card-actions>-->
  </q-card>
</template>

<script>
export default {
  name: 'SingleOffice',
  props: ['office']
}
</script>
