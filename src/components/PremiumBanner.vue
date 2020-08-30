<template>
    <q-banner rounded class="bg-grey-3 text-center">
        <div class="text-h6 text-primary">Si quieres vender más rápido tu casa te recomendamos usar un Anuncio Premium
        </div>
        <template v-slot:action>
            <div class="full-width q-pa-sm">
                <q-btn no-caps unelevated
                       to="/oficinas"
                       color="primary"
                       label="Contacta con nuestras oficinas"
                />
            </div>
        </template>
    </q-banner>
</template>

<script>
export default {
  name: 'PremiumBanner'
}
</script>
