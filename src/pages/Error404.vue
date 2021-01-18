<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <img
              src="images/logo-icon-white.png"
              style="width:120px;border:1px solid white;border-radius:50%;padding:1px 2px 2px 2px;"
      />
      <div style="font-size: 27vh">
        404
      </div>

      <div class="text-h4" style="opacity:.4">
        Página no encontrada...
      </div>

      <q-btn
              no-caps rounded outline
              class="q-mt-lg q-px-sm"
              color="white"
              to="/"
              label="Regresar a la página de inicio"
      />
    </div>
  </div>
</template>

<script >
export default {
  name: 'Error404'
}
</script>
