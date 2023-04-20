<template>
  <div v-if="!iAmLoggedIn" class="menus">
    <li>
      <NuxtLink to="/" aria-current="page">Beranda</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/tentang">Tentang</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/iam/login">Login</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/iam/register">Register</NuxtLink>
    </li>
  </div>
  <div v-else class="menus">
    <li>
      <NuxtLink to="/iam/dashboard">Beranda</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/iam/dashboard/mata-kuliah">Mata&nbsp;Kuliah</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/iam/dashboard/tugas">Tugas</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/iam/dashboard/profile">Profile</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/iam/dashboard/settings">Settings</NuxtLink>
    </li>
    <li @click="logMeOut" role="button">
      <NuxtLink class="alink">Logout</NuxtLink>
    </li>
  </div>
</template>

<script setup lang="ts">
import { useIamProfileStore } from '@/stores/useIamProfileStore'

// Pinia store for iamProfile
const iamStore = useIamProfileStore()
const { logout } = useIam();

const iAmLoggedIn = ref(false);
const showMenu = ref(false);

// Profile variables
const firstName = ref(<string | undefined>(undefined))
const lastName = ref(<string | undefined>(undefined))
const avatar = ref(<string | undefined>(undefined))

// Watch the iamProfile store
iamStore.$subscribe((mutation, state) => {
  iAmLoggedIn.value = state.isLoggedIn

  // If profile values
  if (iAmLoggedIn.value) {
    const temp = iamStore.getProfile
    if (temp) {
      firstName.value = temp.firstName
      lastName.value = temp.lastName
      avatar.value = temp.avatar
    }
  }
})

/**
 * @Desc Toggle profile menu
 */
async function toggleMenu() {
  showMenu.value = !showMenu.value;
}

/**
 * @Desc Log user out
 */
async function logMeOut() {
  const { status } = await logout();
  if (status === "success") {

    // Clear store variables
    iamStore.setIsLoggedIn(false)
    iamStore.clearProfile()

    navigateTo("/iam/login");
  }
}

</script>

<style>.menus {
  display: flex;
  gap: 35px;
}</style>