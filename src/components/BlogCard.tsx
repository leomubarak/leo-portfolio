import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react';
import { Card, Tag } from '@/components/ui';
import type { Article } from '@/data/articles';

interface BlogCardProps {
  article: Article;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Draft articles render as plain cards with a Draft label and no link —
 * a planned piece must never look like a published one.
 */
export function BlogCard({ article }: BlogCardProps) {
  const isPublished = article.status === 'published' && Boolean(article.href);
  const isExternal = article.href?.startsWith('http');

  return (
    <Card interactive={isPublished} padding="none" className="flex h-full flex-col overflow-hidden">
      <div className="aspect-16/9 overflow-hidden border-b border-line bg-surface-sunken">
        <img
          src={article.cover}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Tag tone="accent">{article.category}</Tag>
          {!isPublished && (
            <Tag tone="outline" dot>
              Draft
            </Tag>
          )}
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold text-content">
          {isPublished ? (
            <a
              href={article.href}
              {...(isExternal && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              className="after:absolute after:inset-0 after:content-['']"
            >
              {article.title}
            </a>
          ) : (
            article.title
          )}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-content-muted">
          {article.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-4 font-mono text-[11px] text-content-subtle">
          {article.date && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={13} aria-hidden="true" />
              {formatDate(article.date)}
            </span>
          )}
          {article.readingMinutes && (
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} aria-hidden="true" />
              {article.readingMinutes} min read
            </span>
          )}
          {isPublished ? (
            <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent">
              Read more
              <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          ) : (
            <span className="ml-auto">Not published yet</span>
          )}
        </div>
      </div>
    </Card>
  );
}
