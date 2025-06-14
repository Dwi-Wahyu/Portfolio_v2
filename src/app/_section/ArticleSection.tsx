import { articles } from "@/data/articles";
import ArticleCard from "../_components/ArticleCard";
import { TArticle } from "@/types/TArticle";
import Link from "next/link";

export default function ArticleSection() {
  return (
    <div id="articles" className="min-h-screen max-[639px]:p-10 p-20">
      <header className="text-center mb-12">
        <h1 className="text-xl font-extrabold text-accentBlue leading-tight mb-4">
          Kumpulan Artikel Algoritma & Struktur Data
        </h1>
        <p className=" text-gray-400">
          Jelajahi berbagai materi penting dalam ilmu komputer.
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article: TArticle, index: number) => (
            <Link key={index} href={article.link}>
              <ArticleCard
                key={index}
                link={article.link}
                title={article.title}
                date={article.date}
                description={article.description}
                thumbnail={article.thumbnail}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
