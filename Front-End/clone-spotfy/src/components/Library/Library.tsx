import { BookMarked, Globe, Plus } from "lucide-react";


export default function Library() {


  return (
    <div className="bg-[var(--background-card-black)] rounded-[8px] flex justify-between flex-col p-[8px] py-[10px] pt-[px4] text-[#b3b3b3] mt-[10px]">
      <div className="flex justify-between items-center">
        <button type="button" className="flex items-center gap-2 mr-[10px] bg-transparent border-none text-[1em] font-[700] text-center p-[20px] pr-[10px] pl-[10px] hover:text-[#fff]">
          <BookMarked />
          <span>Sua Biblioteca</span>
        </button>
        <Plus strokeWidth={2.5} size={23} className="mr-[15px] cursor-pointer hover:text-[#fff]"/>
      </div>

      <section className="bg-[var(--background-card-gray)] mt-[8px] mb-[8px] p-[16px] pl-[20px] pr-[20px] rounded-[8px]">
        <div className="flex flex-col items-start justify-between">
          <span className="pb-[14px] font-[700]">
              Cire sua primeira playlist
          </span>
          <span className="pb-[14px] font-[500] text-[12px] mb-4">
              É fácil, vamos te ajudar
          </span>
          <button type="button" className="bg-[#fff] text-[#000] rounded-[50px] py-[10px] px-[20px] font-[600] border-black hover:bg-[#000] hover:text-[#fff]">
              Criar playlist
          </button>
        </div>
      </section>

      <div className="my-[25px] mx-[25px]">
        <a href="#" className="text-[#b3b3b3] font-[500] text-[12px] hover:text-[#fff] hover:underline">Cookies</a>
      </div>

      <div>
        <button type="button" className="flex items-center gap-2 bg-transparent border-solid border-[#878787] rounded-[50px] text-[1em] font-[700] text-center p-[8px] px-[10px] hover:text-[#fff] hover:border-[#fff] m-[8px]">
          <Globe/>
          <span>Português do Brasil</span>
        </button>
      </div>
    </div>
  );
}