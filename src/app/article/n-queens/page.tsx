// app/n-queens/page.tsx

import React from "react";
import Link from "next/link";

export default function NQueensPage() {
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
          Masalah N-Queen
        </h1>
        <p className="text-xl text-lightBlue">
          Teka-teki backtracking klasik: Menempatkan N ratu pada papan catur N×N
          tanpa saling menyerang
        </p>
      </header>

      {/* Konten Utama */}
      <main className="max-w-4xl mx-auto">
        {/* Apa itu Masalah N-Queen? */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Apa itu Masalah N-Queen?
          </h2>
          <p className="mb-4 leading-relaxed">
            <span className="font-semibold text-accentBlue">
              Masalah N-Queen
            </span>{" "}
            adalah teka-teki ilmu komputer klasik yang bertanya: "Dengan papan
            catur N×N, bagaimana cara menempatkan N ratu pada papan sehingga
            tidak ada dua ratu yang saling mengancam?" Artinya tidak ada dua
            ratu yang berada pada baris, kolom, atau diagonal yang sama.
          </p>
          <p className="leading-relaxed">
            Masalah ini pertama kali diajukan pada tahun 1848 oleh komposer
            catur Max Bezzel dan sejak itu menjadi:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Patokan untuk algoritma backtracking</li>
            <li>Pertanyaan wawancara umum untuk peran teknis</li>
            <li>Alat pengajaran untuk rekursi dan penyelesaian kendala</li>
            <li>Topik penelitian dalam matematika dan ilmu komputer</li>
          </ul>
        </section>

        {/* Kendala Masalah */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kendala Masalah
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-accentBlue mb-2">
                Pergerakan Ratu Catur:
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Bisa bergerak sejumlah kotak secara vertikal</li>
                <li>Bisa bergerak sejumlah kotak secara horizontal</li>
                <li>Bisa bergerak sejumlah kotak secara diagonal</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-accentBlue mb-2">
                Persyaratan Solusi:
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Tepat N ratu pada papan N×N</li>
                <li>Tidak ada dua ratu pada baris yang sama</li>
                <li>Tidak ada dua ratu pada kolom yang sama</li>
                <li>Tidak ada dua ratu pada diagonal yang sama</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contoh: Masalah 4-Ratu */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Contoh: Masalah 4-Ratu
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 leading-relaxed">
                Untuk N=4, ada 2 solusi fundamental (dengan rotasi dan refleksi
                dianggap sama):
              </p>
              <div className="grid grid-cols-4 gap-1 w-48 mx-auto mb-6">
                <div className="border border-gray-600 p-3 text-center">♕</div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>

                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center">♕</div>
                <div className="border border-gray-600 p-3 text-center"></div>

                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center">♕</div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>

                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center">♕</div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-4 gap-1 w-48 mx-auto mb-6">
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center">♕</div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>

                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center">♕</div>

                <div className="border border-gray-600 p-3 text-center">♕</div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>

                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center"></div>
                <div className="border border-gray-600 p-3 text-center">♕</div>
                <div className="border border-gray-600 p-3 text-center"></div>
              </div>
            </div>
          </div>
          <p className="leading-relaxed">
            Masalah 8-Ratu (papan catur standar) memiliki 92 solusi, dengan 12
            solusi fundamental jika menganggap rotasi dan refleksi sebagai
            identik.
          </p>
        </section>

        {/* Pendekatan Backtracking */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Pendekatan Backtracking
          </h2>
          <p className="mb-4 leading-relaxed">
            Solusi standar menggunakan{" "}
            <span className="font-semibold text-accentBlue">
              algoritma backtracking
            </span>{" "}
            yang:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-2">
            <li>
              Menempatkan ratu satu per satu di kolom berbeda
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Mulai dari kolom paling kiri</li>
                <li>Coba semua baris di kolom saat ini</li>
              </ul>
            </li>
            <li>
              Untuk setiap penempatan, periksa apakah ratu aman
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Tidak ada ratu di baris yang sama di sebelah kiri</li>
                <li>Tidak ada ratu di diagonal atas ke kiri</li>
                <li>Tidak ada ratu di diagonal bawah ke kiri</li>
              </ul>
            </li>
            <li>
              Jika aman, tempatkan ratu secara rekursif di kolom berikutnya
            </li>
            <li>
              Jika tidak ada posisi aman, backtrack ke kolom sebelumnya
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Hapus ratu dari posisi saat ini</li>
                <li>Coba baris berikutnya di kolom sebelumnya</li>
              </ul>
            </li>
          </ol>
          <div className="mt-6 p-4 bg-darkBlue rounded-md">
            <h3 className="text-xl font-semibold text-accentBlue mb-2">
              Wawasan Utama:
            </h3>
            <p>
              Kita hanya perlu memeriksa konflik dengan ratu di sebelah kiri
              posisi saat ini karena:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Kita menempatkan ratu kolom demi kolom</li>
              <li>Kolom kanan masih kosong</li>
              <li>Ini mengurangi jumlah pemeriksaan yang diperlukan</li>
            </ul>
          </div>
        </section>

        {/* Implementasi Python */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi Python
          </h2>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`def solve_n_queens(n):
    def is_safe(board, row, col):
        # Periksa baris ini di sisi kiri
        for i in range(col):
            if board[row][i] == 1:
                return False
        
        # Periksa diagonal atas di sisi kiri
        for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
            if board[i][j] == 1:
                return False
        
        # Periksa diagonal bawah di sisi kiri
        for i, j in zip(range(row, n, 1), range(col, -1, -1)):
            if board[i][j] == 1:
                return False
        
        return True

    def solve_util(board, col):
        # Kasus dasar: Jika semua ratu ditempatkan
        if col >= n:
            solutions.append([row[:] for row in board])
            return True
        
        # Pertimbangkan kolom ini dan coba tempatkan ratu di semua baris
        res = False
        for i in range(n):
            if is_safe(board, i, col):
                board[i][col] = 1
                
                # Rekursi untuk menempatkan ratu sisanya
                res = solve_util(board, col + 1) or res
                
                # Backtrack: hapus ratu jika tidak ditemukan solusi
                board[i][col] = 0
        
        return res

    solutions = []
    board = [[0 for _ in range(n)] for _ in range(n)]
    solve_util(board, 0)
    return solutions

# Contoh penggunaan
n = 4
solutions = solve_n_queens(n)
print(f"Jumlah solusi untuk {n}-Ratu:", len(solutions))
for sol in solutions:
    for row in sol:
        print(' '.join('Q' if cell else '.' for cell in row))
    print()`}
          </pre>
        </section>

        {/* Implementasi JavaScript */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi JavaScript
          </h2>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`function solveNQueens(n) {
    const solutions = [];
    
    function isSafe(board, row, col) {
        // Periksa sisi kiri baris saat ini
        for (let i = 0; i < col; i++) {
            if (board[row][i] === 1) return false;
        }
        
        // Periksa diagonal atas
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 1) return false;
        }
        
        // Periksa diagonal bawah
        for (let i = row, j = col; i < n && j >= 0; i++, j--) {
            if (board[i][j] === 1) return false;
        }
        
        return true;
    }
    
    function solveUtil(board, col) {
        // Semua ratu ditempatkan
        if (col === n) {
            // Tambahkan solusi (salin papan)
            solutions.push(board.map(row => [...row]));
            return;
        }
        
        // Coba semua baris di kolom saat ini
        for (let i = 0; i < n; i++) {
            if (isSafe(board, i, col)) {
                board[i][col] = 1;  // Tempatkan ratu
                solveUtil(board, col + 1);
                board[i][col] = 0;  // Backtrack
            }
        }
    }
    
    // Inisialisasi papan kosong
    const board = Array(n).fill().map(() => Array(n).fill(0));
    solveUtil(board, 0);
    
    return solutions;
}

// Contoh penggunaan
const n = 4;
const solutions = solveNQueens(n);
console.log('Jumlah solusi untuk N-Queen:', solutions.length);
solutions.forEach((sol, idx) => {
    console.log("Solusi idx + 1:");
    console.log(sol.map(row => row.map(cell => cell ? 'Q' : '.').join(' ')).join('\\n'));
    console.log();
});`}
          </pre>
        </section>

        {/* Optimisasi */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Optimisasi dan Variasi
          </h2>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Optimisasi:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">Bitmasking:</span>
              Representasikan keadaan papan dengan bit untuk pemeriksaan konflik
              lebih cepat
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Pemecahan simetri:
              </span>
              Manfaatkan simetri papan untuk mengurangi komputasi
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Pendekatan iteratif:
              </span>
              Hindari batas stack rekursi untuk N besar
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-accentBlue mt-6 mb-2">
            Variasi:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">N-Benteng:</span>
              Ratu hanya bisa bergerak seperti benteng (tanpa kendala diagonal)
            </li>
            <li>
              <span className="font-medium text-accentBlue">Superqueens:</span>
              Ratu yang juga bisa bergerak seperti kuda
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Papan toroidal:
              </span>
              Papan yang melingkar di tepinya
            </li>
            <li>
              <span className="font-medium text-accentBlue">N-Queen 3D:</span>
              Ekstensi ke papan tiga dimensi
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
              <p className="mb-2">
                Pendekatan backtracking naif memiliki kompleksitas waktu{" "}
                <strong>O(N!)</strong> dalam kasus terburuk.
              </p>
              <p>Ini karena:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Kolom pertama memiliki N pilihan</li>
                <li>Kolom kedua memiliki paling banyak N-1 pilihan</li>
                <li>Kolom ketiga memiliki paling banyak N-2 pilihan</li>
                <li>Dan seterusnya...</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-accentBlue mb-2">
                Kompleksitas Ruang:
              </h3>
              <p className="mb-2">
                Kompleksitas ruang adalah <strong>O(N²)</strong> untuk menyimpan
                papan.
              </p>
              <p>Dengan optimisasi:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Bitmasking dapat mengurangi menjadi O(N)</li>
                <li>Stack rekursi menambah ruang O(N)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Aplikasi Dunia Nyata */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Aplikasi Dunia Nyata
          </h2>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Komputasi paralel:
              </span>
              Penjadwalan tugas di mana tugas tidak boleh konflik
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Pengujian VLSI:
              </span>
              Aplikasi desain dan pengujian chip
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Kontrol lalu lintas udara:
              </span>
              Penjadwalan pesawat di landasan pacu tanpa konflik
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Penyelesaian kendala:
              </span>
              Patokan untuk pemecah CSP
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Pendidikan algoritma:
              </span>
              Pengajaran backtracking dan rekursi
            </li>
          </ul>
        </section>

        {/* Kesimpulan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kesimpulan
          </h2>
          <p className="leading-relaxed">
            Masalah N-Queen adalah contoh klasik dari masalah penyelesaian
            kendala yang dengan indah menunjukkan kekuatan algoritma
            backtracking. Meskipun solusi naif memiliki kompleksitas
            eksponensial, ini berfungsi sebagai fondasi penting untuk memahami
            teknik yang lebih maju dalam desain algoritma. Kesederhanaan masalah
            dalam perumusan namun kompleksitas dalam solusi membuatnya menjadi
            favorit abadi dalam pendidikan dan penelitian ilmu komputer.
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
