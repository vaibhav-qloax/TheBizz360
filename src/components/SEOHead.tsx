import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
  jsonLd?: Record<string, unknown>;
}

export function SEOHead({
  title,
  description,
  canonicalUrl = 'https://thebizz360.com/',
  ogType = 'website',
  publishedTime,
  author,
  jsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    // Set Document Title
    const formattedTitle = title.includes('TheBizz360') ? title : `${title} | TheBizz360`;
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrVal}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);

    if (publishedTime) {
      setMetaTag('property', 'article:published_time', publishedTime);
    }
    if (author) {
      setMetaTag('property', 'article:author', author);
    }

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Set JSON-LD Schema
    const scriptId = 'thebizz360-seo-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }

    return () => {
      // Clean up script on unmount if needed
    };
  }, [title, description, canonicalUrl, ogType, publishedTime, author, jsonLd]);

  return null;
}
