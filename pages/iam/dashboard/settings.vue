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
        <div v-if="deleteError" class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>{{ deleteError.message }}</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
            @click="deleteError = null"></button>
        </div>
        <h1>Password</h1>
        <p class="perbarui">Perbarui passwordmu</p>
        <form>
          <div class="fg">
            <label for="current_password">Password Saat Ini</label>
            <input v-model="profile.currentPassword" type="password" id="current_password" />
          </div>
          <div class="fg">
            <label for="new_password">Password Baru</label>
            <input v-model="profile.newPassword" type="password" id="new_password" />
          </div>
          <div class="fg">
            <label for="confirm_password">Konfirmasi Password Baru</label>
            <input v-model="profile.confirmNewPassword" type="password" id="confirm_password" />
          </div>
          <div class="tmbl">
            <button type="submit" class="hapusBtn" @click.prevent="deleteMyAccount()">
                * Hapus Akun *
            </button>
            <button type="submit" class="loginBtn" @click.prevent="updateMyProfileWithPassword()">
              Perbarui
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useIamProfileStore } from '@/stores/useIamProfileStore'

const iamStore = useIamProfileStore()
const { updateProfile, deleteAccount } = useIam();

const updateSuccessful = ref(false);
let profileError = ref(null);
let deleteError = ref(null);

// Some profile values with added ones
const profile = {
  uuid: "",
  firstName: "",
  lastName: "",
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
  csrfToken: "",
};

// Get profile passed through attributes
const attrs = useAttrs();
profile.uuid = attrs.profile.uuid;
profile.firstName = attrs.profile.firstName;
profile.lastName = attrs.profile.lastName;

// Csrf token should be part of profile
const csrfToken = attrs.profile.csrfToken;

// Attempt to update user profile with password
async function updateMyProfileWithPassword() {
  // Front end password validation
  if (
    !profile.currentPassword ||
    !profile.newPassword ||
    !profile.confirmNewPassword
  ) {
    const allPasswordsError = {
      message: "All passwords must be supplied",
    };
    console.log("error: ", allPasswordsError);
    profileError.value = allPasswordsError;
    return;
  }

  // Confirm password front end validation
  if (profile.newPassword !== profile.confirmNewPassword) {
    const confirmPasswordError = {
      message: "New password does not match confirm password",
    };
    console.log("error: ", confirmPasswordError);
    profileError.value = confirmPasswordError;
    return;
  }

  const { error } = await updateProfile({
    uuid: profile.uuid,
    currentPassword: profile.currentPassword,
    newPassword: profile.newPassword,
    confirmNewPassword: profile.confirmNewPassword,
    csrfToken: csrfToken,
  });

  // If error, display error
  if (error) {
    console.log("error: ", error);
    profileError.value = error;
    return;
  }

  updateSuccessful.value = true;
}

// Attempt to delete user account
async function deleteMyAccount() {
  const { error } = await deleteAccount(profile.uuid, csrfToken);

  // If error, show error
  if (error) {
    deleteError.value = error;
    return;
  }

  // Clear store variables
  iamStore.setIsLoggedIn(false)
  iamStore.clearProfile()

  // Navigate to register
  navigateTo("/iam/register");
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