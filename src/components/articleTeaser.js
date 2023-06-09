import React from "react"

const ArticleTeaser = ({ article, slug }) => {
  return (
    <div className="column feature">
      <div className="p-6">
        <img
          className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
          src={article.image.filename}
          alt={article.image.alt}
        />
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
          {article.title}
        </h1>
        <div className="mx-auto text-base leading-relaxed text-gray-500 line-clamp-2">
          {article.subtitle}
        </div>
        <div className="mt-4">
          <a
            href={`/${article.full_slug || slug}`}
            className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
            title="read more"
          >
            Read More »
          </a>
        </div>
      </div>
    </div>
  )
}
export default ArticleTeaser
