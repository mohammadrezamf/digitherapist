import Link from "next/link";
import { notFound } from "next/navigation";
import { Article } from "@/app/(sections)/articles/components";
import { myArticles } from "@/app/(sections)/articles/article-data";

type Props = {
  slug: string;
};

const ArticleDetail = ({ slug }: Props) => {
  const article = myArticles.find((item: Article) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="order-2 lg:order-1">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                🧠
              </div>

              <h3 className="mb-2 text-xl font-bold">دیجی تراپیست</h3>

              <p className="mb-5 text-sm leading-7 text-slate-600">
                نرم‌افزار تخصصی مدیریت کلینیک‌های روان‌شناسی برای مدیریت نوبت‌ها، پرونده مراجعان،
                گزارش‌های مالی و تقویم درمانگران.
              </p>

              <div className="space-y-3">
                <Link
                  href="/"
                  className="block rounded-xl bg-blue-600 px-4 py-3 text-center font-medium text-white transition hover:bg-blue-700"
                >
                  مشاهده صفحه اصلی
                </Link>

                <Link
                  href="/articles"
                  className="block rounded-xl border border-slate-200 px-4 py-3 text-center font-medium transition hover:bg-slate-50"
                >
                  سایر مقالات
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h4 className="mb-3 font-bold">امکانات محبوب</h4>

              <ul className="space-y-3 text-sm text-slate-700">
                <li>✓ نوبت‌دهی آنلاین</li>
                <li>✓ پرونده الکترونیک</li>
                <li>✓ مدیریت مالی</li>
                <li>✓ تقویم درمانگران</li>
                <li>✓ گزارش‌های مدیریتی</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Article */}
        <article className="order-1 lg:order-2">
          <div className="mb-8">
            <span className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              {article.badge}
            </span>

            <h1 className="mb-4 text-4xl leading-tight font-extrabold">{article.title}</h1>

            <p className="text-sm text-slate-500">{article.date}</p>
          </div>

          <img
            src={article.imageUrl}
            alt={article.title}
            className="mb-10 h-[400px] w-full rounded-3xl object-cover"
          />

          <div
            className="prose prose-lg prose-headings:mt-12 prose-headings:font-bold prose-headings:text-slate-900 prose-p:leading-8 prose-img:rounded-2xl prose-img:shadow-md prose-a:text-blue-600 prose-ul:leading-8 max-w-none"
            dangerouslySetInnerHTML={{
              __html: article.content ?? "",
            }}
          />
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
