"use client";
import Footer from "../components/Footer/Footer";
import Navigator from "../components/Navigator/Navigator";
import Cards from "@/components/Cards/Cards";
import { useState } from "react";

export default function Home() {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <main>
      <div className="max-w-[80vw] ml-[20em] mr-[32px] p-4 m-2 bg-[var(--background-card-black)] rounded-[15px]">
        <Navigator
          pesquisa={pesquisa}
          setPesquisa={setPesquisa}
          placeholder={"Qual seu artista preferido..."}
        />
      </div>

      <div className="bg-[var(--background-card-black)] max-w-[80vw] ml-[20em] mr-[32px] px-10 rounded-[15px]">
        <Cards pesquisa={pesquisa} />
      </div>

      <Footer />
    </main>
  );
}

//rafce
//rfc

// Arrow Function
// const app = () => <h1>Olá, mundo</h1>

// Nomeação de Componentes
// PascalCase

// Nomeação de variáveis, funções
// camelCase

// Nomeação de arquivos
// PascalCase


//Nomeação de classes em CSS
// Metodologia BEM
// Block
// Element
// Modifier
// bloco__elemento--modificador
// header
// header__link
// header__link--active