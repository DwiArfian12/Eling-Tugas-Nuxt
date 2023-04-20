<template>
  <div>
    <main>
      <div class="beranda">
        <div class="left">
          <div class="title">
            <h1>Eling Tugas</h1>
            <hr>
          </div>
          <div class="tagline">
            <p>Hai, {{ profile.firstName }} {{ profile.lastName }}!<br>Segera selesaikan tugasmu!</p>
            
          </div>
        </div>
        <div class="right">
          <img src="/img/jumbotron.png" alt="">
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
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

useHead({
  title: 'Beranda | Eling Tugas'
})
</script>
