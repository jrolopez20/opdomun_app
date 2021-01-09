<template>
    <footer class="bg-dark text-grey-4">
        <div class="q-pa-xl row wrap bg-footer">
            <div class="col-12 text-center q-pb-lg">
                <q-btn outline no-caps
                       type="a"
                       href="https://www.apklis.cu/application/com.opdomun"
                       target="_blank"
                       rel="noopener noreferrer"
                >
                    <div class="row items-center no-wrap q-pa-sm">
                        <q-icon left name="android" style="font-size: 36px;"/>
                        <div class="text-left">
                            <div style="font-size: 11px;line-height: 12px">DISPONIBLE EN</div>
                            <div style="font-size: 22px;line-height: 22px;">Apklis</div>
                        </div>
                    </div>
                </q-btn>
            </div>
            <div class="col-sm-4 col-12 q-pa-sm">
                <div class="text-h5 q-pb-lg">
                    <q-img
                            src="images/logo_white.png"
                            style="max-width: 165px"
                    />
                </div>
                <p class="text-body2">Plataforma para la publicación de anuncios clasificados sobre viviendas.</p>
                <div class="q-gutter-md text-center">
                    <q-btn outline round icon="la la-facebook" type="a"
                           href="https://www.facebook.com/Opdomun-448269709283501/?ref=bookmarks" target="_blank"
                           rel="noopener noreferrer"/>
                    <q-btn outline round icon="la la-twitter" type="a" href="https://www.twitter.com/opdomun"
                           target="_blank" rel="noopener noreferrer"/>
                    <q-btn outline round icon="la la-instagram" type="a" href="https://www.instagram.com/opdomun"
                           target="_blank" rel="noopener noreferrer"/>
                </div>
            </div>
            <div class="col-sm-4 col-12 q-pa-sm">
                <div class="text-h5 q-pb-lg text-uppercase">CONTACTO</div>
                <p class="text-body2">Puede contactarnos a través de nuestras oficinas.</p>
                <q-btn no-caps rounded to="/oficinas" outline label="Ver oficinas"/>
            </div>
            <div class="col-sm-4 col-12 q-pa-sm">
                <div class="text-h5 q-pb-lg text-uppercase">Calcula el impuesto</div>
                <p class="text-body2">Puedes calcular el impuesto a pagar al estado. Para más información consulte aquí
                    <a href="https://www.gacetaoficial.gob.cu/es/decreto-ley-343-de-2016-de-consejo-de-estado"
                       target="_blank"
                       class="text-primary"
                       style="text-decoration: none;"
                       title="Visitar la Gaceta Oficial">
                        Gaceta Oficial
                    </a>.
                </p>
                <q-btn no-caps rounded to="/calcular-impuesto" outline label="Calcular impuesto"/>
            </div>
        </div>
        <div class="copy-right q-py-md text-center text-body2">
            Copyright @ 2019 Opdomun Todos los derechos reservados
            <p class="text-caption q-mb-none q-pb-none">
                <router-link to="/politicas-de-privacidad" class="text-white" style="text-decoration: none">
                    Politíca de privacidad
                </router-link>
                <router-link to="/condiciones-de-uso" class="text-white" style="text-decoration: none">
                    Condiciones de uso
                </router-link>
            </p>
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
