import { Seo } from '@/components/Seo';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { About } from '@/components/About';
import { Journey } from '@/components/Journey';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { personSchema, websiteSchema } from '@/lib/structuredData';

export function Home() {
  return (
    <main id="main">
      <Seo path="/" type="profile" jsonLd={[personSchema(), websiteSchema()]} />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Education />
      <Contact />
    </main>
  );
}
