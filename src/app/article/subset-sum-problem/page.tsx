import React from "react";
import Link from "next/link";

export default function SubsetSumArticlePage() {
  return (
    <div className="min-h-screen bg-darkBlue text-textLight p-8">
      <Link
        href="/"
        className="inline-flex items-center text-accentBlue hover:text-textLight transition-colors mb-4"
        aria-label="Kembali ke beranda"
      >
        ← Kembali
      </Link>

      <article className="prose prose-invert max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-accentBlue mb-6">
          Mengenal Subset Sum Problem
        </h1>

        <p>
          <strong>Subset Sum Problem</strong> adalah masalah klasik dalam ilmu
          komputer yang termasuk dalam kategori masalah NP-Complete. Masalah ini
          bertujuan untuk menentukan apakah ada subset dari sebuah himpunan
          bilangan bulat yang jumlahnya sama dengan nilai target tertentu.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Karakteristik Subset Sum Problem
        </h2>
        <ul className="list-disc ml-6">
          <li>Input berupa himpunan bilangan bulat dan sebuah nilai target.</li>
          <li>
            Output berupa true/false, tergantung pada keberadaan subset yang
            sesuai.
          </li>
          <li>Termasuk dalam masalah optimisasi dan keputusan.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Cara Kerja Subset Sum
        </h2>
        <p>
          Masalah ini dapat diselesaikan dengan beberapa pendekatan, seperti:
        </p>
        <ol className="list-decimal ml-6">
          <li>
            <strong>Brute Force</strong>: Memeriksa semua kemungkinan subset.
          </li>
          <li>
            <strong>Dynamic Programming</strong>: Menggunakan tabel untuk
            menyimpan hasil subproblem.
          </li>
          <li>
            <strong>Backtracking</strong>: Mencoba kombinasi secara rekursif
            dengan pemangkasan.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Pseudocode Subset Sum (Dynamic Programming)
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
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

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Contoh Implementasi dalam JavaScript
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
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
console.log(subsetSum(numbers, target)); // Output: true
`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Kapan Menggunakan Subset Sum?
        </h2>
        <ul className="list-disc ml-6">
          <li>
            Untuk menyelesaikan masalah pengambilan keputusan berbasis himpunan.
          </li>
          <li>Dalam optimisasi masalah seperti knapsack problem.</li>
          <li>Untuk aplikasi di bidang kriptografi dan penjadwalan.</li>
        </ul>
      </article>
    </div>
  );
}
