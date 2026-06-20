import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Build the search index at build time and serve it as a static, CDN-cacheable
// file. The client (RootProvider `search.options.type = 'static'`) downloads it
// once and runs Orama in the browser, so there are no per-keystroke round-trips.
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/open-source/supported-languages
  language: 'english',
});
