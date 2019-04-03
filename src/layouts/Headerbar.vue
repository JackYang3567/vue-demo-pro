
<template>
    <div class="navbar">
        <div class="container">
            <div class="row">
                <div class="col s3">
                    <div class="content-left">
                        <router-link to="/#slide-out" data-activates="slide-out" class="sidebar"><i class="fas fa-bars"></i></router-link>
                    </div>
                </div>
                <div class="col s6">
                    <div class="content-center">
                        <router-link to="/"><h1>UVEN</h1></router-link>
                    </div>
                </div>
                <div class="col s3">
                    <div class="content-right">
                        <router-link to="/#modal" class="modal-trigger">
                            <i class="fas fa-user"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Headerbar',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
