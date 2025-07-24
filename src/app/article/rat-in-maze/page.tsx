// app/rat-in-maze/page.tsx

import React from "react";
import Link from "next/link";

export default function RatInMazePage() {
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
          Memahami Algoritma Rat in Maze
        </h1>
        <p className="text-xl text-lightBlue">
          Pelajari bagaimana menemukan jalur keluar untuk tikus dalam labirin
          menggunakan backtracking.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {/* Apa itu Algoritma Rat in Maze? */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Apa itu Algoritma Rat in Maze?
          </h2>
          <p className="mb-4 leading-relaxed">
            Algoritma Rat in Maze adalah sebuah pendekatan klasik dalam
            pemecahan masalah labirin yang menggunakan teknik{" "}
            <span className="font-semibold text-accentBlue">backtracking</span>.
            Masalah ini melibatkan pencarian jalur dari titik awal (biasanya
            pojok kiri atas) ke titik tujuan (biasanya pojok kanan bawah) dalam
            sebuah labirin yang direpresentasikan sebagai matriks 2D.
          </p>
          <p className="leading-relaxed">
            Algoritma ini memiliki aplikasi dalam berbagai bidang, seperti:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">Robotika:</span>{" "}
              Navigasi robot dalam lingkungan yang tidak diketahui
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Game development:
              </span>{" "}
              AI untuk karakter dalam game labirin
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Jaringan komputer:
              </span>{" "}
              Routing paket data dalam jaringan kompleks
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Biologi komputasi:
              </span>{" "}
              Simulasi pergerakan organisme dalam lingkungan terbatas
            </li>
          </ul>
        </section>

        {/* Cara Kerja Algoritma Rat in Maze */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Cara Kerja Algoritma Rat in Maze
          </h2>
          <p className="mb-4 leading-relaxed">
            Algoritma ini bekerja dengan mencoba semua jalur yang mungkin dari
            titik awal ke titik tujuan, dan kembali mundur (backtrack) ketika
            menemui jalan buntu. Berikut langkah-langkahnya:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-2">
            <li>
              <span className="font-semibold text-accentBlue">
                Inisialisasi:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Buat matriks solusi dengan ukuran yang sama dengan labirin,
                  diisi dengan 0
                </li>
                <li>Mulai dari posisi awal (biasanya [0][0])</li>
                <li>
                  Tandai posisi saat ini dalam matriks solusi sebagai 1 (bagian
                  dari jalur solusi)
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">Eksplorasi:</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Coba bergerak ke arah bawah, kanan, atas, atau kiri (prioritas
                  bisa diatur)
                </li>
                <li>
                  Untuk setiap arah yang mungkin:
                  <ul className="list-circle list-inside ml-4 mt-1">
                    <li>
                      Periksa apakah posisi baru valid (dalam batas labirin,
                      bukan tembok, belum dikunjungi)
                    </li>
                    <li>
                      Jika valid, rekursif lanjutkan pencarian dari posisi baru
                    </li>
                    <li>Jika mencapai titik tujuan, catat solusinya</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">
                Backtracking:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Jika semua arah dari posisi saat ini tidak valid, kembali
                  mundur (backtrack)
                </li>
                <li>
                  Tandai posisi saat ini dalam matriks solusi sebagai 0 lagi
                </li>
                <li>Kembali ke posisi sebelumnya dan coba arah lainnya</li>
              </ul>
            </li>
          </ol>
          <p className="mt-4 leading-relaxed">
            Algoritma ini menjamin akan menemukan semua jalur yang mungkin (jika
            ada) dengan mengeksplorasi semua kemungkinan gerakan secara
            sistematis.
          </p>
        </section>

        {/* Contoh Permasalahan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Contoh Permasalahan
          </h2>
          <p className="mb-4 leading-relaxed">
            Bayangkan sebuah labirin 4x4 seperti berikut (1 = jalan, 0 =
            tembok):
          </p>

          <div className="grid grid-cols-4 gap-1 w-48 mx-auto mb-6">
            <div className="bg-green-500 p-3 text-center">1</div>
            <div className="bg-gray-700 p-3 text-center">0</div>
            <div className="bg-gray-700 p-3 text-center">0</div>
            <div className="bg-gray-700 p-3 text-center">0</div>

            <div className="bg-green-500 p-3 text-center">1</div>
            <div className="bg-green-500 p-3 text-center">1</div>
            <div className="bg-gray-700 p-3 text-center">0</div>
            <div className="bg-gray-700 p-3 text-center">0</div>

            <div className="bg-gray-700 p-3 text-center">0</div>
            <div className="bg-green-500 p-3 text-center">1</div>
            <div className="bg-gray-700 p-3 text-center">0</div>
            <div className="bg-gray-700 p-3 text-center">0</div>

            <div className="bg-gray-700 p-3 text-center">0</div>
            <div className="bg-green-500 p-3 text-center">1</div>
            <div className="bg-green-500 p-3 text-center">1</div>
            <div className="bg-green-500 p-3 text-center">1</div>
          </div>

          <p className="mb-4 leading-relaxed">
            <strong>Titik awal:</strong> (0,0) - pojok kiri atas
            <br />
            <strong>Titik tujuan:</strong> (3,3) - pojok kanan bawah
            <br />
            <strong>Jalur yang mungkin:</strong> 1 jalan (ditandai hijau)
          </p>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Langkah-langkah solusi:
          </h3>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
            <li>Mulai di (0,0)</li>
            <li>Turun ke (1,0)</li>
            <li>Ke kanan ke (1,1)</li>
            <li>Turun ke (2,1)</li>
            <li>Turun ke (3,1)</li>
            <li>Ke kanan ke (3,2)</li>
            <li>Ke kanan ke (3,3) - tujuan tercapai!</li>
          </ol>
        </section>

        {/* Implementasi Kode (Python) */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi Kode (Python)
          </h2>
          <p className="mb-4 leading-relaxed">
            Berikut adalah implementasi algoritma Rat in Maze menggunakan Python
            dengan pendekatan rekursif:
          </p>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`# Ukuran labirin
N = 4

# Fungsi utilitas untuk mencetak solusi
def print_solution(sol):
    for i in range(N):
        for j in range(N):
            print(sol[i][j], end=" ")
        print()

# Fungsi untuk memeriksa apakah x,y valid untuk labirin N*N
def is_safe(maze, x, y):
    # Periksa jika x,y dalam range dan cell bernilai 1 (jalan)
    if 0 <= x < N and 0 <= y < N and maze[x][y] == 1:
        return True
    return False

# Fungsi utama untuk menyelesaikan masalah labirin
def solve_maze(maze):
    # Buat matriks solusi, diisi dengan 0
    sol = [[0 for _ in range(N)] for _ in range(N)]
    
    if not solve_maze_util(maze, 0, 0, sol):
        print("Tidak ada solusi")
        return False
    
    print_solution(sol)
    return True

# Fungsi utilitas rekursif untuk menyelesaikan masalah labirin
def solve_maze_util(maze, x, y, sol):
    # Jika mencapai tujuan, return True
    if x == N-1 and y == N-1 and maze[x][y] == 1:
        sol[x][y] = 1
        return True
    
    # Periksa apakah maze[x][y] valid
    if is_safe(maze, x, y):
        # Tandai cell sebagai bagian dari solusi
        sol[x][y] = 1
        
        # Bergerak ke kanan
        if solve_maze_util(maze, x, y+1, sol):
            return True
            
        # Jika bergerak ke kanan tidak memberikan solusi, coba ke bawah
        if solve_maze_util(maze, x+1, y, sol):
            return True
            
        # Jika tidak ada gerakan yang berhasil, BACKTRACK: unmark cell
        sol[x][y] = 0
        return False
    
    return False

# Driver code
if __name__ == "__main__":
    # Inisialisasi labirin
    maze = [
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 1]
    ]
    
    solve_maze(maze)`}
          </pre>
          <p className="mt-4 leading-relaxed">
            Output dari kode di atas akan menampilkan matriks solusi dengan
            jalur yang ditandai angka 1.
          </p>
        </section>

        {/* Implementasi Kode (JavaScript) */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi Kode (JavaScript)
          </h2>
          <p className="mb-4 leading-relaxed">
            Berikut implementasi yang sama dalam JavaScript untuk digunakan di
            aplikasi web:
          </p>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`function solveMaze(maze) {
    const N = maze.length;
    // Buat matriks solusi
    const sol = Array(N).fill().map(() => Array(N).fill(0));
    
    function isSafe(x, y) {
        return x >= 0 && x < N && y >= 0 && y < N && maze[x][y] === 1;
    }
    
    function solveUtil(x, y) {
        // Jika mencapai tujuan
        if (x === N-1 && y === N-1 && maze[x][y] === 1) {
            sol[x][y] = 1;
            return true;
        }
        
        // Periksa apakah cell valid
        if (isSafe(x, y)) {
            // Tandai sebagai bagian dari solusi
            sol[x][y] = 1;
            
            // Coba bergerak ke kanan
            if (solveUtil(x, y+1)) return true;
            
            // Jika tidak berhasil, coba ke bawah
            if (solveUtil(x+1, y)) return true;
            
            // Jika tidak ada yang berhasil, backtrack
            sol[x][y] = 0;
            return false;
        }
        
        return false;
    }
    
    if (!solveUtil(0, 0)) {
        console.log("Tidak ada solusi");
        return null;
    }
    
    return sol;
}

// Contoh penggunaan
const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 1]
];

const solution = solveMaze(maze);
console.log(solution);`}
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
            Kompleksitas waktu dari algoritma Rat in Maze adalah{" "}
            <strong>O(2^(n^2))</strong> dalam kasus terburuk. Ini karena dalam
            skenario terburuk, kita mungkin harus mengeksplorasi semua
            kemungkinan jalur dalam matriks n×n.
          </p>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Kompleksitas Ruang:
          </h3>
          <p className="mb-4 leading-relaxed">
            Kompleksitas ruang adalah <strong>O(n^2)</strong> karena kita perlu
            menyimpan matriks solusi yang berukuran sama dengan labirin asli.
          </p>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Optimasi:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Pencarian Heuristik:
              </span>{" "}
              Menggunakan algoritma seperti A* dengan heuristic function bisa
              lebih efisien
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Dynamic Programming:
              </span>{" "}
              Untuk labirin tertentu, DP bisa digunakan untuk menghindari
              komputasi ulang
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Multithreading:
              </span>{" "}
              Pencarian paralel untuk labirin besar
            </li>
          </ul>
        </section>

        {/* Kelebihan dan Kekurangan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kelebihan dan Kekurangan
          </h2>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Kelebihan Algoritma Rat in Maze:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Sederhana dan intuitif:
              </span>{" "}
              Mudah dipahami dan diimplementasikan
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Menemukan semua solusi:
              </span>{" "}
              Dapat dimodifikasi untuk menemukan semua jalur yang mungkin
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Dasar untuk algoritma lain:
              </span>{" "}
              Konsep backtracking digunakan dalam banyak algoritma lain
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-accentBlue mt-6 mb-2">
            Kekurangan Algoritma Rat in Maze:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Kompleksitas waktu tinggi:
              </span>{" "}
              Tidak efisien untuk labirin besar
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Stack overflow:
              </span>{" "}
              Implementasi rekursif bisa menyebabkan stack overflow untuk
              labirin besar
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Tidak selalu optimal:
              </span>{" "}
              Jalur pertama yang ditemukan belum tentu yang terpendek
            </li>
          </ul>
        </section>

        {/* Kesimpulan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kesimpulan
          </h2>
          <p className="leading-relaxed">
            Algoritma Rat in Maze adalah contoh klasik dari penggunaan teknik
            backtracking untuk memecahkan masalah pencarian jalur. Meskipun
            memiliki kompleksitas waktu yang tinggi, algoritma ini memberikan
            dasar yang penting untuk memahami konsep rekursi dan backtracking
            yang digunakan dalam banyak algoritma lain. Untuk labirin kecil,
            pendekatan ini sangat efektif dan mudah diimplementasikan. Untuk
            labirin besar, algoritma heuristik seperti A* mungkin lebih sesuai.
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
