import { Background } from '@/background/Background';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Background color="bg-orange-50">
    <Section>
      <CTABanner
        title="¡Contrata a los aventureros más sabrosos!"
        subtitle="¿Necesitas ayuda para explorar una mazmorra? ¡Deja que Laios y su equipo te cocinen un festín con los monstruos que encuentres!"
        button={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.netflix.com/title/81564899"
          >
            <Button>¡Reserva tu aventura culinaria ahora!</Button>
          </a>
        }
      />
    </Section>
  </Background>
);

export { Banner };
