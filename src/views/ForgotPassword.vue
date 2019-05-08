<template>
    <div class="forgot-password segments-page">
        <div class="container">
            <div class="content">
                <div class="icon">
                    <i class="fas fa-unlock-alt"></i>
                </div>
                <h4>Reset your password</h4>
                <p>Consectetur adipisicing elit. Odit, tempore.</p>
                <form>
                    <input type="text" placeholder="Your Email">
                    <button class="button waves-effect waves-light">Reset Password</button>
                </form>
            </div>
        </div>
    </div>

</template>


<style scoped>
  .forgot-password {
    min-height: 600px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
