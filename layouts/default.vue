<template>
  <div>
    <nav>
      <div class="logo">
          <img src="/img/logo.png" alt="">
      </div>
      <div class="menu">
        <ul>          
          <iamLoginMenu />    
        </ul>
      </div>
    </nav>      
      <slot />
      <footer>
          <div class="cr">
              <p>&copy; Copyright 2023 | Eling Tugas</p>
              <p class="sec">Made by <a href="#">Tim Serdadu Jawir</a></p>
          </div>
      </footer>
  </div>
</template>

<script setup>
const showMenu = ref(false);

/**
 * @Desc Toggle Nuxt IAM docs menu
 */
 async function toggleDocsMenu() {
  showMenu.value = !showMenu.value;   
}
</script>
