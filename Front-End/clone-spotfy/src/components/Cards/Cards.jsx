import img1 from "../../../public/assets/playlist/1.jpeg";
import img2 from "../../../public/assets/playlist/2.png";
import img3 from "../../../public/assets/playlist/3.jpeg";
import img4 from "../../../public/assets/playlist/4.jpeg";
import img5 from "../../../public/assets/playlist/5.jpeg";
import img6 from "../../../public/assets/playlist/6.jpeg";
import img7 from "../../../public/assets/playlist/7.jpeg";
import img8 from "../../../public/assets/playlist/8.jpeg";
import img9 from "../../../public/assets/playlist/9.jpeg";
import img10 from "../../../public/assets/playlist/10.jpeg";
import img11 from "../../../public/assets/playlist/11.jpeg";
import img12 from "../../../public/assets/playlist/12.jpeg"; 
import img13 from "../../../public/assets/playlist/13.jpeg"; 
import img14 from "../../../public/assets/playlist/14.jpeg"; 
import img15 from "../../../public/assets/playlist/15.jpeg"; 
import Image from "next/image";
import { useEffect } from "react";
import { Play } from "lucide-react";


import "./Cards.css";

export default function Cards({pesquisa}) {


    useEffect(() => {

        const resultPlaylists = document.getElementById("result-playlists")
        const resultArtist = document.getElementById("result-artist")

        console.log(pesquisa)
        function requetApi(){
            const url = `http://localhost:8000/artists?name_like=${pesquisa}`
            fetch(url)
                .then((response) => response.json())
                .then((result) => {
                    displayResult(result)
                })
        }

        if(pesquisa === ""){
            resultPlaylists.classList.remove("hidden");
            resultArtist.classList.add("hidden");
        }else{
            requetApi()
        }

        function displayResult(result){
            resultPlaylists.classList.add("hidden");
            const artistName = document.getElementById("artist-name")
            const artistImg = document.getElementById("artist-img")

            result.map((artist) => {
                artistName.innerText = artist.name;
                artistImg.src = artist.urlImg;
            })

            resultArtist.classList.remove("hidden");
        }

    }, [pesquisa])


  
  return (
            // <!-- PLAYLIST -->
            <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>

                    {/* <!-- LIST DE CARDS --> */}
                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            <section className="offer__list-item">
                                {/* <!-- CARD 1 --> */}
                                <a href="" className="cards">
                                    <div className="cards card1">
                                        <Image src={img1} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 2 --> */}
                                <a href="" className="cards">
                                    <div className="cards card2">
                                        <Image src={img2} alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 3 --> */}
                                <a href="" className="cards">
                                    <div className="cards card3">
                                        <Image src={img3} alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 4 --> */}
                                <a href="" className="cards">
                                    <div className="cards card4">
                                        <Image src={img4} alt="" />
                                        <span>Creators</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 5 --> */}
                                <a href="" className="cards">
                                    <div className="cards card5">
                                        <Image src={img5} alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 6 --> */}
                                <a href="" className="cards">
                                    <div className="cards card6">
                                        <Image src={img6} alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 7 --> */}
                                <a href="" className="cards">
                                    <div className="cards card7">
                                        <Image src={img7} alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 8 --> */}
                                <a href="" className="cards">
                                    <div className="cards card8">
                                        <Image src={img8} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 9 --> */}
                                <a href="" className="cards">
                                    <div className="cards card9">
                                        <Image src={img9} alt="" />
                                        <span>Funk</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 10 --> */}
                                <a href="" className="cards">
                                    <div className="cards card10">
                                        <Image src={img10} alt="" />
                                        <span>MPB</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 11 --> */}
                                <a href="" className="cards">
                                    <div className="cards card11">
                                        <Image src={img11} alt="" />
                                        <span>Rock</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 12 --> */}
                                <a href="" className="cards">
                                    <div className="cards card12">
                                        <Image src={img12} alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 13 --> */}
                                <a href="" className="cards">
                                    <div className="cards card13">
                                        <Image src={img13} alt="" />
                                        <span>Indie</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 14 --> */}
                                <a href="" className="cards">
                                    <div className="cards card14">
                                        <Image src={img14} alt="" />
                                        <span>Relax</span>
                                    </div>
                                </a>

                                {/* <!-- CARD 15 --> */}
                                <a href="" className="cards">
                                    <div className="cards card15">
                                        <Image src={img15} alt="" />
                                        <span>Música Latina</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>

                <div id="result-artist" className="hidden">
                    <div className="grid-container">
                        <div className="artist-card" id="">
                            <div className="card-img">
                                <img id="artist-img" className="artist-img" />
                                <div className="play">
                                    <span className="fa fa-solid fa-play"><Play/></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <a title="Foo Fighters" className="vst " href="">
                                  <span className="artist-categorie block">Artista: </span>
                                  <span className="artist-name" id="artist-name"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

                
  )
}