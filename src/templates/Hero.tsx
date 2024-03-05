import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-orange-200">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/about">About</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'¡Más que una aventura, un festín!:\n'}
            <span className="text-red-600">Dungeon Meshi</span>
          </>
        }
        description="Embárcate en un viaje culinario por las mazmorras más deliciosas."
        button={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.netflix.com/title/81564899"
          >
            <Button xl>¡Empieza a ver ahora en Netflix!</Button>
          </a>
        }
      />
    </Section>
  </Background>
);

export { Hero };
