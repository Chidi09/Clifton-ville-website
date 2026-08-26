import { useEffect } from 'react';

const SITE_NAME = 'Cliftonville Gardens';
const DEFAULT_TITLE = 'Cliftonville Gardens | Supported Living Community & Residential Arena';
const DEFAULT_DESCRIPTION = 'Cliftonville Gardens is a premier supported living community and luxury residential estate in Ogun State, Nigeria. Providing 24/7 care, modern amenities, and secure turnkey homes.';
const DEFAULT_IMAGE = 'https://cliftonvillegardens.com/assets/heroimage.jpg';
const BASE_URL = 'https://cliftonvillegardens.com';

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonical,
  image,
  badge = 'Supported Living & Luxury Residences',
  type = 'website',
  jsonLd,
}) => {
  const fullTitle = title 
    ? `${title} | ${SITE_NAME}`
    : DEFAULT_TITLE;

  const fullCanonical = canonical 
    ? (canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`)
    : typeof window !== 'undefined' ? window.location.href : BASE_URL;

  // Generate dynamic Vercel OG image URL if custom image is not provided
  const generatedOgImage = `${BASE_URL}/api/og?title=${encodeURIComponent(title || 'Cliftonville Gardens')}&description=${encodeURIComponent(description)}&badge=${encodeURIComponent(badge)}`;

  const fullImage = image
    ? (image.startsWith('http') ? image : `${BASE_URL}${image}`)
    : generatedOgImage;

  useEffect(() => {
    // 1. Document Title
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      const keywordStr = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      setMetaTag('name', 'keywords', keywordStr);
    }

    // 3. Open Graph (OG)
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullCanonical);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', fullImage);
    setMetaTag('property', 'og:locale', 'en_US');

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImage);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // 6. JSON-LD Structured Data
    const SCRIPT_ID = 'seo-dynamic-jsonld';
    let scriptTag = document.getElementById(SCRIPT_ID);

    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = SCRIPT_ID;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(
        Array.isArray(jsonLd)
          ? {
              '@context': 'https://schema.org',
              '@graph': jsonLd,
            }
          : {
              '@context': 'https://schema.org',
              ...jsonLd,
            }
      );
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Clean up dynamic schema if needed
      const oldScript = document.getElementById(SCRIPT_ID);
      if (oldScript) {
        oldScript.remove();
      }
    };
  }, [fullTitle, description, keywords, fullCanonical, fullImage, type, jsonLd]);

  return null;
};

export default SEO;
