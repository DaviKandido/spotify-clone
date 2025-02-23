import imgButtonLeft from "../../../public/assets/icons/small-left.png";
import imgButtonRight from "../../../public/assets/icons/small-right.png";
import imgSearch from "../../../public/assets/icons/search.png";
import Image from "next/image";

export default function Navigator({pesquisa, setPesquisa, placeholder}) {

  return(
  
    <nav className="flex justify-between items-center ">
      <div className="flex flex-row justify-around items-center w-full">
  
        <div className="flex items-center justify-around ">
          <button type="button" title="Navigation button"
            className=" mr-[1.25rem] w-[32px] h-[32px] bg-[var--bg-arrow-colo)] rounded-none" >
            <Image src={imgButtonLeft} alt="button"/>
          </button>
          <button type="button" title="Navigation button"
            className=" w-[32px] h-[32px] bg-[var--bg-arrow-colo)] rounded-none">
            <Image src={imgButtonRight} alt="button"/>
          </button>
        </div>
  
        <div className="flex items-center w-[364px] h-[48px] ml-[8px] bg-[var(--background-card-gray)] rounded-[500px] border-solid border-[#b3b3b300] border-[1px]">
          <Image src={imgSearch} alt=""  
            className="w-[16px] h-[16px] ml-[10px]"/>
          <input 
            id="search-input" 
            type="text" 
            placeholder={placeholder}
            maxLength={800} 
            className="bg-transparent pr-[100px] pl-[12px] text-ellipsis text-[#fff] overflow-hidden whitespace-nowrap outline-none"
            onChange={(e) => setPesquisa(e.target.value.toLowerCase())}
            value={pesquisa}
          />
        </div>
  
        <div className="flex items-center">
          <button type="button" className="text-[#a7a7a7] font-[700] text-[16px] bg-transparent mr-[32px] hover:text-[#fff]">
            Inscreva-se
          </button>
          <button type="button" className="w-[100px] h-[48px] text-[#000] text-[16px] font-[700] bg-[#fff] rounded-[500px] hover:text-[#fff] hover:bg-[#000]">
            Entrar
          </button>
        </div>
        </div>
      </nav>
  
  )
}