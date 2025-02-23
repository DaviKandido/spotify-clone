"use client";
import Navigator from "@/components/Navigator/Navigator";
import Main from "./_components/Main/Main";
import { useState } from "react";

export default function Buscar() {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <main className="max-w-[80vw] ml-[20em]">
      <div className="mr-[32px] p-4 m-2 bg-[var(--background-card-black)] rounded-[15px]">
        <Navigator
          pesquisa={pesquisa}
          setPesquisa={setPesquisa}
          placeholder={"O que voce quer ouvir..."}
        />
      </div>

      <Main />
    </main>
  );
}
