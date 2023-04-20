<template>
  <div>
    <main>      
      <div class="daftar">   
        <h1>Register</h1>
        <form>
          <!-- Email verification -->
          <div v-if="verifyRegistrations" class="alert alert-warning" role="alert">
            <strong>Email verification is required.</strong>
          </div>  
          <!-- Error message -->
          <div v-if="registerError" class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error: {{ registerError.message }}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="registerError = null"></button>
          </div>
          <!-- Register Success -->
          <div v-if="registerSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Registration successful</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="registerSuccess = null"></button>
          </div>              
          <div class="fg">
            <label for="floatingFirstName">First name</label>
            <input v-model="registerForm.firstName" type="text" class="form-control" id="floatingFirstName" placeholder="Dwi">
          </div>
          <div class="fg">
            <label for="floatingLastName">Last name</label>
            <input v-model="registerForm.lastName" type="text" class="form-control" id="floatingLastName" placeholder="Lasmana">
          </div>
          <div class="fg">
            <label for="floatingEmail">Email address</label>
            <input v-model="registerForm.email" type="email" class="form-control" id="floatingEmail" placeholder="anu@gmail.com">
          </div>
          <div class="fg">
            <label for="floatingPassword">Password</label>
            <input v-model="registerForm.password" type="password" class="form-control" id="floatingPassword" placeholder="password">
          </div>       
          <p class="term"><input type="checkbox" v-model="acceptTerms" /> Saya setuju dengan
            <NuxtLink class="text-decoration-none" to="/iam/register">Syarat dan Ketentuan</NuxtLink></p>         
          <NuxtLink class="daftar-ask" to="/iam/login">Sudah punya akun? Login di sini!</NuxtLink>
          <button class="loginBtn" @click.prevent="tryRegister">Register</button>
        </form>      
      </div>
    </main>
  </div>
</template>

<script setup>
const { register } = useIam();
const verifyRegistrations =
  useRuntimeConfig().public.iamVerifyRegistrations === "true";

// Error and success flags
let registerError = ref(null);
let registerSuccess = ref(null);

// Flag for terms and conditions
const acceptTerms = ref(false);

// Object to hold registration data
const registerForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

// Attempt to register user
async function tryRegister() {
  // Check terms and conditions checkbox
  if (!acceptTerms.value) {
    registerError.value = {
      message: "You must accept terms and conditions",
    };
    return;
  }

  // Send registration data
  const { status, error } = await register(
    registerForm.firstName,
    registerForm.lastName,
    registerForm.email,
    registerForm.password
  );

  // If we get an error
  if (error) {
    console.log("error: ", error);
    registerError.value = error;
  }

  // If successful, show success message, wait, then navigate to login page
  if (status === "success") {
    registerSuccess.value = true;
    setTimeout(() => { navigateTo("/iam/login"); }, 1000);
  }
}

useHead({  
  title: "Daftar | Eling Tugas",  
  link: {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    type: "text/css",
  },
  script: {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
  },
});
</script>