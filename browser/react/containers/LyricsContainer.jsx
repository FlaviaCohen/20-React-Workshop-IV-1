import React from "react";
import { store } from "../store";
import Lyrics from "../components/Lyrics";
import setLyrics from "../action-creators/lyrics";
import axios from "axios";

class LyricsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(
      {
        artistQuery: "",
        songQuery: "",
      },
      store.getState()
    );

    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setArtist(artist) {
    this.setState({ artistQuery: artist });
  }

  setSong(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        res.data;
        store.dispatch(setLyrics(res.data.lyric));
      });
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <Lyrics
        setArtist={this.setArtist}
        setSong={this.setSong}
        handleSubmit={this.handleSubmit}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        text={this.state.text}
      />
    );
  }
}

export default LyricsContainer;
