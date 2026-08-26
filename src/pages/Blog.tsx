import { useMemo, useState } from 'react';
import { Button, Card, Container, Reveal } from '@/components/ui';
import { BlogCard } from '@/components/BlogCard';
import { articleCategories, publishedArticles, sortedArticles } from '@/data/articles';
import type { ArticleCategory } from '@/data/articles';
import { cn } from '@/lib/cn';
import { Seo } from '@/components/Seo';

type Filter = ArticleCategory | 'All';

export function Blog() {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = useMemo(
    () =>
      filter === 'All'
        ? sortedArticles
        : sortedArticles.filter((article) => article.category === filter),
    [filter],
  );

  const filters: Filter[] = ['All', ...articleCategories];

  return (
    <main id="main" className="pt-28 pb-24 md:pt-36">
      <Seo
        title="Blog"
        path="/blog"
        description="Programming notes, project write-ups and tutorials for students, written by Leo — an Information Technology Education student and developer."
      />
      <Container>
        <header className="max-w-2xl">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-4 text-display-lg font-semibold text-balance text-content">
            Writing things down as I learn them
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-content-muted">
            Programming notes, project write-ups and tutorials for other students. The list below is
            what I plan to write — each piece is marked as a draft until it is published.
          </p>
        </header>

        {publishedArticles.length === 0 && (
          <Card tone="dashed" padding="md" className="mt-10 max-w-2xl">
            <p className="text-sm text-content-muted">
              Nothing is published yet. These are planned articles, listed openly rather than
              hidden, so you can see what is coming.
            </p>
          </Card>
        )}

        <div
          role="group"
          aria-label="Filter articles by category"
          className="mt-10 -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0"
        >
          {filters.map((category) => {
            const selected = filter === category;
            const count =
              category === 'All'
                ? sortedArticles.length
                : sortedArticles.filter((article) => article.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={selected}
                className={cn(
                  'inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm',
                  'transition-colors duration-200',
                  selected
                    ? 'border-accent bg-accent text-accent-contrast'
                    : 'border-line bg-surface-raised text-content-muted hover:border-line-strong hover:text-content',
                )}
              >
                {category}
                <span
                  className={cn(
                    'font-mono text-[11px]',
                    selected ? 'text-accent-contrast/70' : 'text-content-subtle',
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="sr-only">
          {visible.length} {visible.length === 1 ? 'article' : 'articles'} shown
        </p>

        {visible.length > 0 ? (
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((article, index) => (
              <li key={article.slug} className="h-full">
                <Reveal delay={Math.min(index, 3) * 0.05} className="h-full">
                  <BlogCard article={article} />
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <Card tone="dashed" padding="lg" className="mt-10">
            <p className="text-sm text-content-muted">
              Nothing in this category yet. Try another one.
            </p>
          </Card>
        )}

        <div className="mt-16 border-t border-line pt-10">
          <Button to="/" variant="secondary">
            Back to the portfolio
          </Button>
        </div>
      </Container>
    </main>
  );
}
