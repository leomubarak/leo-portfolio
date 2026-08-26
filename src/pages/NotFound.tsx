import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Seo } from '@/components/Seo';

export function NotFound() {
  return (
    <main id="main" className="flex min-h-[70vh] items-center py-24">
      <Seo title="Page not found" noIndex description="This page does not exist." />
      <Container className="max-w-xl text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
          This page does not exist.
        </h1>
        <p className="mt-4 text-content-muted">
          The link may be out of date, or the page has not been built yet. Head back to the
          portfolio and pick a section from there.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
      </Container>
    </main>
  );
}
