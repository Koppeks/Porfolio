import urlito1 from './images/Urlito/Urlito-1.PNG';
import urlito2 from './images/Urlito/Urlito-2.PNG';
import urlito3 from './images/Urlito/Urlito-3.PNG';
import urlito4 from './images/Urlito/Urlito-4.PNG';
import urlito5 from './images/Urlito/Urlito-5.PNG';
import gwaka1 from './images/Gwaka/Gwaka1.PNG';
import gwaka2 from './images/Gwaka/Gwaka2.PNG';
import gwaka3 from './images/Gwaka/Gwaka3.gif';
import alrato1 from './images/Alrato/Alrato-1.svg';
import alrato2 from './images/Alrato/Alrato-2.PNG';
import alrato3 from './images/Alrato/Alrato-3.PNG';
import alrato4 from './images/Alrato/Alrato-4.PNG';

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
    live: 'https://sistema-contable-simil-hb.vercel.app/',
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
];
