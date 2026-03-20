import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import {createLocalFontProcessor} from '@unocss/preset-web-fonts/local';
import {joinBasePath} from './config/base-path.mjs';

const localFontProcessor = createLocalFontProcessor({
  cacheDir: 'node_modules/.cache/unocss/fonts',
  fontAssetsDir: 'public/assets/fonts',
  fontServeBaseUrl: joinBasePath('/assets/fonts'),
});

export default defineConfig({
  presets: [
    presetWind4({
      dark: 'media',
    }),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'text-bottom',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,500,700',
        display: 'Playfair Display:400',
      },
      processors: localFontProcessor,
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],

  theme: {
    colors: {
      brand: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        DEFAULT: '#8FAF9A',
        soft: '#DCE7E0',
        muted: '#AFC6B6',
        strong: '#7C9F8A',
      },

      surface: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        DEFAULT: '#F6F3EE',
        muted: '#F0ECE7',
        soft: '#E8EFEA',
      },

      accent: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        DEFAULT: '#C98C73',
        soft: '#E8B9A4',
        strong: '#B8755A',
      },

      ink: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        DEFAULT: '#3E3E3E',
        muted: '#6B6B6B',
        subtle: '#9A9A9A',
      },
    },
    // Font: {
    //   display: '"Cormorant Garamond", Georgia, serif',
    // },
    shadow: {
      soft: '0 10px 30px rgba(62, 62, 62, 0.08)',
      card: '0 8px 24px rgba(62, 62, 62, 0.06)',
    },

    radius: {
      spa: '1.5rem',
    },

    containers: {
      maxWidth: {
        content: '72rem',
      },
    },
  },

  shortcuts: {
    'container-page': 'mx-auto max-w-[72rem] px-4 sm:px-6 lg:px-8',
    'section-pad': 'py-16 sm:py-20 lg:py-24',
    'heading-xl':
      'font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-ink',
    'heading-lg': 'font-display text-3xl sm:text-4xl leading-tight text-ink',
    'heading-md': 'font-display text-2xl sm:text-3xl leading-snug text-ink',
    'body-lg': 'text-lg leading-8 text-ink-muted',
    'body-base': 'text-base leading-7 text-ink-muted',
    'btn-primary':
      'inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-brand-strong',
    'btn-secondary':
      'inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20',
    'card-soft':
      'rounded-spa border border-surface-soft bg-white/70 shadow-card backdrop-blur-sm',
    'nav-link': 'text-sm text-ink-muted transition hover:text-ink',
  },
});
