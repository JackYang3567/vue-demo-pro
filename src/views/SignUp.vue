<template>
  <div class="register segments-page2">
        <div class="container">
            <div class="section-title">
                <h3>Sign Up</h3>
            </div>
            <form>
                <input type="text" placeholder="Full Name">
                <input type="text" placeholder="Username">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="password">
                <input type="password" placeholder="Retype Password">
                <div class="info">
                    <ul>
                        <li>
                            Have an account?
                            <a href="/signin">Sign In</a>
                        </li>
                    </ul>
                </div>
                <button class="button"><i class="fab fa-telegram-plane"></i>Sign Up</button>
            </form>
        </div>
    </div>

</template>


<style scoped>

  .register {
    min-height: 600px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>

