"use client";
import Navigator from "@/components/Navigator/Navigator";
import { useState } from "react";
import ItemList from "../buscar/_components/ItemList/ItemList";
import { songsArray } from "@/assets/database/songs";

export default function Songs() {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <main className='className="max-w-[80vw] ml-[20em]'>
      <div className="mr-[32px] p-4 m-2 bg-[var(--background-card-black)] rounded-[15px]">
        <Navigator
          pesquisa={pesquisa}
          setPesquisa={setPesquisa}
          placeholder={"Descubra sua musica favorita..."}
        />
      </div>

      {/* Item List de musicas*/}
      <ItemList
        title={"Músicas populares"}
        items={songsArray.length}
        itemsArray={songsArray}
        path={"/songs"}
        idPath={"/song"}
      />
    </main>
  );
}
