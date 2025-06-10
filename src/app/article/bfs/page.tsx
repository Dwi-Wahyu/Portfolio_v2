import React from "react";
import Link from "next/link";

export default function BFSArticlePage() {
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
          Mengenal Algoritma Breadth-First Search (BFS)
        </h1>

        <p>
          <strong>Breadth-First Search (BFS)</strong> adalah algoritma
          traversing atau pencarian pada graf yang dimulai dari simpul akar dan
          menjelajahi semua tetangga simpul tersebut terlebih dahulu sebelum
          berpindah ke tingkat simpul berikutnya.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Karakteristik BFS</h2>
        <ul className="list-disc ml-6">
          <li>Menggunakan struktur data antrian (queue).</li>
          <li>Menjelajahi graf secara level demi level.</li>
          <li>Menjamin pencarian jalur terpendek pada graf tak berbobot.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Cara Kerja BFS</h2>
        <ol className="list-decimal ml-6">
          <li>Pilih simpul awal dan tandai sebagai dikunjungi.</li>
          <li>Masukkan simpul tersebut ke dalam antrian.</li>
          <li>
            Selama antrian tidak kosong:
            <ul className="list-disc ml-6 mt-1">
              <li>Ambil simpul dari depan antrian.</li>
              <li>Periksa semua tetangganya.</li>
              <li>
                Jika tetangga belum dikunjungi, tandai dan masukkan ke antrian.
              </li>
            </ul>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Pseudocode BFS</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
          <code>{`BFS(graf, simpul_awal):
  buat antrian Q
  tandai simpul_awal sebagai dikunjungi
  Q.enqueue(simpul_awal)

  selama Q tidak kosong:
    simpul = Q.dequeue()
    untuk setiap tetangga dari simpul:
      jika tetangga belum dikunjungi:
        tandai tetangga
        Q.enqueue(tetangga)`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Contoh Implementasi dalam JavaScript
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
          <code>{`function bfs(graph, start) {
  let queue = [start];
  let visited = { [start]: true };

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Kapan Menggunakan BFS?
        </h2>
        <ul className="list-disc ml-6">
          <li>Untuk mencari jalur terpendek pada graf tak berbobot.</li>
          <li>Saat ingin menjelajahi graf secara level demi level.</li>
          <li>Untuk pemecahan masalah seperti teka-teki atau puzzle.</li>
        </ul>
      </article>
    </div>
  );
}
