import React from "react";
import Image from "next/image";
import { TArticle } from "@/types/TArticle";

const ArticleCard: React.FC<TArticle> = ({
  title,
  date,
  description,
  thumbnail,
}) => {
  return (
    <div className="bg-lightBlue rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-lightBlue">
      <div className="p-6">
        <div className="text-sm font-semibold text-accentBlue mb-2">{date}</div>
        <h3 className="text-xl font-bold text-textLight mb-3 leading-tight">
          {title}
        </h3>
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={`Thumbnail untuk ${title}`}
            width={600} // Sesuaikan lebar yang sesuai
            height={400} // Sesuaikan tinggi yang sesuai
            className="mt-4 rounded-md mb-3"
          />
        )}

        <p className="text-sm text-gray-300">{description}</p>

        <a
          href="#" // Ganti dengan link artikel yang sebenarnya
          className="mt-4 inline-block text-accentBlue hover:underline font-semibold"
        >
          Baca Selengkapnya &rarr;
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
