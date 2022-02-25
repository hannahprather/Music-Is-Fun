import { ProxyState } from "../AppState.js";
import songService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let template = ''
  ProxyState.songs.forEach(s => template += `<li onclick="app.songsController.setActiveSong('${s.id}')">${s.title}- ${s.artist}</li>`)
  document.getElementById('results').innerHTML = template
}


/**Draws the Users saved songs to the page */
function _drawPlaylist() {
  let template = ''
  ProxyState.playlist.forEach(s => template += `<li onclick="app.songsController.setActiveSong('${s.id}')">${s.title}- ${s.artist}</li>`)
  document.getElementById('playlist').innerHTML = template
}


function _drawActiveSong() {
  let song = ProxyState.activeSong
  if (song.title) {
    document.getElementById('active').innerHTML = ProxyState.activeSong.Template
  } else {
    document.getElementById('active').innerHTML = 'Select a Song'
  }

}

//Public
export default class SongsController {
  constructor() {
    ProxyState.on('songs', _drawResults)
    ProxyState.on('activeSong', _drawActiveSong)
    ProxyState.on('playlist', _drawPlaylist)
    //TODO Don't forget to register your listeners and get your data
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      songService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  setActiveSong(id) {
    songService.getActiveSong(id)

  }
  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  async addSong(id) {
    try {
      await songService.addSong(id)
    } catch (error) {
      console.error(error);
    }

  }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) { }
}
