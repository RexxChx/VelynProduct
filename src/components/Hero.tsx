import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/antartikaimg.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-green-600 dark:text-green-400 sm:text-5xl xl:text-6xl">
              Hey Selamat datang!!
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl xl:text-2xl">
              Selamat datang semuanya di website e-commerce ala ala kami. Di halaman website kami, kami menyediakan beberapa banyak product kami di
              list product yang sudah terdaftar di halaman pembelian atau checkout yang sudah di sediakan untuk kebutuhan anda saat ini dan juga ada beberapa product yang menarik lainnya.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              <a
                href="/Product"
                target="_blank"
                rel="noopener"
                className="px-10 py-4 min-w-[200px] sm:min-w-[240px] lg:min-w-[280px] text-lg font-semibold text-white bg-green-500 rounded-full hover:bg-green-600 hover:scale-105 transition-all duration-300 ease-in-out text-center"
              >
                Intip Product
              </a>

              <a
                href="#learn-more"
                className="px-10 py-4 min-w-[200px] sm:min-w-[240px] lg:min-w-[280px] text-lg font-semibold text-green-500 border-2 border-green-500 rounded-full hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out text-center"
              >
                Kontak Kami
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center lg:w-1/2">
          <Image
            src={heroImg}
            width={616}
            height={617}
            className="object-cover"
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </Container>
    </>
  );
};