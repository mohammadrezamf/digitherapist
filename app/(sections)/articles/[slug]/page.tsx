import ArticleDetail from "@/app/(sections)/articles/[slug]/component/indext";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;

  return <ArticleDetail slug={slug} />;
}
