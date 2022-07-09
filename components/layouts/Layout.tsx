import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../ui/Navbar";

interface Props {
  // children: JSX.Element;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Rodrigo Soto Cid"></meta>
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        ></meta>
        <meta name="keyword" content={`${title}, pokemon, pokedex`}></meta>
        <meta property="og:title" content={`información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es una nueva publicación sobre ${title} en la cual compartimos contigo una serie de carácteristicas relacionadas con este gran Pokémon`}
        />
        <meta property="og:image" content={`${origin}/img/poke2.jpg`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
