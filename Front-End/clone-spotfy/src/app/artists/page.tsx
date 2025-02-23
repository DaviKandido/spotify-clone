"use client";
import Navigator from "@/components/Navigator/Navigator";
import { useState } from "react";
import ItemList from "../buscar/_components/ItemList/ItemList";
import { artistArray } from "@/assets/database/artists";

export default function Artists() {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <main className='className="max-w-[80vw] ml-[20em]'>
      <div className="mr-[32px] p-4 m-2 bg-[var(--background-card-black)] rounded-[15px]">
        <Navigator
          pesquisa={pesquisa}
          setPesquisa={setPesquisa}
          placeholder={"Seu artista favorito ouve..."}
        />
      </div>

      <div className="main">
        {/* Item List de Artistas*/}
        <ItemList
          title={"Artistas populares"}
          items={artistArray.length}
          itemsArray={artistArray}
          path={"/artists"}
          idPath={"/artist"}
        />
      </div>
    </main>
  );
}
