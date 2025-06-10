// app/dijkstra/page.tsx
// (Atau sesuaikan path sesuai struktur proyek Anda)

import React from "react";
import Link from "next/link"; // Import Link dari Next.js untuk navigasi

export default function DijkstraArticlePage() {
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
          Memahami Algoritma Dijkstra
        </h1>
        <p className="text-xl text-lightBlue">
          Selami dunia pencarian jalur terpendek dengan salah satu algoritma
          paling fundamental.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {/* Apa itu Algoritma Dijkstra? */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Apa itu Algoritma Dijkstra?
          </h2>
          <p className="mb-4 leading-relaxed">
            Algoritma Dijkstra adalah sebuah algoritma yang digunakan untuk
            menemukan jalur terpendek dari satu titik (disebut{" "}
            <span className="font-semibold text-accentBlue">node sumber</span>)
            ke semua titik lainnya dalam sebuah{" "}
            <span className="font-semibold text-accentBlue">
              grafik berbobot (weighted graph)
            </span>
            . Grafik berbobot adalah grafik di mana setiap sisi (edge) memiliki
            nilai numerik, yang biasanya merepresentasikan jarak, biaya, atau
            waktu. Algoritma ini pertama kali ditemukan oleh ilmuwan komputer
            Belanda, Edsger W. Dijkstra, pada tahun 1956 dan diterbitkan pada
            tahun 1959.
          </p>
          <p className="leading-relaxed">
            Algoritma ini sangat berguna dalam berbagai skenario, seperti:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Sistem navigasi GPS:
              </span>{" "}
              Menemukan rute terpendek antar lokasi.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Perutean jaringan:
              </span>{" "}
              Menentukan jalur data yang paling efisien.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Analisis peta:
              </span>{" "}
              Mencari jalur terpendek di antara kota-kota.
            </li>
            <li>
              <span className="font-medium text-accentBlue">Permainan:</span>{" "}
              Menentukan jalur terpendek untuk karakter dalam game.
            </li>
          </ul>
        </section>

        {/* Cara Kerja Algoritma Dijkstra */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Cara Kerja Algoritma Dijkstra
          </h2>
          <p className="mb-4 leading-relaxed">
            Algoritma Dijkstra bekerja dengan cara yang mirip dengan
            "membengkak" dari titik sumber, secara bertahap menemukan jalur
            terpendek ke setiap node. Berikut adalah langkah-langkah intinya:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-2">
            <li>
              <span className="font-semibold text-accentBlue">
                Inisialisasi:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Tetapkan jarak ke node sumber adalah{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    0
                  </code>{" "}
                  dan jarak ke semua node lainnya adalah{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    tak terbatas
                  </code>{" "}
                  (infinity).
                </li>
                <li>
                  Buat sebuah set untuk node yang sudah "dikunjungi" (sudah
                  menemukan jalur terpendeknya) dan set untuk node yang "belum
                  dikunjungi".
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">Iterasi:</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Pilih node dari set "belum dikunjungi" yang memiliki jarak
                  terpendek dari node sumber.
                </li>
                <li>Tandai node yang dipilih ini sebagai "dikunjungi".</li>
                <li>
                  Untuk setiap tetangga dari node yang baru saja dikunjungi:
                  <ul className="list-circle list-inside ml-4 mt-1">
                    <li>
                      Hitung jarak sementara dari node sumber ke tetangga ini
                      melalui node yang baru saja dikunjungi.
                    </li>
                    <li>
                      Jika jarak sementara ini lebih pendek dari jarak yang
                      sudah ada untuk tetangga tersebut, perbarui jarak tetangga
                      tersebut.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">
                Pengulangan:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Ulangi langkah 2 sampai semua node telah "dikunjungi" atau
                  tidak ada lagi node yang dapat dijangkau dari node sumber.
                </li>
              </ul>
            </li>
          </ol>
          <p className="mt-4 leading-relaxed">
            Pada setiap langkah, algoritma selalu memilih node yang terdekat
            yang belum dikunjungi, memastikan bahwa setiap kali kita mengupdate
            jarak, kita selalu mempertimbangkan jalur yang paling efisien.
          </p>
        </section>

        {/* Contoh Permasalahan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Contoh Permasalahan
          </h2>
          <p className="mb-4 leading-relaxed">
            Bayangkan Anda memiliki peta jalan dengan kota-kota sebagai node dan
            jalanan sebagai edge. Setiap jalan memiliki bobot (misalnya, jarak
            dalam kilometer). Anda ingin menemukan jalur terpendek dari Kota A
            ke Kota E.
          </p>
          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Grafik Contoh:
          </h3>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`     (1)     (4)
   A ----- B ----- C
   |       |       |
(5)|    (2)|    (1)|
   |       |       |
   D ----- E ----- F
     (3)     (1)
`}
          </pre>
          <p className="mt-4 mb-2 leading-relaxed">
            Tujuan: Temukan jalur terpendek dari A ke E.
          </p>
          <p className="leading-relaxed">
            Langkah-langkah sederhana (ilustratif):
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">Inisialisasi:</span>{" "}
              <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                jarak(A)=0
              </code>
              ,{" "}
              <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                jarak(B)=inf
              </code>
              , dst. Node yang belum dikunjungi: (A, B, C, D, E, F)
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Pilih A (jarak 0):
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Tetangga B:{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(A) + 1 = 1
                  </code>
                  .{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(B)
                  </code>{" "}
                  diupdate jadi 1.
                </li>
                <li>
                  Tetangga D:{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(A) + 5 = 5
                  </code>
                  .{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(D)
                  </code>{" "}
                  diupdate jadi 5.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Pilih B (jarak 1):
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Tetangga A: Sudah dikunjungi.</li>
                <li>
                  Tetangga C:{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(B) + 4 = 5
                  </code>
                  .{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(C)
                  </code>{" "}
                  diupdate jadi 5.
                </li>
                <li>
                  Tetangga E:{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(B) + 2 = 3
                  </code>
                  .{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(E)
                  </code>{" "}
                  diupdate jadi 3.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Pilih E (jarak 3):
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Tetangga B: Sudah dikunjungi.</li>
                <li>
                  Tetangga D:{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(E) + 3 = 6
                  </code>
                  . (A-B-E-D). Bandingkan dengan{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(D)
                  </code>{" "}
                  saat ini (5). 5 lebih kecil, jadi{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(D)
                  </code>{" "}
                  tidak diupdate.
                </li>
                <li>
                  Tetangga F:{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(E) + 1 = 4
                  </code>
                  .{" "}
                  <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                    jarak(F)
                  </code>{" "}
                  diupdate jadi 4.
                </li>
              </ul>
            </li>
          </ol>
          <p className="mt-4 leading-relaxed">
            Proses ini terus berlanjut hingga semua node terjangkau memiliki
            jalur terpendek yang ditemukan. Jalur terpendek dari A ke E adalah A{" "}
            {"->"} B {"->"} E dengan total jarak 3.
          </p>
        </section>

        {/* Implementasi Kode (C++) */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi Kode (C++)
          </h2>
          <p className="mb-4 leading-relaxed">
            Berikut adalah contoh implementasi Algoritma Dijkstra sederhana
            menggunakan C++. Dalam proyek Next.js 14, Anda mungkin akan
            berinteraksi dengan algoritma ini melalui API atau library yang
            ditulis dalam bahasa lain (misalnya Python atau JavaScript untuk
            backend), atau mengimplementasikannya dalam JavaScript/TypeScript
            jika grafiknya kecil dan di sisi klien.
          </p>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`#include <iostream>
#include <vector>
#include <queue>
#include <limits> // For numeric_limits

const int INF = std::numeric_limits<int>::max(); // Representasi tak terbatas

// Struktur untuk menyimpan node dan bobotnya
struct Edge {
    int to;
    int weight;
};

// Fungsi perbandingan untuk priority queue (min-heap)
// Akan mengurutkan berdasarkan jarak terkecil
struct CompareDistance {
    bool operator()(const std::pair<int, int>& a, const std::pair<int, int>& b) {
        return a.second > b.second; // Urutkan berdasarkan jarak (nilai kedua) secara ascending
    }
};

void dijkstra(const std::vector<std::vector<Edge>>& graph, int startNode, int numNodes) {
    std::vector<int> dist(numNodes, INF); // Jarak dari startNode ke setiap node
    std::vector<int> prev(numNodes, -1); // Untuk merekonstruksi jalur
    dist[startNode] = 0;

    // Priority queue: pair<jarak, node>
    std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, CompareDistance> pq;
    pq.push({startNode, 0}); // Masukkan node awal dengan jarak 0

    while (!pq.empty()) {
        int u = pq.top().first;
        int d = pq.top().second;
        pq.pop();

        // Jika jarak yang ditemukan lebih besar dari yang sudah ada, lewati
        if (d > dist[u]) {
            continue;
        }

        // Iterasi melalui tetangga dari node u
        for (const Edge& edge : graph[u]) {
            int v = edge.to;
            int weight = edge.weight;

            // Jika ditemukan jalur yang lebih pendek ke node v
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                prev[v] = u; // Simpan node sebelumnya untuk rekonstruksi jalur
                pq.push({v, dist[v]});
            }
        }
    }

    // Menampilkan hasil
    std::cout << "Jarak terpendek dari node " << startNode << ":\\n";
    for (int i = 0; i < numNodes; ++i) {
        if (dist[i] == INF) {
            std::cout << "Node " << i << ": Tidak dapat dijangkau\\n";
        } else {
            std::cout << "Node " << i << ": " << dist[i];
            // Tambahan: rekonstruksi jalur
            std::cout << " (Jalur: ";
            std::vector<int> path;
            int curr = i;
            while (curr != -1) {
                path.insert(path.begin(), curr);
                curr = prev[curr];
            }
            for (size_t j = 0; j < path.size(); ++j) {
                std::cout << path[j];
                if (j < path.size() - 1) {
                    std::cout << " -> ";
                }
            }
            std::cout << ")\\n";
        }
    }
}

int main() {
    int numNodes = 6; // Contoh: 6 node (0 hingga 5)
    std::vector<std::vector<Edge>> graph(numNodes);

    // Menambahkan edge (sesuai contoh grafik di atas)
    graph[0].push_back({1, 1}); // A to B
    graph[0].push_back({3, 5}); // A to D
    graph[1].push_back({0, 1}); // B to A (untuk grafik tak berarah, tambahkan keduanya)
    graph[1].push_back({2, 4}); // B to C
    graph[1].push_back({4, 2}); // B to E
    graph[2].push_back({1, 4}); // C to B
    graph[2].push_back({5, 1}); // C to F
    graph[3].push_back({0, 5}); // D to A
    graph[3].push_back({4, 3}); // D to E
    graph[4].push_back({1, 2}); // E to B
    graph[4].push_back({3, 3}); // E to D
    graph[4].push_back({5, 1}); // E to F
    graph[5].push_back({2, 1}); // F to C
    graph[5].push_back({4, 1}); // F to E

    dijkstra(graph, 0, numNodes); // Jalankan Dijkstra dari node 0 (A)

    return 0;
}`}
          </pre>
        </section>

        {/* Kelebihan dan Kekurangan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kelebihan dan Kekurangan
          </h2>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Kelebihan Algoritma Dijkstra:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Menemukan Jalur Terpendek Optimal:
              </span>{" "}
              Dijamin akan menemukan jalur terpendek dari satu sumber ke semua
              node lain dalam grafik dengan bobot sisi non-negatif.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Relatif Mudah Dipahami:
              </span>{" "}
              Konsep dasarnya cukup intuitif, mengikuti pendekatan "greedy"
              (selalu memilih jalur terpendek saat ini).
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Banyak Digunakan:
              </span>{" "}
              Fondasi bagi banyak aplikasi dunia nyata.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-accentBlue mt-6 mb-2">
            Kekurangan Algoritma Dijkstra:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Tidak Bisa Menangani Bobot Sisi Negatif:
              </span>{" "}
              Jika ada sisi dengan bobot negatif, algoritma ini tidak akan
              bekerja dengan benar dan bisa menghasilkan jalur yang salah. Untuk
              kasus ini, algoritma seperti Bellman-Ford lebih cocok.
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Kompleksitas Waktu:
              </span>{" "}
              Untuk grafik yang sangat padat atau sangat besar, kompleksitas
              waktu (
              <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                O(E log V)
              </code>{" "}
              atau{" "}
              <code className="bg-darkBlue px-1 py-0.5 rounded text-textLight">
                O(V^2)
              </code>{" "}
              tergantung implementasi) bisa menjadi masalah kinerja.
            </li>
          </ul>
        </section>

        {/* Kesimpulan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kesimpulan
          </h2>
          <p className="leading-relaxed">
            Algoritma Dijkstra adalah alat yang sangat kuat dan efisien untuk
            menemukan jalur terpendek dalam grafik berbobot dengan bobot sisi
            positif. Pemahamannya adalah langkah kunci dalam mempelajari
            algoritma grafik dan memiliki aplikasi praktis yang luas di berbagai
            bidang. Meskipun memiliki batasan (tidak menangani bobot negatif),
            keandalannya dalam skenario yang tepat menjadikannya salah satu
            algoritma yang harus Anda kuasai.
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
