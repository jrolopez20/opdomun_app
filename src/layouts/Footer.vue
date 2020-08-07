<template>
    <footer class="bg-dark text-grey-4">
        <div class="q-pa-xl row wrap bg-footer">
           <div class="col-sm-4 col-12 q-pa-sm">
               <div class="text-h5 q-pb-lg">
                   <q-img
                           src="images/logo_white.png"
                           style="max-width: 165px"
                   />
               </div>
               <p class="text-body2">Plataforma para la publicación de anuncios clasificados sobre viviendas.</p>
               <div class="q-gutter-md text-center">
                   <q-btn outline round icon="la la-facebook" />
                   <q-btn outline round icon="la la-twitter" />
                   <q-btn outline round icon="la la-instagram" />
               </div>
           </div>
           <div class="col-sm-4 col-12 q-pa-sm">
               <div class="text-h5 q-pb-lg text-uppercase">CONTACTO</div>
               <div class="col-auto text-body2 row no-wrap items-center">
                   <q-icon name="phone" class="q-mr-sm"/> (+53) 58859033
               </div>
               <div class="col-auto text-body2 row no-wrap items-center">
                   <q-icon name="email" class="q-mr-sm"/> info@opdomun.com
               </div>
               <div class="col-auto text-body2 row no-wrap items-center">
                   <q-icon name="place" class="q-mr-sm"/> Czda. Gral Betancourt, Matanzas, Cuba.
               </div>
           </div>
           <div class="col-sm-4 col-12 q-pa-sm">
               <div class="text-h5 q-pb-lg text-uppercase">Suscríbete</div>
               <p class="text-body2">Recibe notificaciones, noticias, estadísticas así como ofertas especiales.</p>
               <q-btn to="/subscription" outline label="Suscríbete ahora" />
           </div>
       </div>
        <div class="copy-right q-py-md text-center text-body2">
            Copyright @ 2020 Opdomun Todos los derechos reservados
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
.bg-footer
    background: linear-gradient(rgba(25, 24, 29, 0.8), rgba(25, 24, 29, 0.8)), url(~assets/images/footer.jpg)
    background-position: center center !important
    background-size: cover !important
    background-repeat: no-repeat !important
</style>
