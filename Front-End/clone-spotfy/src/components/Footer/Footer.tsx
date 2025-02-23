
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 bg-gradient-to-r from-fuchsia-600 to-indigo-600  py-[15px] px-[40px] flex justify-between w-full">
        <div className="flex-shrink-0">
            <p className="text-[#ffffff] uppercase font-[400] mb-[10px] ">Testar o Premium de graça</p>
            <p className="text-[#ffffff text-[14px] font-[500]">
                Inscreva-se para curtir música ilimitada e podcasts só com alguns
                anúncios. Não precisa de cartão de crédito.
            </p>
        </div>
        <div className="button">
            <button type="button" className="bg-[#ffffff] text-[#000000] font-bold text-[16px] px-[30px] py-[14px] border-[0px] rounded-[40px] flex-shrink-0">
              Inscreva-se grátis
            </button>
        </div>
    </footer>
  )
}