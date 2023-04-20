<template>
  <div>
    <main>   
      <div class="login">  
        <h1>Login</h1>
        <form>
          <!-- Error message -->
          <div v-if="loginError" class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error: {{ loginError.message }}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="loginError = null"></button>
          </div>
          <div class="fg">
            <label for="floatingInput">Email address</label>
            <input v-model="loginForm.email" type="email" class="form-control" id="floatingInput" placeholder="anu@gmail.com">
          </div>
          <div class="fg">
            <label for="floatingPassword">Password</label>
            <input v-model="loginForm.password" type="password" class="form-control" id="floatingPassword" placeholder="password">
          </div>       
          <NuxtLink class="daftar-ask" to="/iam/register">Belum Punya Akun?</NuxtLink>
          <button class="loginBtn" @click.prevent="tryLogin">Log in</button>            
        </form> 
      </div>     
    </main>
  </div>
</template>

<script setup lang="ts">
import { GoogleSignInButton, 
  type CredentialResponse,
} from "vue3-google-signin";
import { useIamProfileStore } from '@/stores/useIamProfileStore'

// Get necessary functions from useIam composable
const { login, loginWithGoogle } = useIam();
const allowGoogleAuth = useRuntimeConfig().public.iamAllowGoogleAuth === "true";
const iamStore = useIamProfileStore()

// These variables come from response from calling Nuxt IAM api
let loginError = ref(<{ message: "" } | null>null);

const loginForm = {
  email: "",
  password: "",
};

// Try to log user in
async function tryLogin() {
  const { status, error } = await login(loginForm.email, loginForm.password);
  

  // If error, log error and return
  if (status === 'fail'){
    loginError.value = error
    console.error(error); 
    return
  }
  
  // If successful, navigate to dashboard
  if (status === "success") navigateTo("/iam/dashboard");
}

// Handle Google login success
const handleGoogleLoginSuccess = async (response: CredentialResponse) => {
  const { credential } = response;
  let res = null;
  if (credential) res = await loginWithGoogle(credential);

  // Check for error
  if (res?.error) {
    loginError.value = res.error;
  } else {
    iamStore.setIsLoggedIn(true)    
    navigateTo("/iam/dashboard");
  }
};

// Handle Google error event
const handleGoogleLoginError = () => {
  console.error("Login failed");
};

// If you're using the same version of Bootstrap in your whole app, you can remove the links and scripts below
useHead({  
  title: "Login | Eling Tugas",  
  link: [{
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    type: "text/css",
  }],
  script: [{
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
  }],
  
});
</script>