<template>
    <footer class="bg-dark text-grey-4">
        <div class="q-pa-xl row wrap bg-footer">
            <div class="col-12 q-pa-sm">
                <div class="q-gutter-md text-center">
                    <q-btn outline round icon="la la-facebook" type="a"
                           href="https://www.facebook.com/Opdomun-448269709283501/?ref=bookmarks" target="_blank"
                           rel="noopener noreferrer"/>
                    <q-btn outline round icon="las la-phone" to="/oficinas"/>
                    <q-btn outline round icon="las la-envelope"
                           type="a" href="mailto:info@opdomun.com"/>
                </div>
            </div>
<!--            <div class="col-12 q-p">-->
<!--                <q-separator class="q-my-sm q-mx-md" dark/>-->
<!--            </div>-->
            <div class="col-12 copy-right q-py-md text-center text-body2">
                Copyright @ 2021 Opdomun Todos los derechos reservados
                <p class="text-caption q-mb-none q-pb-none">
                    <router-link to="/politicas-de-privacidad" class="text-white" style="text-decoration: none">
                        Politíca de privacidad
                    </router-link> |
                    <router-link to="/condiciones-de-uso" class="text-white" style="text-decoration: none">
                        Condiciones de uso
                    </router-link>
                </p>
            </div>
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
