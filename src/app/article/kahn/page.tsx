// app/kahn/page.tsx
// (Atau sesuaikan path sesuai struktur proyek Anda)

import React from "react";
import Link from "next/link"; // Import Link dari Next.js untuk navigasi

export default function KahnArticlePage() {
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
          Memahami Algoritma Kahn
        </h1>
        <p className="text-xl text-lightBlue">
          Selami dunia pengurutan topologis dengan salah satu algoritma paling
          fundamental.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {/* Apa itu Algoritma Kahn? */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Apa itu Algoritma Kahn?
          </h2>
          <p className="mb-4 leading-relaxed">
            Algoritma Kahn adalah salah satu dari dua algoritma utama yang
            digunakan untuk melakukan{" "}
            <span className="font-semibold text-accentBlue">
              pengurutan topologis (topological sort)
            </span>{" "}
            pada sebuah{" "}
            <span className="font-semibold text-accentBlue">
              Grafik Asiklik Terarah (Directed Acyclic Graph - DAG)
            </span>
            . Pengurutan topologis adalah susunan linier dari node-node
            sedemikian rupa sehingga untuk setiap sisi terarah{" "}
            <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
              (u, v)
            </code>{" "}
            dalam grafik, node{" "}
            <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
              u
            </code>{" "}
            selalu muncul sebelum node{" "}
            <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
              v
            </code>{" "}
            dalam susunan. Penting untuk diingat bahwa pengurutan topologis
            hanya mungkin dilakukan pada DAG (grafik terarah tanpa siklus).
          </p>
          <p className="leading-relaxed">
            Algoritma ini sangat berguna dalam berbagai skenario di mana ada
            ketergantungan antar tugas atau item, misalnya:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Perencanaan tugas:
              </span>{" "}
              Menentukan urutan tugas yang harus diselesaikan di mana beberapa
              tugas bergantung pada penyelesaian tugas lain (misalnya, membangun
              rumah: fondasi harus selesai sebelum dinding).
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Manajemen dependensi paket:
              </span>{" "}
              Mengidentifikasi urutan instalasi paket perangkat lunak di mana
              satu paket mungkin membutuhkan paket lain.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Penyelesaian kursus:
              </span>{" "}
              Menentukan urutan mata kuliah yang harus diambil, di mana beberapa
              mata kuliah memiliki prasyarat.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Kompilasi kode:
              </span>{" "}
              Menentukan urutan kompilasi file sumber yang saling bergantung.
            </li>
          </ul>
        </section>

        {/* Konsep Kunci: In-degree */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Konsep Kunci: In-degree
          </h2>
          <p className="mb-4 leading-relaxed">
            Sebelum memahami cara kerja Algoritma Kahn, kita perlu mengenal
            konsep{" "}
            <span className="font-semibold text-accentBlue">in-degree</span>.
            <span className="font-semibold text-accentBlue">In-degree</span>{" "}
            (atau derajat masuk) dari sebuah node dalam grafik terarah adalah
            jumlah sisi yang{" "}
            <span className="font-semibold text-accentBlue">masuk</span> ke node
            tersebut.
          </p>
          <p className="mb-2 leading-relaxed">Contoh:</p>
          <p className="mb-4 leading-relaxed">
            Jika ada sisi{" "}
            <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
              A {"->"} B
            </code>{" "}
            dan{" "}
            <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
              C {"->"} B
            </code>
            , maka in-degree dari node{" "}
            <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
              B
            </code>{" "}
            adalah 2.
          </p>
          <p className="leading-relaxed">
            Algoritma Kahn bekerja dengan prinsip dasar bahwa node dengan
            in-degree 0 tidak memiliki prasyarat dan oleh karena itu bisa
            menjadi titik awal dalam urutan topologis.
          </p>
        </section>

        {/* Cara Kerja Algoritma Kahn */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Cara Kerja Algoritma Kahn
          </h2>
          <p className="mb-4 leading-relaxed">
            Algoritma Kahn beroperasi secara iteratif, secara bertahap membangun
            urutan topologis. Berikut adalah langkah-langkah intinya:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-2">
            <li>
              <span className="font-semibold text-accentBlue">
                Inisialisasi:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Hitung{" "}
                  <span className="font-semibold text-accentBlue">
                    in-degree
                  </span>{" "}
                  untuk setiap node dalam grafik.
                </li>
                <li>
                  Buat sebuah{" "}
                  <span className="font-semibold text-accentBlue">queue</span>{" "}
                  (antrian) dan tambahkan semua node yang memiliki in-degree{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    0
                  </code>{" "}
                  ke dalamnya. Node-node ini adalah yang pertama dalam urutan
                  topologis.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">
                Proses Iteratif:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Sementara queue tidak kosong:
                  <ul className="list-circle list-inside ml-4 mt-1">
                    <li>
                      Ambil (dequeue) sebuah node dari bagian depan queue.
                      Tambahkan node ini ke daftar hasil pengurutan topologis
                      Anda.
                    </li>
                    <li>
                      Untuk setiap{" "}
                      <span className="font-semibold text-accentBlue">
                        tetangga
                      </span>{" "}
                      dari node yang baru saja diambil:
                      <ul className="list-square list-inside ml-4 mt-1">
                        <li>
                          Kurangi in-degree tetangga tersebut sebanyak{" "}
                          <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                            1
                          </code>
                          .
                        </li>
                        <li>
                          Jika in-degree tetangga tersebut menjadi{" "}
                          <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                            0
                          </code>
                          , tambahkan tetangga tersebut ke queue.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">
                Verifikasi (Opsional, tapi Penting):
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Setelah queue kosong, periksa apakah jumlah node dalam daftar
                  hasil pengurutan topologis sama dengan total jumlah node dalam
                  grafik. Jika tidak sama, ini berarti grafik tersebut
                  mengandung siklus (bukan DAG), dan pengurutan topologis tidak
                  mungkin dilakukan.
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
            Misalkan kita memiliki daftar mata kuliah dan prasyaratnya:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Mata Kuliah A: Tidak ada prasyarat</li>
            <li>Mata Kuliah B: Prasyarat A</li>
            <li>Mata Kuliah C: Prasyarat A</li>
            <li>Mata Kuliah D: Prasyarat B, C</li>
            <li>Mata Kuliah E: Prasyarat D</li>
          </ul>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2 mt-4">
            Grafik Terarah:
          </h3>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`A --> B --> D --> E
|     ^
v     |
C ----|
`}
          </pre>
          <p className="mt-4 mb-2 leading-relaxed">
            Tujuan: Tentukan urutan mata kuliah yang harus diambil.
          </p>
          <p className="leading-relaxed">
            Langkah-langkah dengan Algoritma Kahn:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Inisialisasi In-degree:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>A: 0</li>
                <li>B: 1 (dari A)</li>
                <li>C: 1 (dari A)</li>
                <li>D: 2 (dari B, C)</li>
                <li>E: 1 (dari D)</li>
              </ul>
              <p className="mt-1">
                Queue awal:{" "}
                <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                  [A]
                </code>{" "}
                (karena in-degree A adalah 0)
              </p>
              <p className="mt-1">
                Urutan Topologis:{" "}
                <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                  []
                </code>
              </p>
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Proses Iteratif:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Dequeue A. Urutan:{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    [A]
                  </code>
                  <ul className="list-circle list-inside ml-4 mt-1">
                    <li>Tetangga B: in-degree B menjadi 0. Enqueue B.</li>
                    <li>Tetangga C: in-degree C menjadi 0. Enqueue C.</li>
                  </ul>
                  <p className="mt-1">
                    Queue:{" "}
                    <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                      [B, C]
                    </code>
                  </p>
                </li>
                <li>
                  Dequeue B. Urutan:{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    [A, B]
                  </code>
                  <ul className="list-circle list-inside ml-4 mt-1">
                    <li>Tetangga D: in-degree D menjadi 1 (dari 2).</li>
                  </ul>
                  <p className="mt-1">
                    Queue:{" "}
                    <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                      [C]
                    </code>
                  </p>
                </li>
                <li>
                  Dequeue C. Urutan:{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    [A, B, C]
                  </code>
                  <ul className="list-circle list-inside ml-4 mt-1">
                    <li>
                      Tetangga D: in-degree D menjadi 0 (dari 1). Enqueue D.
                    </li>
                  </ul>
                  <p className="mt-1">
                    Queue:{" "}
                    <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                      [D]
                    </code>
                  </p>
                </li>
                <li>
                  Dequeue D. Urutan:{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    [A, B, C, D]
                  </code>
                  <ul className="list-circle list-inside ml-4 mt-1">
                    <li>
                      Tetangga E: in-degree E menjadi 0 (dari 1). Enqueue E.
                    </li>
                  </ul>
                  <p className="mt-1">
                    Queue:{" "}
                    <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                      [E]
                    </code>
                  </p>
                </li>
                <li>
                  Dequeue E. Urutan:{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    [A, B, C, D, E]
                  </code>
                  <ul className="list-circle list-inside ml-4 mt-1">
                    <li>Tidak ada tetangga.</li>
                  </ul>
                  <p className="mt-1">
                    Queue:{" "}
                    <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                      []
                    </code>{" "}
                    (Kosong)
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium text-accentBlue">Verifikasi:</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Jumlah node di hasil (5) sama dengan total node (5). Grafik
                  adalah DAG.
                </li>
              </ul>
            </li>
          </ol>
          <p className="mt-4 leading-relaxed">
            Urutan Topologis Akhir:{" "}
            <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
              [A, B, C, D, E]
            </code>{" "}
            (atau{" "}
            <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
              [A, C, B, D, E]
            </code>
            , karena B dan C bisa diambil secara paralel setelah A).
          </p>
        </section>

        {/* Implementasi Kode (C++) */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi Kode (C++)
          </h2>
          <p className="mb-4 leading-relaxed">
            Berikut adalah contoh implementasi Algoritma Kahn sederhana
            menggunakan C++. Dalam konteks Next.js, ini akan menjadi bagian dari
            backend atau layanan yang Anda panggil untuk mendapatkan urutan
            topologis.
          </p>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`#include <iostream>
#include <vector>
#include <queue>
#include <map> // Untuk mapping nama node ke indeks

// Fungsi untuk melakukan pengurutan topologis menggunakan Algoritma Kahn
std::vector<int> kahnTopologicalSort(int numNodes, const std::vector<std::vector<int>>& adj, std::vector<int>& inDegree) {
    std::queue<int> q;
    std::vector<int> result;

    // 1. Inisialisasi: Tambahkan semua node dengan in-degree 0 ke queue
    for (int i = 0; i < numNodes; ++i) {
        if (inDegree[i] == 0) {
            q.push(i);
        }
    }

    // 2. Proses Iteratif
    int visitedNodes = 0;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        result.push_back(u); // Tambahkan node ke hasil
        visitedNodes++;

        // Untuk setiap tetangga dari node u
        for (int v : adj[u]) {
            inDegree[v]--; // Kurangi in-degree tetangga
            // Jika in-degree tetangga menjadi 0, tambahkan ke queue
            if (inDegree[v] == 0) {
                q.push(v);
            }
        }
    }

    // 3. Verifikasi (opsional, tapi penting)
    if (visitedNodes != numNodes) {
        std::cout << "Grafik mengandung siklus! Pengurutan topologis tidak mungkin.\\n";
        return {}; // Mengembalikan vektor kosong atau melempar error
    }

    return result;
}

int main() {
    int numNodes = 5; // A=0, B=1, C=2, D=3, E=4

    // Representasi graf menggunakan adjacency list
    std::vector<std::vector<int>> adj(numNodes);
    std::vector<int> inDegree(numNodes, 0);

    // Menambahkan sisi dan memperbarui in-degree
    // A -> B
    adj[0].push_back(1);
    inDegree[1]++;

    // A -> C
    adj[0].push_back(2);
    inDegree[2]++;

    // B -> D
    adj[1].push_back(3);
    inDegree[3]++;

    // C -> D
    adj[2].push_back(3);
    inDegree[3]++;

    // D -> E
    adj[3].push_back(4);
    inDegree[4]++;

    std::vector<int> topologicalOrder = kahnTopologicalSort(numNodes, adj, inDegree);

    if (!topologicalOrder.empty()) {
        std::cout << "Urutan Topologis (indeks node): ";
        for (int node : topologicalOrder) {
            std::cout << node << " ";
        }
        std::cout << "\\n";
    }

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
            Kelebihan Algoritma Kahn:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Menjamin Pengurutan Topologis:
              </span>{" "}
              Selama grafik adalah DAG, algoritma ini dijamin akan menemukan
              setidaknya satu urutan topologis yang valid.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Deteksi Siklus:
              </span>{" "}
              Algoritma ini secara inheren dapat mendeteksi apakah sebuah grafik
              mengandung siklus. Jika jumlah node yang diproses tidak sama
              dengan total node, maka ada siklus.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Relatif Intuitif:
              </span>{" "}
              Cara kerjanya berdasarkan prasyarat (in-degree) yang mudah
              dipahami.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Kompleksitas Waktu Efisien:
              </span>{" "}
              Memiliki kompleksitas waktu{" "}
              <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                O(V + E)
              </code>{" "}
              di mana V adalah jumlah node dan E adalah jumlah sisi, membuatnya
              efisien untuk grafik besar.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-accentBlue mt-6 mb-2">
            Kekurangan Algoritma Kahn:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Hanya untuk DAG:
              </span>{" "}
              Tidak dapat digunakan pada grafik yang mengandung siklus.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Bukan Algoritma Jalur Terpendek:
              </span>{" "}
              Ini bukan algoritma untuk menemukan jalur terpendek (seperti
              Dijkstra), melainkan untuk menentukan urutan tugas.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Bisa Ada Banyak Solusi:
              </span>{" "}
              Untuk grafik tertentu, mungkin ada lebih dari satu urutan
              topologis yang valid. Algoritma Kahn akan memberikan salah satu di
              antaranya.
            </li>
          </ul>
        </section>

        {/* Kesimpulan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kesimpulan
          </h2>
          <p className="leading-relaxed">
            Algoritma Kahn adalah metode yang elegan dan efisien untuk melakukan
            pengurutan topologis pada grafik asiklik terarah. Kemampuannya untuk
            secara otomatis mendeteksi siklus dan kompleksitas waktunya yang
            optimal menjadikannya pilihan yang sangat baik untuk masalah yang
            melibatkan dependensi tugas dan penjadwalan. Pemahaman tentang
            in-degree adalah kunci untuk menguasai algoritma ini, yang memiliki
            banyak aplikasi praktis di dunia nyata.
          </p>
        </section>
      </main>

      {/* Footer (opsional) */}
      <footer className="mt-12 text-center text-textLight text-sm">
        <p>Dibuat dengan ❤️</p>
      </footer>
    </div>
  );
}
