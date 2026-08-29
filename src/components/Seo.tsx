import { siteConfig } from '@/data/site';
import { absoluteUrl, hasSiteUrl, pageTitle } from '@/lib/seo';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
  jsonLd?: Record<string, unknown>[];
}

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
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle(title)} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={`${siteConfig.fullName} — Portfolio`} />
      <meta property="og:locale" content="en" />
      {hasSiteUrl && <meta property="og:url" content={url} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle(title)} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      {jsonLd.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  );
}
