import React from "react";
import Link from "next/link";

export default function HuffmanCodingPage() {
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
          Memahami Algoritma Huffman Coding
        </h1>
        <p className="text-xl text-lightBlue">
          Pelajari bagaimana Huffman Coding digunakan untuk kompresi data dengan
          efisien.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {/* Apa itu Huffman Coding? */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Apa itu Huffman Coding?
          </h2>
          <p className="mb-4 leading-relaxed">
            Huffman Coding adalah algoritma kompresi data yang menggunakan
            pendekatan
            <span className="font-semibold text-accentBlue"> greedy</span> untuk
            membuat kode biner dengan panjang variabel. Algoritma ini
            menghasilkan kode prefiks yang optimal untuk menyandikan karakter
            berdasarkan frekuensi kemunculannya, sehingga karakter yang lebih
            sering muncul memiliki kode yang lebih pendek.
          </p>
          <p className="leading-relaxed">
            Huffman Coding memiliki aplikasi luas dalam berbagai bidang,
            seperti:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Kompresi file:
              </span>{" "}
              Digunakan dalam format seperti ZIP dan JPEG
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Komunikasi data:
              </span>{" "}
              Mengurangi ukuran data yang dikirim melalui jaringan
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Penyimpanan data:
              </span>{" "}
              Mengoptimalkan penggunaan ruang penyimpanan
            </li>
            <li>
              <span className="font-medium text-accentBlue">Kriptografi:</span>{" "}
              Dasar untuk beberapa algoritma penyandian
            </li>
          </ul>
        </section>

        {/* Cara Kerja Huffman Coding */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Cara Kerja Huffman Coding
          </h2>
          <p className="mb-4 leading-relaxed">
            Algoritma Huffman Coding bekerja dengan membangun pohon biner
            (Huffman Tree) berdasarkan frekuensi karakter. Berikut
            langkah-langkahnya:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-2">
            <li>
              <span className="font-semibold text-accentBlue">
                Hitung frekuensi:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Hitung frekuensi kemunculan setiap karakter dalam data masukan
                </li>
                <li>
                  Buat simpul daun untuk setiap karakter dengan frekuensinya
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">
                Bangun pohon Huffman:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Masukkan semua simpul daun ke dalam antrian prioritas
                  (min-heap)
                </li>
                <li>
                  Selama antrian memiliki lebih dari satu simpul:
                  <ul className="list-circle list-inside ml-4 mt-1">
                    <li>Ambil dua simpul dengan frekuensi terendah</li>
                    <li>
                      Buat simpul induk baru dengan frekuensi total kedua simpul
                    </li>
                    <li>Tambahkan simpul induk kembali ke antrian</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-accentBlue">
                Hasilkan kode:
              </span>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Telusuri pohon Huffman dari akar ke setiap daun</li>
                <li>Tetapkan 0 untuk cabang kiri dan 1 untuk cabang kanan</li>
                <li>Catat kode biner untuk setiap karakter</li>
              </ul>
            </li>
          </ol>
          <p className="mt-4 leading-relaxed">
            Hasilnya adalah tabel kode yang digunakan untuk menyandikan dan
            mendekode data dengan efisien.
          </p>
        </section>

        {/* Contoh Permasalahan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Contoh Permasalahan
          </h2>
          <p className="mb-4 leading-relaxed">
            Misalkan kita ingin menyandikan string "AABBCC" menggunakan Huffman
            Coding. Berikut langkah-langkahnya:
          </p>
          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Langkah-langkah:
          </h3>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
            <li>Frekuensi: A=2, B=2, C=2</li>
            <li>Buat min-heap: [A:2, B:2, C:2]</li>
            <li>
              Ambil dua simpul (A:2, B:2), buat induk (AB:4), masukkan kembali:
              [C:2, AB:4]
            </li>
            <li>Ambil dua simpul (C:2, AB:4), buat induk (ABC:6)</li>
            <li>Hasilkan kode: A=00, B=01, C=1</li>
            <li>Sandikan "AABBCC": 00 00 01 01 1 1 = 000001011</li>
          </ol>
          <p className="mt-4 leading-relaxed">
            String asli membutuhkan 6×8=48 bit (ASCII). Dengan Huffman Coding,
            hanya 9 bit diperlukan.
          </p>
        </section>

        {/* Implementasi Kode (Python) */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi Kode (Python)
          </h2>
          <p className="mb-4 leading-relaxed">
            Berikut implementasi Huffman Coding menggunakan Python:
          </p>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
            {`
import heapq
from collections import Counter

class Node:
    def __init__(self, char, freq):
        self.char = char
        self.freq = freq
        self.left = None
        self.right = None
    
    def __lt__(self, other):
        return self.freq < other.freq

def build_huffman_tree(data):
    # Hitung frekuensi
    freq = Counter(data)
    
    # Buat min-heap
    heap = [Node(char, freq) for char, freq in freq.items()]
    heapq.heapify(heap)
    
    # Bangun pohon
    while len(heap) > 1:
        left = heapq.heappop(heap)
        right = heapq.heappop(heap)
        internal = Node(None, left.freq + right.freq)
        internal.left = left
        internal.right = right
        heapq.heappush(heap, internal)
    
    return heap[0]

def generate_codes(root, current_code="", codes={}):
    if root is None:
        return
    
    if root.char is not None:
        codes[root.char] = current_code or "0"
    
    generate_codes(root.left, current_code + "0", codes)
    generate_codes(root.right, current_code + "1", codes)
    return codes

def huffman_coding(data):
    if not data:
        return "", {}
    
    # Bangun pohon dan hasilkan kode
    root = build_huffman_tree(data)
    codes = generate_codes(root)
    
    # Sandikan data
    encoded = "".join(codes[char] for char in data)
    return encoded, codes

# Contoh penggunaan
data = "AABBCC"
encoded, codes = huffman_coding(data)
print("Kode Huffman:", codes)
print("Data tersandi:", encoded)
          </pre>
          <p className="mt-4 leading-relaxed">
            Output akan menampilkan tabel kode Huffman dan data yang telah disandikan.
          </p>
        </section>

        {/* Implementasi Kode (JavaScript) */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Implementasi Kode (JavaScript)
          </h2>
          <p className="mb-4 leading-relaxed">
            Berikut implementasi Huffman Coding dalam JavaScript:
          </p>
          <pre className="bg-darkBlue text-textLight p-4 rounded-md overflow-x-auto text-sm">
class Node {
    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}

function huffmanCoding(data) {
    if (!data) return { encoded: "", codes: {} };

    // Hitung frekuensi
    const freq = {};
    for (let char of data) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Buat min-heap
    const heap = Object.entries(freq).map(([char, freq]) => new Node(char, freq));
    heap.sort((a, b) => a.freq - b.freq);

    // Bangun pohon
    while (heap.length > 1) {
        const left = heap.shift();
        const right = heap.shift();
        const internal = new Node(null, left.freq + right.freq);
        internal.left = left;
        internal.right = right;
        heap.push(internal);
        heap.sort((a, b) => a.freq - b.freq);
    }

    // Hasilkan kode
    const codes = {};
    function generateCodes(node, currentCode = "") {
        if (!node) return;
        if (node.char !== null) {
            codes[node.char] = currentCode || "0";
        }
        generateCodes(node.left, currentCode + "0");
        generateCodes(node.right, currentCode + "1");
    }
    generateCodes(heap[0]);

    // Sandikan data
    const encoded = data.split("").map(char => codes[char]).join("");
    return { encoded, codes };
}

// Contoh penggunaan
const data = "AABBCC";
const { encoded, codes } = huffmanCoding(data);
console.log("Kode Huffman:", codes);
console.log("Data tersandi:", encoded);
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
            Kompleksitas waktu adalah <strong>O(n log n)</strong>, di mana n
            adalah jumlah karakter unik. Ini karena pembuatan min-heap dan
            pengurutan berulang membutuhkan O(log n) untuk setiap operasi.
          </p>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Kompleksitas Ruang:
          </h3>
          <p className="mb-4 leading-relaxed">
            Kompleksitas ruang adalah <strong>O(n)</strong> untuk menyimpan
            pohon Huffman dan tabel kode.
          </p>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Optimasi:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">
                Min-heap efisien:
              </span>{" "}
              Menggunakan struktur heap bawaan untuk performa lebih baik
            </li>
            <li>
              <span className="font-medium text-accentBlue">
                Cache frekuensi:
              </span>{" "}
              Menyimpan hasil frekuensi untuk data yang sering diulang
            </li>
            <li>
              <span className="font-medium text-accentBlue">Paralelisasi:</span>{" "}
              Memproses pembangunan pohon secara paralel untuk data besar
            </li>
          </ul>
        </section>

        {/* Kelebihan dan Kekurangan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kelebihan dan Kekurangan
          </h2>

          <h3 className="text-2xl font-semibold text-accentBlue mb-2">
            Kelebihan Huffman Coding:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">Efisien:</span>{" "}
              Menghasilkan kompresi optimal untuk data dengan frekuensi karakter
              tidak seragam
            </li>
            <li>
              <span className="font-medium text-accentBlue">Prefiks kode:</span>{" "}
              Tidak memerlukan pemisah, sehingga dekoding lebih sederhana
            </li>
            <li>
              <span className="font-medium text-accentBlue">Fleksibel:</span>{" "}
              Dapat digunakan untuk berbagai jenis data
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-accentBlue mt-6 mb-2">
            Kekurangan Huffman Coding:
          </h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <span className="font-medium text-accentBlue">Overhead:</span>{" "}
              Memerlukan penyimpanan pohon atau tabel kode
            </li>
            <li>
              <span className="font-medium text-accentBlue">Data kecil:</span>{" "}
              Kurang efisien untuk data dengan distribusi frekuensi seragam
            </li>
            <li>
              <span className="font-medium text-accentBlue">Kompleksitas:</span>{" "}
              Lebih rumit dibandingkan metode kompresi sederhana
            </li>
          </ul>
        </section>

        {/* Kesimpulan */}
        <section className="mb-10 p-6 rounded-lg bg-lightBlue shadow-lg">
          <h2 className="text-3xl font-semibold text-accentBlue mb-4">
            Kesimpulan
          </h2>
          <p className="leading-relaxed">
            Huffman Coding adalah algoritma kompresi data yang efisien dan
            banyak digunakan, terutama untuk data dengan distribusi frekuensi
            karakter yang bervariasi. Dengan memanfaatkan pohon biner dan kode
            prefiks, algoritma ini meminimalkan ukuran data tanpa kehilangan
            informasi. Meskipun memiliki beberapa keterbatasan, Huffman Coding
            tetap menjadi dasar penting dalam kompresi data dan memiliki
            aplikasi luas dalam teknologi modern.
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
