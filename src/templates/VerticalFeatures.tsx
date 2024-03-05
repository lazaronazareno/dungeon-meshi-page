import { Suspense } from 'react';

import { Background } from '@/background/Background';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import VideoComponent from './video-component';

const VerticalFeatures = () => (
  <Background color="bg-orange-100">
    <div className="flex items-center justify-center p-4">
      <Suspense fallback={<p>Loading Video...</p>}>
        <VideoComponent />
      </Suspense>
    </div>
    <Section
      title="Un festín de sabores y aventuras"
      description="Descubre un anime que combina la acción y la fantasía con la deliciosa cocina."
    >
      <VerticalFeatureRow
        title="Un grupo de aventureros con un apetito insaciable"
        description="Conoce a Laios, Senshi, Chilchuck y Marcille, y acompáñalos en su búsqueda de los ingredientes más exóticos."
        image="/assets/images/dm1.webp"
        imageAlt="Laios, Senshi, Chilchuck y Marcille disfrutando de un banquete en la mazmorra."
      />
      <VerticalFeatureRow
        title="Cocina con los monstruos más temibles"
        description="Aprende a preparar deliciosas recetas con los ingredientes más inesperados.

"
        image="/assets/images/dm2.webp"
        imageAlt="Laios preparando un estofado de Wyvern"
        reverse
      />
      <VerticalFeatureRow
        title="Un festín para los ojos y el paladar"
        description="Disfruta de una animación vibrante y colorida que te hará sentir como si estuvieras en la mazmorra con los personajes."
        image="/assets/images/dm3.webp"
        imageAlt="Laios, Senshi, Chilchuck y Marcille rodeados de monstruos derrotados y con ingredientes culinarios en sus manos."
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
