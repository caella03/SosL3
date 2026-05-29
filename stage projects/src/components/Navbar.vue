<template>
  <nav class="bg-green-800 text-white px-6 py-3 flex justify-between items-center">
    
    <!-- Logo -->
    <img
      src="/logo.png"
      alt="Logo"
      class="h-10 w-10 rounded-full object-cover"
    />

    <!-- Navigation Links -->
    <ul class="flex gap-8 text-sm font-medium items-center">
      
      <li>
        <a href="/" class="hover:text-yellow-300 transition">
          Home
        </a>
      </li>

      <li>
        <a href="/about" class="hover:text-yellow-300 transition">
          About Us
        </a>
      </li>

      <li>
        <a href="/services" class="hover:text-yellow-300 transition">
          Services
        </a>
      </li>

      <!-- Gallery Dropdown -->
      <li class="relative group">
        <a href="#" class="hover:text-yellow-300 transition">
          Gallery ▼
        </a>

        <ul
          class="absolute left-0 top-full hidden group-hover:block bg-white text-green-900 rounded shadow-md w-48 z-50"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-green-200 text-green-700"
            >
              Photos
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-green-200 text-green-700"
            >
              Videos
            </a>
          </li>
        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li class="relative group">
        <a href="#" class="hover:text-yellow-300 transition">
          Destination ▼
        </a>

        <ul
          class="absolute left-0 top-full hidden group-hover:block bg-white text-green-900 rounded shadow-md w-52 z-50"
        >
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-700">
              Kigali City
            </a>
          </li>

          <li>
            <a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-700">
              Western Province
            </a>
          </li>

          <li>
            <a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-700">
              Northern Province
            </a>
          </li>

          <li>
            <a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-700">
              Southern Province
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a href="/contact" class="hover:text-yellow-300 transition">
          Contact
        </a>
      </li>

    </ul>
  </nav>
</template>