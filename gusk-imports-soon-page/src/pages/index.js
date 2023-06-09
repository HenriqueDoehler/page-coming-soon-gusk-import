import Head from "next/head";
import Image from "next/image";
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
        <title>Create Next App</title>
        <meta name="description" content="GUSK Imports" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DynamicComponentWithNoSSRModel1 speed={1} />
        <Overlay />
      </main>
    </>
  );
}
