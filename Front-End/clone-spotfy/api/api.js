import axios from 'axios';

const URL = 'http://localhost:3001';


const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);



export const artistArray = responseArtist.data;
export const songsArray =  responseSongs.data;


// export default buscarSong = async (id) => {
//   const responseSongId = await axios.get(`${URL}/songs/${id}`);
//   return responseSongId.data;
// }