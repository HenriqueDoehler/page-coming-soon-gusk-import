import Head from "next/head";
import Link from "next/link";

import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import Overlay from "@/layout/overlay";

const DynamicComponentWithNoSSRModel1 = dynamic(
  () => import("../components/3D/iphone"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Gusk Import</title>
        <meta name="description" content="GUSK Imports" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DynamicComponentWithNoSSRModel1 speed={0.1} />
        <img
          className={styles.logoImgGusk}
          src={"/guskLogosvg.svg"}
          alt="logo"
        />
        <Overlay />
        <Link href="https://www.instagram.com/guskimports">
          <span target="_blank" rel="noopener noreferrer">
            <div className={styles.instagramButton}>
              <img
                src="/instaIcon.png" // Ajuste para o caminho correto do seu ícone
                alt="Instagram Icon"
                width={50} // Ajuste para o tamanho desejado
                height={50} // Ajuste para o tamanho desejado
              />
            </div>
          </span>
        </Link>
      </main>
    </>
  );
}
