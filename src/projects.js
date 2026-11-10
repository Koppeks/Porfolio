import catalogo1 from './images/Suvanza/Catalogo/Suvanza-Catalogo-1.webp';
import catalogo2 from './images/Suvanza/Catalogo/Suvanza-Catalogo-2.webp';
import catalogo3 from './images/Suvanza/Catalogo/Suvanza-Catalogo-3.webp';
import institucional1 from './images/Suvanza/Institucional/Suvanza-Institucional-1.webp';
import institucional2 from './images/Suvanza/Institucional/Suvanza-Institucional-2.webp';
import institucional3 from './images/Suvanza/Institucional/Suvanza-Institucional-3.webp';
import institucional4 from './images/Suvanza/Institucional/Suvanza-Institucional-4.webp';
import institucional5 from './images/Suvanza/Institucional/Suvanza-Institucional-5.webp';
import institucional6 from './images/Suvanza/Institucional/Suvanza-Institucional-6.webp';
import institucional7 from './images/Suvanza/Institucional/Suvanza-Institucional-7.webp';
import institucional8 from './images/Suvanza/Institucional/Suvanza-Institucional-8.webp';
import urlito1 from './images/Urlito/Urlito-1.webp';
import urlito2 from './images/Urlito/Urlito-2.webp';
import urlito3 from './images/Urlito/Urlito-3.webp';
import urlito4 from './images/Urlito/Urlito-4.webp';
import urlito5 from './images/Urlito/Urlito-5.webp';
import gwaka1 from './images/Gwaka/Gwaka1.webp';
import gwaka2 from './images/Gwaka/Gwaka2.webp';
import gwaka3 from './images/Gwaka/Gwaka3.webp';
import alrato1 from './images/Alrato/Alrato-1.svg';
import alrato2 from './images/Alrato/Alrato-2.webp';
import alrato3 from './images/Alrato/Alrato-3.webp';
import alrato4 from './images/Alrato/Alrato-4.webp';

export const PROJECTS = [
  {
    id: 1,
    name: 'portfolio.gwaka.title',
    descKey: 'portfolio.gwaka.description',
    details: ['portfolio.gwaka.details.0', 'portfolio.gwaka.details.1', 'portfolio.gwaka.details.2', 'portfolio.gwaka.details.3', 'portfolio.gwaka.details.4', 'portfolio.gwaka.details.5'],
    stack: ['javascript', 'react', 'tanstack', 'tailwind', 'extension', 'browser', 'css', 'html'],
    live: 'https://wakatime-for-apps-script.vercel.app/',
    github: 'https://github.com/Koppeks/wakatime-gas',
    extra: 'https://chromewebstore.google.com/detail/wakatime-for-google-apps/gmpiofbkheibmaofamolbnahecgafkje',
    images: [gwaka1, gwaka2, gwaka3],
  },
  {
    id: 2,
    name: 'portfolio.alrato.title',
    descKey: 'portfolio.alrato.description',
    details: ['portfolio.alrato.details.0', 'portfolio.alrato.details.1', 'portfolio.alrato.details.2', 'portfolio.alrato.details.3', 'portfolio.alrato.details.4', 'portfolio.alrato.details.5'],
    stack: ['typescript', 'nextjs', 'tailwind', 'node.js', 'prisma', 'postgresql', 'supabase'],
    live: 'https://www.alrato.com/',
    github: '',
    extra: '',
    images: [alrato1, alrato2, alrato3, alrato4],
  },
  {
    id: 3,
    name: 'portfolio.urlito.title',
    descKey: 'portfolio.urlito.description',
    details: ['portfolio.urlito.details.0', 'portfolio.urlito.details.1', 'portfolio.urlito.details.2'],
    stack: ['supabase', 'react', 'nextjs', 'tailwind', 'motion', 'maplibre-gl', 'typescript', 'eslint', 'react-dom'],
    live: 'https://urlito-khaki.vercel.app',
    github: '',
    extra: '',
    images: [urlito1, urlito2, urlito3, urlito4, urlito5],
  },
  {
    id: 4,
    name: 'portfolio.suvanza-catalogo.title',
    descKey: 'portfolio.suvanza-catalogo.description',
    details: ['portfolio.suvanza-catalogo.details.0', 'portfolio.suvanza-catalogo.details.1', 'portfolio.suvanza-catalogo.details.2', 'portfolio.suvanza-catalogo.details.3', 'portfolio.suvanza-catalogo.details.4', 'portfolio.suvanza-catalogo.details.5'],
    stack: ['turso', 'react', 'nextjs', 'tailwind', 'typescript', 'eslint', 'react-dom', 'cloudinary', 'odoo'],
    live: 'https://suvanza-catalogo.vercel.app/',
    github: '',
    extra: '',
    images: [catalogo1, catalogo2, catalogo3],
  },
  {
    id: 5,
    name: 'portfolio.suvanza-institucional.title',
    descKey: 'portfolio.suvanza-institucional.description',
    details: ['portfolio.suvanza-institucional.details.0', 'portfolio.suvanza-institucional.details.1', 'portfolio.suvanza-institucional.details.2', 'portfolio.suvanza-institucional.details.3', 'portfolio.suvanza-institucional.details.4', 'portfolio.suvanza-institucional.details.5'],
    stack: ['typescript', 'nextjs', 'react', 'tailwind', 'turso', 'cloudinary', 'resend', 'upstash', 'meta', 'three.js', 'next-intl'],
    live: 'https://suvanza.com.ar/',
    github: '',
    extra: '',
    images: [institucional1, institucional2, institucional3, institucional4, institucional5, institucional6, institucional7, institucional8],
  },
];
