import { siteConfig } from '@/data/site';
import { absoluteUrl, hasSiteUrl, pageTitle } from '@/lib/seo';

interface SeoProps {
  /** Page name. Omit on the home page to use the configured full title. */
  title?: string;
  description?: string;
  /** Route path, e.g. '/blog'. Used for canonical and og:url. */
  path?: string;
  /** Absolute or root-relative image path for social cards. */
  image?: string;
  type?: 'website' | 'article' | 'profile';
  /** Keeps a page out of search results — used for 404 and the style guide. */
  noIndex?: boolean;
  /** Schema.org objects to embed as JSON-LD. */
  jsonLd?: Record<string, unknown>[];
}

/**
 * React 19 hoists <title>, <meta> and <link> into <head> from anywhere in the
 * tree, so no helmet library is needed. Note that these tags are written by
 * JavaScript: crawlers that run JS (including Google) see them, simpler ones
 * fall back to the static tags in index.html. See the README on prerendering.
 */
export function Seo({
  title,
  description = siteConfig.seo.description,
  path = '/',
  image = siteConfig.images.ogImage,
  type = 'website',
  noIndex = false,
  jsonLd = [],
}: SeoProps) {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith('http') ? image : absoluteUrl(image);

  return (
    <>
      <title>{pageTitle(title)}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {hasSiteUrl && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle(title)} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={`${siteConfig.name} — Portfolio`} />
      <meta property="og:locale" content="en" />
      {hasSiteUrl && <meta property="og:url" content={url} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle(title)} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          // Content is built from the site's own data files, not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
