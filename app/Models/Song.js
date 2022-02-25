export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId?.toString() || data.id;
  }

  get Template() {
    return `
    <div onclick="app.songsController.addSong()" class="bg-dark text-center text-light rounded shadow">
    <h3>${this.artist}</h3>
    <img src=${this.albumArt} alt="" />
    <h6>${this.title}</h6>
  </div>
        `;
  }

  get playlistTemplate() {
    return `
<h4> ${this.title} ${this.artist} </h4>
        `;
  }
}
