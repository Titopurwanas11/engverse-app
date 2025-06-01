export default class PracticePage {
  async render() {
    return `
      <section class="container mx-auto px-4 py-8">
        <!-- Header -->
        <div class="bg-blue-600 text-white text-center py-4 rounded-t-md">
          <h1 class="text-lg font-semibold">Selamat Datang di TOEFL Quiz</h1>
        </div>

        <!-- Content Box -->
        <div class="bg-blue-50 border border-blue-200 p-6 rounded-b-md shadow-md">
          <p class="text-gray-700 mb-4">
            Simulasi ini dirancang untuk membantumu mempersiapkan diri menghadapi tes TOEFL ITP yang sebenarnya.
          </p>
          <p class="text-gray-700 mb-2">Sebelum memulai, harap perhatikan:</p>
          <ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
            <li>Tes terdiri dari 3 bagian: <strong>Listening Comprehension</strong>, <strong>Structure and Written Expression</strong>, dan <strong>Reading Comprehension</strong>.</li>
            <li>Total waktu pengerjaan: <strong>1 jam 55 menit</strong>.</li>
            <li>Pastikan kamu berada di tempat yang tenang dan memiliki koneksi internet stabil.</li>
            <li>Gunakan headset atau earphone untuk bagian Listening agar hasil maksimal.</li>
          </ul>
          <div class="text-right">
            <button id="start-btn" class="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition">Start</button>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    document.querySelector('#start-btn').addEventListener('click', () => {
      window.location.hash = '#/quiz';
    });
  }
}
