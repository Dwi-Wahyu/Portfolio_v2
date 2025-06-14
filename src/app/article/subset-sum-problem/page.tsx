import React from "react";
import Link from "next/link";

export default function SubsetSumArticlePage() {
  return (
    <div className="min-h-screen bg-darkBlue text-textLight p-8">
      {/* Tombol Kembali */}
      <div className="mb-8">
        <Link
          href="/"
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
          Kembali ke Beranda
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-accentBlue mb-4">
          Masalah Subset Sum
        </h1>
        <p className="text-xl text-lightBlue">
          Masalah klasik dalam ilmu komputer: Menentukan apakah ada subset dari
          himpunan bilangan yang jumlahnya sama dengan nilai target tertentu
        </p>
      </header>

      {/* Konten Utama */}
      <main className="max-w-4xl mx-auto">
        {/* Apa itu Subset Sum Problem? */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Apa itu Subset Sum Problem?
          </h2>
          <p className="mb-4 leading-relaxed">
            <span className="font-semibold text-accentBlue">
              Subset Sum Problem
            </span>{" "}
            adalah masalah klasik dalam ilmu komputer yang termasuk dalam
            kategori masalah NP-Complete. Masalah ini bertujuan untuk menentukan
            apakah ada subset dari sebuah himpunan bilangan bulat yang jumlahnya
            sama dengan nilai target tertentu.
          </p>
          <p className="leading-relaxed">
            Masalah ini pertama kali diformalkan dalam teori kompleksitas
            komputasi dan sejak itu menjadi:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Contoh standar masalah NP-Complete</li>
            <li>Dasar untuk banyak masalah optimasi lainnya</li>
            <li>Alat pengajaran untuk dynamic programming</li>
            <li>Topik penelitian dalam algoritma dan kompleksitas</li>
          </ul>
        </section>

        {/* Karakteristik Subset Sum Problem */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Karakteristik Subset Sum Problem
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-accentBlue mb-2">
                Input:
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Himpunan bilangan bulat (biasanya tidak negatif)</li>
                <li>Nilai target yang ingin dicapai</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-accentBlue mb-2">
                Output:
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>True jika ada subset yang memenuhi</li>
                <li>False jika tidak ada subset yang memenuhi</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cara Kerja Subset Sum */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Cara Kerja Subset Sum
          </h2>
          <p className="mb-4 leading-relaxed">
            Masalah ini dapat diselesaikan dengan beberapa pendekatan:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-2">
            <li>
              <span className="font-medium text-accentBlue">Brute Force:</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Memeriksa semua kemungkinan subset</li>
                <li>Kompleksitas waktu O(2^n)</li>
              </ul>
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Dynamic Programming:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Menggunakan tabel untuk menyimpan hasil subproblem</li>
                <li>Kompleksitas waktu O(n*target)</li>
              </ul>
            </li>
            <li>
              <span className="font-medium text-accentBlue">Backtracking:</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Mencoba kombinasi secara rekursif dengan pemangkasan</li>
                <li>Lebih efisien daripada brute force</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Pseudocode Subset Sum */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Pseudocode Subset Sum (Dynamic Programming)
          </h2>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            <code>{`subsetSum(numbers, target):
  n = panjang(numbers)
  buat tabel dp[n+1][target+1]
  
  untuk i dari 0 sampai n:
    dp[i][0] = true
  
  untuk j dari 1 sampai target:
    dp[0][j] = false
  
  untuk i dari 1 sampai n:
    untuk j dari 1 sampai target:
      jika numbers[i-1] <= j:
        dp[i][j] = dp[i-1][j] atau dp[i-1][j-numbers[i-1]]
      lain:
        dp[i][j] = dp[i-1][j]
  
  kembalikan dp[n][target]`}</code>
          </pre>
        </section>

        {/* Implementasi JavaScript */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi JavaScript
          </h2>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            <code>{`function subsetSum(numbers, target) {
  const n = numbers.length;
  const dp = Array(n + 1).fill().map(() => Array(target + 1).fill(false));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      if (numbers[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - numbers[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][target];
}

// Contoh penggunaan
const numbers = [3, 34, 4, 12, 5, 2];
const target = 9;
console.log(subsetSum(numbers, target)); // Output: true`}</code>
          </pre>
        </section>

        {/* Kapan Menggunakan Subset Sum? */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kapan Menggunakan Subset Sum?
          </h2>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Pengambilan keputusan:
              </span>
              Untuk masalah berbasis himpunan dengan target tertentu
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Knapsack problem:
              </span>
              Sebagai dasar untuk masalah optimasi seperti knapsack
            </li>
            <li>
              <span className="font-medium text-accentBlue">Kriptografi:</span>
              Dalam beberapa aplikasi kriptografi
            </li>
            <li>
              <span className="font-medium text-accentBlue">Penjadwalan:</span>
              Untuk alokasi sumber daya dengan batasan tertentu
            </li>
          </ul>
        </section>

        {/* Analisis Kompleksitas */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Analisis Kompleksitas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-accentBlue mb-2">
                Kompleksitas Waktu:
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <span className="font-medium text-accentBlue">
                    Brute Force:
                  </span>{" "}
                  O(2^n)
                </li>
                <li>
                  <span className="font-medium text-accentBlue">
                    Dynamic Programming:
                  </span>{" "}
                  O(n*target)
                </li>
                <li>
                  <span className="font-medium text-accentBlue">
                    Backtracking:
                  </span>{" "}
                  O(2^n) worst case
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-accentBlue mb-2">
                Kompleksitas Ruang:
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <span className="font-medium text-accentBlue">
                    Brute Force:
                  </span>{" "}
                  O(n)
                </li>
                <li>
                  <span className="font-medium text-accentBlue">
                    Dynamic Programming:
                  </span>{" "}
                  O(n*target)
                </li>
                <li>
                  <span className="font-medium text-accentBlue">
                    Backtracking:
                  </span>{" "}
                  O(n)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Kesimpulan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kesimpulan
          </h2>
          <p className="leading-relaxed">
            Subset Sum Problem adalah contoh fundamental dari masalah
            NP-Complete yang menunjukkan kekuatan dan keterbatasan berbagai
            pendekatan algoritmik. Solusi dynamic programming memberikan cara
            yang efisien untuk kasus dengan target yang tidak terlalu besar,
            sementara untuk kasus umum, masalah ini tetap menjadi tantangan
            dalam teori kompleksitas komputasi. Pemahaman tentang masalah ini
            penting sebagai dasar untuk mempelajari banyak masalah optimasi dan
            keputusan lainnya dalam ilmu komputer.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-textLight text-sm">
        <p></p>
      </footer>
    </div>
  );
}
