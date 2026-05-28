<template>
  <nav class="bg-green-800 text-white p-2 flex justify-between items-center">
    <img src="../public/logo.png" class="h-10 w-10 rounded-full object-cover">

 <ul class="flex gap-8 text-smm font-medium">
  <li> <a href="/" class="hover:text-yellow-300">Home</a> </li>
  <li> <a href="/about" class="hover:text-yellow-300">About us</a> </li>
  <li> <a href="/services" class="hover:text-yellow-300">Services</a> </li>

  <li class="relative group"> <a href="#" class="hover:text-yellow-300">Gallery🔽</a><span></span>
 <ul class="invisible group-hover:visible opacity absolute bg-white text-green-900 rounded shadow w-48 top-full z-50">
      <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-700">photos</a> </li>
      <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-700">videos</a> </li>
  </ul>
  </li>

  <li class="relative group"> <a href="#" class="hover:text-yellow-300">Destination🔽</a><span></span>

  <ul class="invisible group-hover:visible opacity absolute bg-white text-green-900 rounded shadow w-48 top-full z-50">
  <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-700">Kigali city</a> </li>
  <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-700">Western province</a> </li>
  <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-700">Northern province</a> </li>
  <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-700">southern province</a> </li>
  </ul>
  </li>
  <li> <a href="/contact" class="hover:text-yellow-300">Contact</a> </li></ul>

</nav>
</template>