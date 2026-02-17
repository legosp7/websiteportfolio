/* src/app/articles/[slug]/page.tsx */ 
type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen p-24 flex justify-center">
      <div className="max-w-2xl">
        <h1>you are in {slug}</h1>
      </div>
    </main>
  );
}