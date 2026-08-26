import { ArrowRight } from 'lucide-react';
import { Button, Reveal, Section, SectionHeading } from '@/components/ui';
import { BlogCard } from '@/components/BlogCard';
import { sortedArticles } from '@/data/articles';

/** Home-page preview of the knowledge hub. The full list lives at /blog. */
export function Content() {
  const preview = sortedArticles.slice(0, 3);

  return (
    <Section id="content">
      <SectionHeading
        id="content"
        eyebrow="Content"
        title="Notes, tutorials and resources"
        description="Written explanations of the things I have had to work out myself — planned pieces are marked as drafts until they are actually written."
        action={
          <Button to="/blog" variant="secondary">
            Visit the blog
            <ArrowRight aria-hidden="true" />
          </Button>
        }
      />

      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {preview.map((article, index) => (
          <li key={article.slug} className="h-full">
            <Reveal delay={index * 0.05} className="h-full">
              <BlogCard article={article} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
