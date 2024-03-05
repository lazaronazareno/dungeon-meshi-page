import Link from 'next/link';

import { Background } from '@/background/Background';
import { Meta } from '@/layout/Meta';
import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';
import { Footer } from '@/templates/Footer';
import { Logo } from '@/templates/Logo';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <div className="text-gray-800 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />

      <div>
        <Background color="bg-orange-100">
          <Section yPadding="py-6">
            <NavbarTwoColumns logo={<Logo xl />}>
              <li>
                <Link href="/">Home</Link>
              </li>
            </NavbarTwoColumns>
          </Section>

          <Section
            title="Sobre esta Página"
            description="En este documento se describe el proceso de creación de esta página para el anime Dungeon Meshi utilizando Bard, un modelo de lenguaje de IA.
"
          >
            <p>
              Se utilizo la inteligencia artificial{' '}
              <a
                className="text-red-500"
                target="_blank"
                rel="noopener noreferrer"
                href="https://gemini.google.com/app/"
              >
                Gemini
              </a>{' '}
              para generar la mayoria de del contenido, use una plantilla de{' '}
              <a
                className="text-red-500"
                target="_blank"
                rel="noopener noreferrer"
                href="https://creativedesignsguru.com/"
              >
                CreativeDesignsGuru
              </a>{' '}
              y ahora la idea es publicarla y ver como le va en los resultados
              de busqueda. La idea es ver que resultado y cuanta visibilidad
              recibe aun siendo una pagina que saque de una plantilla y solo
              modifique un par de cosas.
            </p>
            <ul className="flex list-decimal flex-col gap-4">
              <li>Recopilación de información:</li>
              <ul>
                <li>
                  Se analizó la consulta inicial del cliente y las preguntas
                  posteriores.
                </li>
                <li>
                  Se investigó el anime Dungeon Meshi y su público objetivo.
                </li>
                <li>Se identificaron los objetivos de la landing page.</li>
              </ul>
              <li>Creación de contenido:</li>
              <ul>
                <li>
                  Se redactaron títulos y subtítulos atractivos para cada
                  sección.
                </li>
                <li>Se elaboraron textos informativos y persuasivos.</li>
                <li>Se seleccionaron imágenes relevantes y de alta calidad.</li>
                <li>Se propusieron ideas para la estructura de la página.</li>
              </ul>
              <li>Optimización para SEO:</li>
              <ul>
                <li>
                  Se utilizaron palabras clave relevantes en el título, la
                  descripción y el contenido.
                </li>
                <li>Se optimizó la meta descripción para Google.</li>
                <li>Se recomendaron estrategias de SEO adicionales.</li>
              </ul>
              <li>Implementación en HTML:</li>
              <ul>
                <li>
                  Se proporcionó al cliente el código HTML completo para la
                  landing page.
                </li>
                <li>
                  Se indicó al cliente cómo modificar el código para adaptarlo a
                  su diseño.
                </li>
              </ul>
              <li>Documentación del proceso:</li>
              <ul>
                <li>Se resumió el proceso de creación de la landing page.</li>
                <li>
                  Se explicó cómo se utilizó Bard como referencia en cada paso.
                </li>
                <li>
                  Se incluyeron capturas de pantalla de la landing page en
                  diferentes etapas de desarrollo.
                </li>
                <li>
                  Se compartieron los resultados de Google Analytics para
                  mostrar el impacto de la landing page.
                </li>
              </ul>
            </ul>
          </Section>
        </Background>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
