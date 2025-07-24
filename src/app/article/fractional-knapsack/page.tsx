import React from "react";
import Link from "next/link";

export default function FractionalKnapsackPage() {
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
          Memahami Fractional Knapsack Problem
        </h1>
        <p className="text-xl text-lightBlue">
          Pelajari bagaimana memaksimalkan nilai dalam knapsack dengan kapasitas
          terbatas menggunakan pendekatan greedy.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {/* Apa itu Fractional Knapsack Problem? */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Apa itu Fractional Knapsack Problem?
          </h2>
          <p className="mb-4 leading-relaxed">
            Fractional Knapsack Problem adalah masalah optimisasi yang
            menggunakan pendekatan
            <span className="font-semibold text-accentBlue">greedy</span> untuk
            memilih item dengan nilai maksimum yang dapat dimasukkan ke dalam
            knapsack dengan kapasitas terbatas. Berbeda dengan 0/1 Knapsack
            Problem, dalam masalah ini, item dapat diambil secara fraksional
            (sebagian), bukan hanya secara keseluruhan.
          </p>
          <p className="leading-relaxed">
            Masalah ini memiliki aplikasi dalam berbagai bidang, seperti:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Manajemen sumber daya:
              </span>
              Alokasi sumber daya terbatas seperti anggaran atau waktu
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Optimisasi portofolio:
              </span>
              Pemilihan investasi dengan return maksimum
            </li>
            <li>
              <span className="font-medium text-accentBlue">Logistik:</span>{" "}
              Memaksimalkan muatan dalam kendaraan dengan kapasitas terbatas
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Pengolahan data:
              </span>{" "}
              Seleksi data berdasarkan prioritas dalam sistem terbatas
            </li>
          </ul>
        </section>

        {/* Cara Kerja Fractional Knapsack Problem */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Cara Kerja Fractional Knapsack Problem
          </h2>
          <p className="mb-4 leading-relaxed">
            Algoritma greedy untuk Fractional Knapsack Problem memilih item
            berdasarkan rasio nilai per berat (value/weight) tertinggi. Berikut
            langkah-langkahnya:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-2">
            <li>
              <span className="font-semibold text-accentBlue">
                Hitung rasio nilai/berat:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Untuk setiap item, hitung rasio nilai/berat (value/weight)
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">
                Urutkan item:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Urutkan item berdasarkan rasio nilai/berat secara descending
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">Pilih item:</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Mulai dari item dengan rasio tertinggi</li>
                <li>
                  Jika berat item {`<=`} kapasitas knapsack, ambil item secara
                  penuh
                </li>
                <li>
                  Jika berat item {`>`} kapasitas knapsack, ambil fraksi dari
                  item
                </li>
                <li>
                  Perbarui kapasitas knapsack dan akumulasikan nilai total
                </li>
              </ul>
            </li>
          </ol>
          <p className="mt-4 leading-relaxed">
            Pendekatan ini menjamin solusi optimal untuk memaksimalkan nilai
            total dalam knapsack dengan kapasitas terbatas.
          </p>
        </section>

        {/* Contoh Permasalahan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Contoh Permasalahan
          </h2>
          <p className="mb-4 leading-relaxed">
            Misalkan kita memiliki knapsack dengan kapasitas 50 unit dan item
            berikut:
          </p>
          <table className="table-auto w-full mb-4 text-left">
            <thead>
              <tr className="bg-darkBlue text-textLight">
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Nilai</th>
                <th className="px-4 py-2">Berat</th>
                <th className="px-4 py-2">Rasio (Nilai/Berat)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-500">
                <td className="border px-4 py-2">I1</td>
                <td className="border px-4 py-2">60</td>
                <td className="border px-4 py-2">10</td>
                <td className="border px-4 py-2">6</td>
              </tr>
              <tr className="bg-green-500">
                <td className="border px-4 py-2">I2</td>
                <td className="border px-4 py-2">100</td>
                <td className="border px-4 py-2">20</td>
                <td className="border px-4 py-2">5</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">I3</td>
                <td className="border px-4 py-2">120</td>
                <td className="border px-4 py-2">30</td>
                <td className="border px-4 py-2">4</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-4 leading-relaxed">
            <strong>Kapasitas knapsack:</strong> 50 unit
            <br />
            <strong>Item yang dipilih:</strong> I1 (penuh), I2 (penuh), I3 (1/3
            bagian) (ditandai hijau)
          </p>
          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Langkah-langkah solusi:
          </h3>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
            <li>Urutkan berdasarkan rasio: I1(6), I2(5), I3(4)</li>
            <li>Ambil I1: nilai=60, berat=10, sisa kapasitas=50-10=40</li>
            <li>Ambil I2: nilai=100, berat=20, sisa kapasitas=40-20=20</li>
            <li>
              Ambil 20/30 dari I3: nilai=(20/30)*120=80, berat=20, sisa
              kapasitas=0
            </li>
            <li>Nilai total: 60+100+80=240</li>
          </ol>
        </section>

        {/* Implementasi Kode (Python) */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi Kode (Python)
          </h2>
          <p className="mb-4 leading-relaxed">
            Berikut implementasi Fractional Knapsack Problem menggunakan Python:
          </p>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`
def fractional_knapsack(values, weights, capacity):
    # Buat daftar item dengan rasio nilai/berat
    items = [(v/w, v, w) for v, w in zip(values, weights)]
    
    # Urutkan berdasarkan rasio (descending)
    items.sort(reverse=True)
    
    total_value = 0
    remaining_capacity = capacity
    
    for ratio, value, weight in items:
        if remaining_capacity >= weight:
            # Ambil item penuh
            total_value += value
            remaining_capacity -= weight
        else:
            # Ambil fraksi dari item
            fraction = remaining_capacity / weight
            total_value += value * fraction
            remaining_capacity = 0
            break
    
    return total_value

# Contoh penggunaan
values = [60, 100, 120]
weights = [10, 20, 30]
capacity = 50
max_value = fractional_knapsack(values, weights, capacity)
print("Nilai maksimum:", max_value)
          </pre>
          <p className="mt-4 leading-relaxed">
            Output akan menampilkan nilai maksimum yang dapat dicapai dalam knapsack.
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
function fractionalKnapsack(values, weights, capacity) {
    // Buat array item dengan rasio nilai/berat
    const items = values.map((value, i) => ({
        ratio: value / weights[i],
        value,
        weight: weights[i]
    }));
    
    // Urutkan berdasarkan rasio (descending)
    items.sort((a, b) => b.ratio - a.ratio);
    
    let totalValue = 0;
    let remainingCapacity = capacity;
    
    for (let item of items) {
        if (remainingCapacity >= item.weight) {
            // Ambil item penuh
            totalValue += item.value;
            remainingCapacity -= item.weight;
        } else {
            // Ambil fraksi dari item
            const fraction = remainingCapacity / item.weight;
            totalValue += item.value * fraction;
            remainingCapacity = 0;
            break;
        }
    }
    
    return totalValue;
}

// Contoh penggunaan
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
const maxValue = fractionalKnapsack(values, weights, capacity);
console.log("Nilai maksimum:", maxValue);
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
            pengurutan mendominasi proses, di mana n adalah jumlah item.
          </p>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Kompleksitas Ruang:
          </h3>
          <p className="mb-4 leading-relaxed">
            Kompleksitas ruang adalah <strong>O(n)</strong> untuk menyimpan
            daftar item yang diurutkan.
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
            Kelebihan Fractional Knapsack Problem:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">Efisien:</span>{" "}
              Memberikan solusi optimal dengan kompleksitas rendah
            </li>
            <li>
              <span className="font-medium text-accentBlue">Fleksibel:</span>{" "}
              Memungkinkan pengambilan fraksi item, cocok untuk banyak aplikasi
            </li>
            <li>
              <span className="font-medium text-accentBlue">Sederhana:</span>{" "}
              Algoritma greedy mudah diimplementasikan
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-accentBlue mt-6 mb-2">
            Kekurangan Fractional Knapsack Problem:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Asumsi fraksional:
              </span>{" "}
              Tidak cocok untuk item yang tidak dapat dibagi (misalnya, 0/1
              Knapsack)
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
              Hanya optimal untuk rasio nilai/berat
            </li>
          </ul>
        </section>

        {/* Kesimpulan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kesimpulan
          </h2>
          <p className="leading-relaxed">
            Fractional Knapsack Problem adalah contoh klasik dari penggunaan
            algoritma greedy untuk menyelesaikan masalah optimisasi. Dengan
            memilih item berdasarkan rasio nilai/berat tertinggi, algoritma ini
            memastikan nilai maksimum dalam knapsack dengan kapasitas terbatas.
            Meskipun memiliki keterbatasan seperti ketidakmampuan untuk
            menangani item yang tidak dapat dibagi, algoritma ini sangat efisien
            dan banyak digunakan dalam aplikasi manajemen sumber daya dan
            optimisasi.
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
