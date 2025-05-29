import { Benefits } from "@/components/Benefits";
import { benefitOne, benefitTwo } from "@/components/data";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";

export default function Home() {
  return (
    <Container>
      <section id="beranda">
        <Hero />
      </section>

      <section id="tentang">
        <SectionTitle
          preTitle="Tentang product kami"
          title="Tentang layanan kami untuk anda!?"
        >
          Untuk Product kami yang sangat murah meriah dan juga barang terjamin bagus dan elegeant mewah, dan
           garansi jika barang tidak sesuai atau ada terkendala saat memesan atau sudah membeli. kita menjual product product untuk kebutuhan 
          anda yang sangat terjangkau dan berkualitas
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </section>
    </Container>
  );
}
