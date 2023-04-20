<template>
  <header v-if="iAmLoggedIn" class="mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><NuxtLink class="nav-link px-2 link-secondary" to="/iam/dashboard">Dashboard</NuxtLink></li>                  
          <li v-if="isAdmin"><NuxtLink class="nav-link px-2 link-dark" to="/iam/dashboard/admin">Admin</NuxtLink></li>                                    
        </ul>
      <div>                     
    </div>
    </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useIamProfileStore } from '@/stores/useIamProfileStore'

const iamStore = useIamProfileStore()
const { getProfile } = useIam();
const iAmLoggedIn = ref(false);
const isAdmin = ref(false)

// Watch if store if user is logged in
iamStore.$subscribe(async (mutation, state) => { 
  iAmLoggedIn.value = state.isLoggedIn

  // If user is logged in, check if user has admin authorization
  if (iAmLoggedIn.value)
    await checkAdminAuthorization()
   else 
    isAdmin.value = false
})

/**
 * Checks if user has admin authorization
 */
async function checkAdminAuthorization() {
  const response = await getProfile()
  
  if (response.status === 'success') {
      const profile = response.data     
      
      if (profile)
        if (profile.role === 'SUPER_ADMIN' && profile.email_verified && profile.permissions && profile.permissions.includes('canAccessAdmin'))
          isAdmin.value = true  
    }
}
</script>