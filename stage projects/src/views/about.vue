<<template>
  <!-- About Section -->
  <section
    class="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 lg:px-20"
  >
    <!-- Background Decoration -->
    <div
      class="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"
    ></div>

    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"
    ></div>

    <!-- Content -->
    <div
      class="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center"
    >
      
      <!-- Text Content -->
      <div>
        <span
          class="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-5"
        >
          Discover Rwanda
        </span>

        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight mb-6"
        >
          Experience the Beauty of
          <span class="text-yellow-500">
            Rwanda
          </span>
        </h1>

        <p class="text-gray-700 text-lg leading-8 mb-6">
          Rwanda is famously known as the
          <span class="font-semibold text-green-700">
            “Land of a Thousand Hills”
          </span>
          because of its breathtaking landscapes, green mountains,
          and vibrant natural beauty.
        </p>

        <p class="text-gray-700 text-lg leading-8 mb-8">
          From mountain gorillas and national parks to rich traditions,
          local cuisine, and warm hospitality, Rwanda offers visitors
          unforgettable experiences filled with culture, adventure,
          and peace.
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4">
          <button
            class="bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300"
          >
            Learn More
          </button>

          <button
            class="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-7 py-3 rounded-full font-semibold transition duration-300"
          >
            Explore Tourism
          </button>
        </div>
      </div>

      <!-- Image Section -->
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop"
          alt="Rwanda Landscape"
          class="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
        />

        <!-- Floating Card -->
        <div
          class="absolute -bottom-6 left-6 bg-white shadow-xl rounded-2xl p-5 w-64"
        >
          <h3 class="text-xl font-bold text-green-800 mb-2">
            Why Visit Rwanda?
          </h3>

          <p class="text-gray-600 text-sm leading-6">
            Explore wildlife, culture, clean cities, stunning hills,
            and unforgettable travel experiences.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>