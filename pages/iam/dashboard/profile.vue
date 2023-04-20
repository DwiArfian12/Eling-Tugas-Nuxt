<template>
  
  <div>
    <main>
      <div class="daftar">
        <div v-if="profileError" class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>{{ profileError.message }}</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
            @click="profileError = null"></button>
        </div>
        <!-- Profile success notification -->
        <div v-if="updateSuccessful" class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Profile updated successfully</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
            @click="updateSuccessful = false"></button>
        </div>
        <h1>Profil</h1>
        <p class="perbarui">Perbarui data profilmu</p>
        <form>
          <div class="fg">
            <label for="uuid">Uuid</label>
            <input type="text" id="uuid" :value="$attrs.profile.uuid" disabled />
          </div>
          <div class="fg">
            <label for="email">Email address</label>
            <input type="email" id="email" :value="$attrs.profile.email" disabled />
          </div>
          <div class="fg">
            <label for="first_name">First name</label>
            <input v-model="profile.firstName" type="text" id="first_name" />
          </div>
          <div class="fg">
            <label for="last_name">Last name</label>
            <input v-model="profile.lastName" type="text" id="last_name" />
          </div>
          <button type="submit" class="loginBtn" @click.prevent="updateMyProfile()">
            Perbarui
          </button>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
const emit = defineEmits(["profileUpdate"]);

const { updateProfile } = useIam();
const updateSuccessful = ref(false);
let profileError = ref(null);

// Some profile values
const profile = {
  uuid: "",
  firstName: "",
  lastName: "",
};

// Get profile passed through attributes
const attrs = useAttrs();
profile.uuid = attrs.profile.uuid;
profile.firstName = attrs.profile.firstName;
profile.lastName = attrs.profile.lastName;

// Csrf token should be part of profile
const csrfToken = attrs.profile.csrfToken;

// Attempt to update user profile
async function updateMyProfile() {
  if (
    profile.firstName === attrs.profile.firstName &&
    profile.lastName === attrs.profile.lastName
  )
    return;

  // Object with updatable values
  const values = {
    uuid: profile.uuid,
    firstName: profile.firstName,
    lastName: profile.lastName,
    csrfToken: csrfToken,
  };

  const { error, data } = await updateProfile(values);

  // If error, display error
  if (error) {
    console.log("error: ", error);
    profileError.value = error;
    return;
  }

  updateSuccessful.value = true;

  emit("profileUpdate");
}

useHead({  
  title: "Profil | Eling Tugas",  
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
