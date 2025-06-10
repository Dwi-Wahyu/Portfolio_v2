// app/dfs/page.tsx
// (Atau sesuaikan path sesuai struktur proyek Anda)

import React from "react";
import Link from "next/link"; // Import Link dari Next.js untuk navigasi

export default function DFSArticlePage() {
  return (
    <div className="min-h-screen bg-darkBlue text-textLight p-8">
      {/* Tombol Kembali ke Beranda */}
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
          Memahami Algoritma Depth-First Search (DFS)
        </h1>
        <p className="text-xl text-lightBlue">
          Selami dunia penjelajahan grafik secara mendalam.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {/* Apa itu Algoritma DFS? */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Apa itu Algoritma Depth-First Search (DFS)?
          </h2>
          <p className="mb-4 leading-relaxed">
            Depth-First Search (DFS) adalah algoritma untuk melintasi atau
            mencari elemen dalam struktur data seperti pohon atau grafik.
            Algoritma ini memulai penjelajahan dari sebuah node akar (atau node
            yang dipilih) dan menjelajahi sejauh mungkin di sepanjang setiap
            cabang sebelum melakukan *backtrack*. Ini seperti menjelajahi sebuah
            labirin: Anda memilih satu jalur dan mengikutinya sejauh mungkin
            hingga Anda menemui jalan buntu atau menemukan yang Anda cari, baru
            kemudian Anda kembali (backtrack) dan mencoba jalur lain.
          </p>
          <p className="leading-relaxed">
            DFS memiliki berbagai aplikasi penting dalam ilmu komputer, di
            antaranya:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Pencarian jalur:
              </span>{" "}
              Menemukan jalur antara dua node dalam grafik.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Deteksi siklus:
              </span>{" "}
              Mengidentifikasi apakah ada siklus dalam grafik.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Pengurutan topologis:
              </span>{" "}
              (Alternatif untuk Algoritma Kahn) untuk grafik asiklik terarah
              (DAG).
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Menemukan komponen terhubung:
              </span>{" "}
              Mengidentifikasi semua node yang dapat dijangkau dari node
              tertentu.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Penyelesaian puzzle:
              </span>{" "}
              Seperti memecahkan labirin atau Sudoku.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Analisis jaringan:
              </span>{" "}
              Menjelajahi struktur jaringan.
            </li>
          </ul>
        </section>

        {/* Cara Kerja Algoritma DFS */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Cara Kerja Algoritma Depth-First Search (DFS)
          </h2>
          <p className="mb-4 leading-relaxed">
            DFS biasanya diimplementasikan menggunakan tumpukan (stack) atau
            secara rekursif (yang secara implisit menggunakan stack panggilan
            sistem). Berikut adalah langkah-langkah intinya:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-2">
            <li>
              <span className="font-semibold text-accentBlue">
                Inisialisasi:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Buat sebuah set (atau array boolean) untuk melacak node yang
                  sudah{" "}
                  <span className="font-semibold text-accentBlue">
                    dikunjungi
                  </span>
                  .
                </li>
                <li>
                  Mulai dari sebuah{" "}
                  <span className="font-semibold text-accentBlue">
                    node awal
                  </span>{" "}
                  (start node). Tandai node ini sebagai dikunjungi dan tambahkan
                  ke tumpukan (jika menggunakan implementasi iteratif).
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">
                Penjelajahan:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Selama tumpukan tidak kosong (atau jika fungsi rekursif
                  dipanggil):
                  <ul className="list-circle list-inside ml-4 mt-1">
                    <li>
                      Ambil (pop) node teratas dari tumpukan (atau dari
                      parameter fungsi rekursif, yaitu node saat ini).
                    </li>
                    <li>
                      Proses node ini (misalnya, cetak, tambahkan ke daftar
                      hasil).
                    </li>
                    <li>
                      Untuk setiap{" "}
                      <span className="font-semibold text-accentBlue">
                        tetangga
                      </span>{" "}
                      dari node saat ini yang{" "}
                      <span className="font-semibold text-accentBlue">
                        belum dikunjungi
                      </span>
                      :
                      <ul className="list-square list-inside ml-4 mt-1">
                        <li>Tandai tetangga tersebut sebagai dikunjungi.</li>
                        <li>
                          Tambahkan tetangga tersebut ke tumpukan (jika
                          iteratif) atau panggil fungsi DFS secara rekursif pada
                          tetangga tersebut.
                        </li>
                      </ul>
                    </li>
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
                  Ketika semua tetangga dari sebuah node telah dikunjungi atau
                  tidak ada tetangga yang belum dikunjungi, algoritma secara
                  otomatis akan "kembali" (backtrack) ke node sebelumnya di
                  tumpukan (atau kembali dari panggilan rekursif) dan
                  melanjutkan penjelajahan dari sana.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Contoh Permasalahan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Contoh Permasalahan
          </h2>
          <p className="mb-4 leading-relaxed">
            Mari kita gunakan contoh grafik sederhana untuk memahami DFS:
          </p>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2 mt-4">
            Grafik:
          </h3>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`    A
   / \\
  B   C
 / \\   \\
D   E   F
`}
          </pre>
          <p className="mt-4 mb-2 leading-relaxed">
            Tujuan: Jelajahi grafik ini menggunakan DFS, dimulai dari Node A.
          </p>
          <p className="leading-relaxed">
            Langkah-langkah dengan Algoritma DFS (rekursif):
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
            <li>
              Mulai DFS(A).
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Output: A</li>
                <li>Tandai A sebagai dikunjungi.</li>
                <li>Tetangga A adalah B, C.</li>
              </ul>
            </li>
            <li>
              Panggil DFS(B). (DFS menjelajahi ke dalam dari A)
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Output: B</li>
                <li>Tandai B sebagai dikunjungi.</li>
                <li>Tetangga B adalah A, D, E. A sudah dikunjungi.</li>
                <li>Tetangga D belum dikunjungi.</li>
              </ul>
            </li>
            <li>
              Panggil DFS(D). (DFS menjelajahi ke dalam dari B)
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Output: D</li>
                <li>Tandai D sebagai dikunjungi.</li>
                <li>Tidak ada tetangga D yang belum dikunjungi.</li>
                <li>*Backtrack* ke B.</li>
              </ul>
            </li>
            <li>
              Kembali ke DFS(B).
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Tetangga E belum dikunjungi.</li>
              </ul>
            </li>
            <li>
              Panggil DFS(E). (DFS menjelajahi ke dalam dari B)
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Output: E</li>
                <li>Tandai E sebagai dikunjungi.</li>
                <li>Tidak ada tetangga E yang belum dikunjungi.</li>
                <li>*Backtrack* ke B.</li>
              </ul>
            </li>
            <li>
              Kembali ke DFS(B).
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Semua tetangga B sudah dikunjungi.</li>
                <li>*Backtrack* ke A.</li>
              </ul>
            </li>
            <li>
              Kembali ke DFS(A).
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Tetangga C belum dikunjungi.</li>
              </ul>
            </li>
            <li>
              Panggil DFS(C). (DFS menjelajahi ke dalam dari A)
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Output: C</li>
                <li>Tandai C sebagai dikunjungi.</li>
                <li>Tetangga C adalah A, F. A sudah dikunjungi.</li>
                <li>Tetangga F belum dikunjungi.</li>
              </ul>
            </li>
            <li>
              Panggil DFS(F). (DFS menjelajahi ke dalam dari C)
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Output: F</li>
                <li>Tandai F sebagai dikunjungi.</li>
                <li>Tidak ada tetangga F yang belum dikunjungi.</li>
                <li>*Backtrack* ke C.</li>
              </ul>
            </li>
            <li>
              Kembali ke DFS(C).
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Semua tetangga C sudah dikunjungi.</li>
                <li>*Backtrack* ke A.</li>
              </ul>
            </li>
            <li>
              Kembali ke DFS(A).
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Semua tetangga A sudah dikunjungi.</li>
                <li>DFS selesai.</li>
              </ul>
            </li>
          </ol>
          <p className="mt-4 leading-relaxed">
            Urutan Penjelajahan (Output):{" "}
            <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
              A, B, D, E, C, F
            </code>
          </p>
        </section>

        {/* Implementasi Kode (C++) */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi Kode (C++)
          </h2>
          <p className="mb-4 leading-relaxed">
            Berikut adalah contoh implementasi Algoritma DFS sederhana
            menggunakan C++. Dalam konteks Next.js, Anda mungkin akan
            berinteraksi dengan algoritma ini melalui API atau library yang
            ditulis dalam bahasa lain (misalnya Python atau JavaScript untuk
            backend), atau mengimplementasikannya dalam JavaScript/TypeScript
            jika grafiknya kecil dan di sisi klien.
          </p>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`#include <iostream>
#include <vector>
#include <stack>   // Untuk implementasi iteratif
#include <set>     // Atau std::vector<bool> visited;

// Representasi graf menggunakan adjacency list
// adj[u] akan berisi daftar node yang terhubung dari u
std::vector<std::vector<int>> adj;
std::vector<bool> visited; // Untuk melacak node yang sudah dikunjungi

// Fungsi DFS Rekursif
void dfsRecursive(int u) {
    visited[u] = true;
    std::cout << u << " "; // Proses node (misalnya, cetak)

    // Iterasi melalui semua tetangga dari node u
    // Asumsi graf tidak berarah, jadi sisi A-B berarti A->B dan B->A
    // Untuk graf berarah, hanya tambahkan sisi sekali sesuai arah.
    for (int v : adj[u]) {
        if (!visited[v]) {
            dfsRecursive(v); // Panggil DFS rekursif untuk tetangga yang belum dikunjungi
        }
    }
}

// Fungsi DFS Iteratif (menggunakan stack eksplisit)
void dfsIterative(int startNode) {
    // Inisialisasi visited khusus untuk iteratif agar bisa di-run terpisah
    std::vector<bool> localVisited(adj.size(), false);
    std::stack<int> s;

    s.push(startNode); // Masukkan node awal ke stack
    localVisited[startNode] = true; // Tandai sebagai dikunjungi

    while (!s.empty()) {
        int u = s.top(); // Ambil node teratas
        s.pop();         // Hapus dari stack

        std::cout << u << " "; // Proses node

        // Penting: Masukkan tetangga ke stack dalam urutan terbalik
        // agar node dengan indeks lebih kecil (atau sesuai urutan adj)
        // diproses lebih dulu saat pop. Ini meniru perilaku rekursif
        // yang secara implisit memproses anak pertama yang ditemui.
        for (int i = adj[u].size() - 1; i >= 0; --i) {
            int v = adj[u][i];
            if (!localVisited[v]) {
                localVisited[v] = true;
                s.push(v);
            }
        }
    }
}

int main() {
    int numNodes = 6; // Node 0 hingga 5 (A=0, B=1, C=2, D=3, E=4, F=5)
    adj.resize(numNodes);
    visited.resize(numNodes, false); // Global visited untuk fungsi rekursif

    // Membangun graf (sesuai contoh di atas)
    // Asumsi graf tidak berarah untuk contoh ini (sisi dua arah)
    adj[0].push_back(1); // A <-> B
    adj[1].push_back(0);
    adj[0].push_back(2); // A <-> C
    adj[2].push_back(0);
    adj[1].push_back(3); // B <-> D
    adj[3].push_back(1);
    adj[1].push_back(4); // B <-> E
    adj[4].push_back(1);
    adj[2].push_back(5); // C <-> F
    adj[5].push_back(2);

    std::cout << "DFS Rekursif (mulai dari node 0): ";
    dfsRecursive(0); // Panggil DFS rekursif dari node 0 (A)
    std::cout << "\\n";

    // Untuk menjalankan DFS iteratif, kita perlu membersihkan state global visited
    // jika kita menggunakan visited global untuk kedua fungsi.
    // Namun, karena dfsIterative menggunakan localVisited, ini tidak perlu.
    // Baris ini opsional jika Anda ingin me-reset visited global untuk tujuan lain:
    // std::fill(visited.begin(), visited.end(), false);

    std::cout << "DFS Iteratif (mulai dari node 0): ";
    dfsIterative(0); // Panggil DFS iteratif dari node 0 (A)
    std::cout << "\\n";

    return 0;
}
`}
          </pre>
        </section>

        {/* Kelebihan dan Kekurangan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kelebihan dan Kekurangan
          </h2>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Kelebihan Algoritma DFS:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">Sederhana:</span>{" "}
              Konsepnya mudah dipahami, terutama implementasi rekursifnya.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Penggunaan Memori Lebih Rendah:
              </span>{" "}
              Untuk graf yang luas dan dangkal, DFS bisa menggunakan memori yang
              lebih sedikit dibandingkan BFS (Breadth-First Search) karena tidak
              perlu menyimpan semua node pada level yang sama dalam antrean.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Banyak Aplikasi:
              </span>{" "}
              Efektif untuk mendeteksi siklus, pengurutan topologis, dan
              menemukan komponen terhubung.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Menemukan Jalur:
              </span>{" "}
              Bagus untuk menemukan *salah satu* jalur antara dua node (tidak
              harus yang terpendek).
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-accentBlue mt-6 mb-2">
            Kekurangan Algoritma DFS:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Tidak Optimal untuk Jalur Terpendek:
              </span>{" "}
              DFS tidak menjamin penemuan jalur terpendek dalam graf yang tidak
              berbobot atau berbobot, karena ia menjelajahi "sedalam mungkin"
              terlebih dahulu. Untuk jalur terpendek, BFS atau Dijkstra lebih
              cocok.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Bisa Terjebak dalam Loop (jika tidak ada `visited`):
              </span>{" "}
              Jika graf memiliki siklus dan kita tidak melacak node yang sudah
              dikunjungi, DFS bisa terjebak dalam loop tak terbatas.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Kompleksitas Waktu:
              </span>{" "}
              Kompleksitas waktu DFS adalah{" "}
              <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                O(V + E)
              </code>
              , di mana V adalah jumlah node dan E adalah jumlah sisi, yang
              efisien. Namun, performa aktual dapat bervariasi tergantung pada
              struktur graf.
            </li>
          </ul>
        </section>

        {/* Kesimpulan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kesimpulan
          </h2>
          <p className="leading-relaxed">
            Algoritma Depth-First Search adalah alat yang sangat fundamental dan
            serbaguna dalam dunia algoritma grafik. Kemampuannya untuk
            menjelajahi graf secara mendalam membuatnya ideal untuk tugas-tugas
            seperti deteksi siklus dan pengurutan topologis. Meskipun bukan
            pilihan terbaik untuk mencari jalur terpendek, kesederhanaan dan
            efisiensinya dalam banyak kasus menjadikannya algoritma yang harus
            Anda kuasai.
          </p>
        </section>
      </main>

      {/* Footer (opsional) */}
      <footer className="mt-12 text-center text-textLight text-sm">
        <p>Dibuat dengan ❤️ </p>
      </footer>
    </div>
  );
}
