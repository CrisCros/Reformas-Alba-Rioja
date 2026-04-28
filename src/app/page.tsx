import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { GallerySection } from '@/components/GallerySection';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ServiceCards } from '@/components/ServiceCards';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServiceCards />
      <GallerySection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
