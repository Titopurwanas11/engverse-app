export default class QuizPage {
  async render() {
    return `
      <section class="container mx-auto px-4 py-8">
        <div class="flex justify-between items-center mb-6">
          <button class="text-blue-600 font-semibold">&larr; Back</button>
          <div class="text-right text-blue-600 font-semibold text-sm">
            Timer <span class="ml-2 bg-gray-100 border border-blue-400 px-2 py-1 rounded">20:30</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <!-- Sidebar -->
          <div class="col-span-1">
            <div class="bg-white shadow rounded p-4 mb-4">
              <h2 class="font-bold text-blue-600 mb-2">Quiz Navigation</h2>
              <div class="flex space-x-2">
                <button class="w-8 h-8 bg-blue-600 text-white rounded">1</button>
                <button class="w-8 h-8 border border-blue-600 text-blue-600 rounded">2</button>
                <button class="w-8 h-8 border border-blue-600 text-blue-600 rounded">3</button>
                <button class="w-8 h-8 border border-blue-600 text-blue-600 rounded">4</button>
                <button class="w-8 h-8 border border-blue-600 text-blue-600 rounded">5</button>
              </div>
            </div>
            <button class="bg-blue-600 text-white font-semibold px-4 py-2 rounded">Back</button>
          </div>

          <!-- Question Section -->
          <div class="col-span-2 flex flex-col space-y-4">
            <!-- Question Info -->
            <div class="bg-gray-50 shadow rounded p-4">
              <h3 class="font-bold">Question 1</h3>
              <p class="text-gray-500 text-sm">Not yet answered</p>
              <p class="text-gray-500 text-sm">Marked out of 1.00</p>
            </div>

            <!-- Question Box -->
            <div class="bg-blue-100 rounded p-6 shadow">
              <p class="font-medium mb-4">1. What is your favorite season?</p>
              <div class="space-y-2">
                <label class="flex items-center space-x-2">
                  <input type="radio" name="season" class="accent-blue-600" checked />
                  <span>Summer</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="radio" name="season" class="accent-blue-600" />
                  <span>Winter</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="radio" name="season" class="accent-blue-600" />
                  <span>Spring</span>
                </label>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="flex justify-end space-x-2">
              <button class="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded font-semibold">Previous</button>
              <button class="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Next</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Logika interaktif nanti bisa ditambahkan di sini
  }
}
