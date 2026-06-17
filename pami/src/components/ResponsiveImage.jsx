import { useState } from 'react';

// Single source for <img> rendering. Enforces alt, intrinsic width/height
// (prevents layout shift), srcset/sizes (responsive), and lazy loading by
// default. `priority` opts a hero image into eager loading + high fetchpriority.
// A graceful onError fallback keeps the layout intact if a remote image fails.
export default function ResponsiveImage({
  image,
  className = '',
  sizes,
  priority = false,
  loading,
  ...rest
}) {
  const [failed, setFailed] = useState(false);
  if (!image) return null;

  const { src, srcset, alt, w, h } = image;
  const ratio = w && h ? `${w} / ${h}` : undefined;

  if (failed) {
    return (
      <span
        className={`block bg-paper-2 ${className}`}
        style={{ aspectRatio: ratio }}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      srcSet={srcset}
      sizes={sizes || image.sizes}
      alt={alt}
      width={w}
      height={h}
      loading={loading || (priority ? 'eager' : 'lazy')}
      decoding={priority ? 'sync' : 'async'}
      fetchpriority={priority ? 'high' : 'auto'}
      onError={() => setFailed(true)}
      className={className}
      style={{ aspectRatio: ratio }}
      {...rest}
    />
  );
}
