import type { StyleXOptions } from '@stylexswc-toss/rs-compiler';

export interface UnpluginStylexRSOptions {
  fileName?: string;
  useCSSLayers?: boolean;
  pageExtensions?: string[];
  rsOptions?: StyleXOptions;
  extractCSS?: boolean;
}
