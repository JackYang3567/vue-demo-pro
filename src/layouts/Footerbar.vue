
<template>
   <footer>
        <div class="container">
            <div class="wrap-logo">
                <h3>My Demo</h3>
            </div>
            <div class="wrap-social">
                <ul>
                    <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href=""><i class="fab fa-instagram"></i></a></li>
                    <li><a href=""><i class="fab fa-google"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube"></i></a></li>
                </ul>
            </div>
            <div class="footer-text">
                <p>Copyright © All Right <a href="/" title="bootstrapmb">Reserved</a></p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footerbar',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
