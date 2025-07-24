import React from "react";
import Link from "next/link";

export default function ActivitySelectionPage() {
  return (
    <div className="min-h-screen bg-darkBlue text-textLight p-8">
      {/* Tombol Kembali */}
      <div className="mb-8">
        <Link
          href="/article"
          className="inline-flex items-center text-accentBlue hover:text-textLight transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H16a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Kembali
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-accentBlue mb-4">
          Memahami Activity Selection Problem
        </h1>
        <p className="text-xl text-lightBlue">
          Pelajari bagaimana memilih aktivitas maksimum yang tidak saling
          tumpang tindih menggunakan pendekatan greedy.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {/* Apa itu Activity Selection Problem? */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Apa itu Activity Selection Problem?
          </h2>
          <p className="mb-4 leading-relaxed">
            Activity Selection Problem adalah masalah optimisasi klasik yang
            menggunakan pendekatan{" "}
            <span className="font-semibold text-accentBlue">greedy</span>
            untuk memilih jumlah maksimum aktivitas yang tidak saling tumpang
            tindih (non-overlapping) dari sebuah himpunan aktivitas. Setiap
            aktivitas memiliki waktu mulai dan selesai, dan tujuannya adalah
            memilih sebanyak mungkin aktivitas yang dapat dilakukan secara
            berurutan pada satu sumber daya (misalnya, satu ruangan atau satu
            orang).
          </p>
          <p className="leading-relaxed">
            Masalah ini memiliki aplikasi dalam berbagai bidang, seperti:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">Penjadwalan:</span>{" "}
              Mengatur rapat atau acara dalam satu ruangan
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Manajemen tugas:
              </span>{" "}
              Memilih tugas yang dapat diselesaikan dalam waktu tertentu
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Sistem operasi:
              </span>{" "}
              Penjadwalan proses dalam CPU
            </li>
            <li>
              <span className="font-medium text-accentBlue">Jaringan:</span>{" "}
              Pengalokasian sumber daya jaringan untuk transmisi data
            </li>
          </ul>
        </section>

        {/* Cara Kerja Activity Selection Problem */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Cara Kerja Activity Selection Problem
          </h2>
          <p className="mb-4 leading-relaxed">
            Algoritma greedy untuk Activity Selection Problem memilih aktivitas
            berdasarkan waktu selesai yang paling awal. Berikut
            langkah-langkahnya:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-2">
            <li>
              <span className="font-semibold text-accentBlue">
                Urutkan aktivitas:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Urutkan semua aktivitas berdasarkan waktu selesai (finish
                  time) secara ascending
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">
                Pilih aktivitas:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Pilih aktivitas pertama (dengan waktu selesai paling awal)
                </li>
                <li>
                  Tandai waktu selesai aktivitas ini sebagai batas waktu
                  terakhir
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">
                Iterasi aktivitas berikutnya:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Untuk setiap aktivitas berikutnya dalam daftar yang sudah
                  diurutkan:
                </li>
                <li>
                  Jika waktu mulai aktivitas lebih besar atau sama dengan batas
                  waktu terakhir, pilih aktivitas tersebut
                </li>
                <li>
                  Perbarui batas waktu terakhir dengan waktu selesai aktivitas
                  yang dipilih
                </li>
              </ul>
            </li>
          </ol>
          <p className="mt-4 leading-relaxed">
            Pendekatan ini menjamin bahwa kita mendapatkan jumlah maksimum
            aktivitas yang kompatibel (tidak tumpang tindih).
          </p>
        </section>

        {/* Contoh Permasalahan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Contoh Permasalahan
          </h2>
          <p className="mb-4 leading-relaxed">
            Misalkan kita memiliki aktivitas berikut dengan waktu mulai dan
            selesai:
          </p>
          <table className="table-auto w-full mb-4 text-left">
            <thead>
              <tr className="bg-darkBlue text-textLight">
                <th className="px-4 py-2">Aktivitas</th>
                <th className="px-4 py-2">Waktu Mulai</th>
                <th className="px-4 py-2">Waktu Selesai</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-500">
                <td className="border px-4 py-2">A1</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">4</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">A2</td>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">5</td>
              </tr>
              <tr className="bg-green-500">
                <td className="border px-4 py-2">A3</td>
                <td className="border px-4 py-2">5</td>
                <td className="border px-4 py-2">7</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">A4</td>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">8</td>
              </tr>
              <tr className="bg-green-500">
                <td className="border px-4 py-2">A5</td>
                <td className="border px-4 py-2">8</td>
                <td className="border px-4 py-2">9</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-4 leading-relaxed">
            <strong>Aktivitas yang dipilih:</strong> A1, A3, A5 (ditandai hijau)
          </p>
          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Langkah-langkah solusi:
          </h3>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
            <li>
              Urutkan berdasarkan waktu selesai: A1(4), A2(5), A3(7), A4(8),
              A5(9)
            </li>
            <li>Pilih A1 (selesai jam 4)</li>
            <li>Lewati A2 dan A4 (waktu mulai kurang dari 4)</li>
            <li>Pilih A3 (mulai jam 5, selesai jam 7)</li>
            <li>Pilih A5 (mulai jam 8, selesai jam 9)</li>
          </ol>
        </section>

        {/* Implementasi Kode (Python) */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi Kode (Python)
          </h2>
          <p className="mb-4 leading-relaxed">
            Berikut implementasi Activity Selection Problem menggunakan Python:
          </p>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`
def activity_selection(start, finish):
    # Urutkan aktivitas berdasarkan waktu selesai
    activities = sorted(zip(start, finish), key=lambda x: x[1])
    result = []
    last_finish_time = -1
    
    # Pilih aktivitas
    for s, f in activities:
        if s >= last_finish_time:
            result.append((s, f))
            last_finish_time = f
    
    return result

# Contoh penggunaan
start = [1, 3, 5, 3, 8]
finish = [4, 5, 7, 8, 9]
selected_activities = activity_selection(start, finish)
print("Aktivitas yang dipilih:", selected_activities)
`}
          </pre>
          <p className="mt-4 leading-relaxed">
            Output akan menampilkan daftar aktivitas yang dipilih berdasarkan
            waktu mulai dan selesai.
          </p>
        </section>

        {/* Implementasi Kode (JavaScript) */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi Kode (JavaScript)
          </h2>
          <p className="mb-4 leading-relaxed">
            Berikut implementasi yang sama dalam JavaScript:
          </p>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`
function activitySelection(start, finish) {
    // Gabungkan start dan finish ke dalam array aktivitas
    const activities = start.map((s, i) => ({ start: s, finish: finish[i] }));
    
    // Urutkan berdasarkan waktu selesai
    activities.sort((a, b) => a.finish - b.finish);
    
    const result = [];
    let lastFinishTime = -1;
    
    // Pilih aktivitas
    for (let activity of activities) {
        if (activity.start >= lastFinishTime) {
            result.push(activity);
            lastFinishTime = activity.finish;
        }
    }
    
    return result;
}

// Contoh penggunaan
const start = [1, 3, 5, 3, 8];
const finish = [4, 5, 7, 8, 9];
const selectedActivities = activitySelection(start, finish);
console.log("Aktivitas yang dipilih:", selectedActivities);
`}
          </pre>
        </section>

        {/* Kompleksitas dan Optimasi */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kompleksitas dan Optimasi
          </h2>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Kompleksitas Waktu:
          </h3>
          <p className="mb-4 leading-relaxed">
            Kompleksitas waktu adalah <strong>O(n log n)</strong> karena langkah
            pengurutan mendominasi proses, di mana n adalah jumlah aktivitas.
          </p>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Kompleksitas Ruang:
          </h3>
          <p className="mb-4 leading-relaxed">
            Kompleksitas ruang adalah <strong>O(n)</strong> untuk menyimpan
            daftar aktivitas yang diurutkan dan hasilnya.
          </p>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Optimasi:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">Pre-sorting:</span>{" "}
              Jika data sudah diurutkan, kompleksitas waktu menjadi O(n)
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Parallel sorting:
              </span>
              Menggunakan algoritma pengurutan paralel untuk data besar
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                In-place sorting:
              </span>{" "}
              Mengurangi penggunaan memori tambahan selama pengurutan
            </li>
          </ul>
        </section>

        {/* Kelebihan dan Kekurangan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kelebihan dan Kekurangan
          </h2>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Kelebihan Activity Selection Problem:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">Sederhana:</span>{" "}
              Algoritma greedy mudah diimplementasikan dan dipahami
            </li>
            <li>
              <span className="font-medium text-accentBlue">Efisien:</span>{" "}
              Memberikan solusi optimal dengan kompleksitas rendah
            </li>
            <li>
              <span className="font-medium text-accentBlue">Fleksibel:</span>{" "}
              Dapat dimodifikasi untuk kriteria pemilihan lain
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-accentBlue mt-6 mb-2">
            Kekurangan Activity Selection Problem:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Asumsi tidak tumpang tindih:
              </span>
              Tidak cocok untuk aktivitas dengan overlap parsial
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Data harus diurutkan:
              </span>
              Membutuhkan langkah pengurutan awal
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Keterbatasan kriteria:
              </span>
              Hanya optimal untuk pemilihan berdasarkan waktu selesai
            </li>
          </ul>
        </section>

        {/* Kesimpulan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kesimpulan
          </h2>
          <p className="leading-relaxed">
            Activity Selection Problem adalah contoh klasik dari penggunaan
            algoritma greedy untuk menyelesaikan masalah penjadwalan. Dengan
            pendekatan sederhana berdasarkan waktu selesai, algoritma ini
            menjamin solusi optimal untuk memilih aktivitas maksimum yang tidak
            tumpang tindih. Meskipun memiliki keterbatasan, algoritma ini sangat
            efisien dan sering digunakan dalam aplikasi penjadwalan dan
            optimisasi sumber daya.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-textLight text-sm">
        <p>Dibuat dengan ❤️ </p>
      </footer>
    </div>
  );
}
