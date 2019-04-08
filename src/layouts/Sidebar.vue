
<template>
 <div class="sidebar-panel">
        <ul id="slide-out" class="collapsible side-nav">
            <li class="list-top">
                 <router-link to="/"><i class="fas fa-home"></i>Home </router-link>
            </li>
            <li>
                <div class="collapsible-header">
                    <i class="fas fa-building"></i>Properties<span><i class="fas fa-angle-right right"></i></span>
                </div>
                <div class="collapsible-body">
                    <ul>
                        <li> <router-link to="/properties">Properties </router-link></li>
                        <li> <router-link to="/properties-details">Properties Details </router-link></li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="collapsible-header">
                    <i class="fas fa-user"></i>Agent<span><i class="fas fa-angle-right right"></i></span>
                </div>
                <div class="collapsible-body">
                    <ul>
                        <li> <router-link to="/agent">Agent </router-link></li>
                        <li> <router-link to="/agent-details">Agent Details </router-link></li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="collapsible-header">
                    <i class="fas fa-rss"></i>Blog<span><i class="fas fa-angle-right right"></i></span>
                </div>
                <div class="collapsible-body">
                    <ul>
                        <li> <router-link to="/blog">Blog </router-link></li>
                        <li> <router-link to="/blog-single">Blog Single </router-link></li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="collapsible-header">
                    <i class="fas fa-user"></i>Account<span><i class="fas fa-angle-right right"></i></span>
                </div>
                <div class="collapsible-body">
                    <ul>
                        <li> <router-link to="/profile">Profile </router-link></li>
                        <li> <router-link to="/login">Login </router-link></li>
                        <li> <router-link to="/register">Register </router-link></li>
                        <li> <router-link to="/forgot-password">Forgot Password </router-link></li>
                        <li> <router-link to="/settings">Settings </router-link></li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="collapsible-header">
                    <i class="fas fa-clone"></i>Pages<span><i class="fas fa-angle-right right"></i></span>
                </div>
                <div class="collapsible-body">
                    <ul>
                        <li> <router-link to="/about">About </router-link></li>
                        <li> <router-link to="/features">Features </router-link></li>
                        <li> <router-link to="/services">Services </router-link></li>
                        <li> <router-link to="/gallery">Gallery </router-link></li>
                        <li> <router-link to="/portfolio">Portfolio </router-link></li>
                        <li> <router-link to="/coming-soon">Coming Soon </router-link></li>
                        <li> <router-link to="/page-not-found">Page Not Found </router-link></li>
                        <li> <router-link to="/faq">Faq </router-link></li>
                        <li> <router-link to="/testimonial">Testimonial </router-link></li>
                        <li> <router-link to="/products">Products List </router-link></li>
                    </ul>
                </div>
            </li>
            <li> <router-link to="/coming-soon"><i class="fas fa-clock"></i>Coming Soon </router-link></li>
            <li> <router-link to="/faq"><i class="fas fa-question"></i>Faq </router-link></li>
            <li> <router-link to="/contact"><i class="fas fa-envelope"></i>Contact </router-link></li>
            <li> <router-link to="/login"><i class="fas fa-sign-in-alt"></i>Login </router-link></li>
            <li> <router-link to="/register"><i class="fas fa-user-plus"></i>Register </router-link></li>
            <li class="bg-specific"> <router-link to="/submit-properties"><i class="fas fa-folder-plus"></i>Submit Properties </router-link></li>
            <li> <router-link to="/index"><i class="fas fa-sign-out-alt"></i>Log Out </router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
