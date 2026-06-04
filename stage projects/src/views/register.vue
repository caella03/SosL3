<template>
  <div class="min-h-screen flex items-center justify-center bg-green-100 px-4">

    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

      <h2 class="text-2xl font-bold text-green-800 mb-6 text-center">
        Register
      </h2>

      <form @submit.prevent="register" class="flex flex-col gap-4">

        <!-- Name -->
        <input
          v-model="name"
          type="text"
          placeholder="Full Name"
          class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <!-- Gender -->
        <select
          v-model="gender"
          class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <!-- Email -->
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <!-- Password -->
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <!-- Confirm Password -->
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <!-- Button -->
        <button
          type="submit"
          class="bg-green-700 text-white py-3 rounded hover:bg-green-800 transition"
        >
          Create Account
        </button>

      </form>

      <p class="text-sm text-center mt-4">
        Already have an account?
        <router-link to="/login" class="text-green-700 font-semibold">
          Login
        </router-link>
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const gender = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

function register() {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!")
    return
  }

  console.log({
    name: name.value,
    gender: gender.value,
    email: email.value,
    password: password.value
  })

  alert("Account created successfully!")

  // reset form
  name.value = ''
  gender.value = ''
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}
</script>