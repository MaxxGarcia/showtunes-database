import React, { Component } from 'react';
import { connect } from "riddl-js";
import axios from "axios";
import qs from "qs";
import Footer from '../Footer.js'

const url = "https://accounts.spotify.com/api/token";

const config = {
    method: "POST",
    url,
    headers: {
        Authorization: "Basic MDA3MmU2ZGYxYzU0NDIxYzhiMzNlZmNhNjM3YWQxZWM6MDNlZTQxNWU5NjgzNGI0ZTk1MDFiOWNiNjA0OTc0ZTc="
    },
    origin: "https://accounts.spotify.com"
}

const handleChange = (e) => setGlobalState => {
    const { name, value } = e.target;
    setGlobalState(prevState => (
        {
            searchForm: { ...prevState.songForm, [name]: value }
        }
    ))
}

const handleSubmit = (e, searchForm) => setGlobalState => {
    e.preventDefault()
    const songName = searchForm.song.split(" ").map((word, i) => {
        return i > 0 ? `%20${word}` : word
    }).join("")
    console.log(songName)

    axios.get("/oauth").then(response => {
        let token = { Authorization: `Bearer ${response.data.access_token}` }
        axios.get(`https://api.spotify.com/v1/search?q=${songName}&type=track`, { headers: token })
            .then(response => {
                console.log(response.data)
                let albumId = `https://open.spotify.com/embed?uri=spotify:album:${response.data.tracks.items[0].album.id}`;
                setGlobalState({ 
                    iframe: <iframe title={response.data} src={albumId} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>, 
                    searchForm: {song: ""} 
                })
            })
            .catch(err => { console.error(err) })
    })
    setGlobalState({
        searchForm: {
            song: ""
        }
    })
}

class Search extends Component {
    constructor() {
        super();
        this.state = {
                selectedComposer: '',
                selectedLyricist: '',
                selectedShow: '',
                selectedVoice: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        const {composers, lyricists, musicals, voices } = this.props
        return (
            <div className="adminWrapper">

                <form >
                    <input placeholder="Voice" type="text" name="selectedVoice" list="voiceName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="voiceName">
                        {voices.map((voice, i) => {
                            return <option value={voice} key={voice + i}> {voice} </option>
                        })}
                    </datalist>


                    <input placeholder="Composers" type="text" name="selectedComposer" list="composerName" value={this.state.name} onChange={this.handleChange} />
                    <datalist id="composerName">
                        {composers.map((composer, i) => {
                            return <option value={composer} key={composer + i}> {composer} </option>
                        })}
                    </datalist>

                    <input placeholder="Lyricists" type="text" name="selectedLyricist" list="lyricistName" value={this.state.name} onChange={this.handleChange}/>
                    <datalist id="lyricistName">
                        {lyricists.map((lyricist, i) => {
                            return <option value={lyricist} key={lyricist + i}> {lyricist} </option>
                        })}
                    </datalist>

                    <input placeholder="Shows" type="text" name="selectedShow" list="showName" value={this.state.name} onChange={this.handleChange}/>
                    <datalist id="showName">
                        {musicals.map((show, i) => {
                            return <option value={show} key={show + i}> {show} </option>
                        })}
                    </datalist>
                    <button> search </button>
                </form>
                {this.props.iframe}
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia totam in nostrum, nam cumque quam, culpa reiciendis aut dolorum quod laboriosam tempore illum pariatur sequi, nemo voluptatem assumenda ratione doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum tempore nesciunt ex voluptatibus perspiciatis temporibus fugiat necessitatibus. Et repudiandae quasi assumenda blanditiis, quaerat voluptate tempore in atque id animi!Lorem
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis ratione modi sit assumenda, distinctio quasi. Fugiat ad eligendi optio culpa corrupti sapiente aliquid quos voluptas. Reprehenderit porro quisquam iure?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, architecto ipsum! Nulla quisquam ratione quidem doloremque, quos, nostrum autem delectus consequatur, nam dolores placeat similique perferendis magnam deleniti aspernatur asperiores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione itaque, assumenda omnis, labore, enim nam quae aliquid quos ea eligendi repellat. Hic numquam et corporis minima error deserunt soluta.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, totam incidunt dignissimos illo odit enim consequatur soluta ea doloremque minima ipsum possimus unde! Cumque neque eaque optio modi! Earum, ipsa.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, enim. Reprehenderit veritatis voluptas nihil dolorum nam temporibus odit tempore amet, rem dolor placeat perspiciatis? Aliquid, accusantium eaque! Architecto, repellendus nemo!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, perspiciatis. Et quasi dignissimos facilis similique fugit aperiam debitis dolores sapiente sit reprehenderit. Quia nesciunt necessitatibus hic suscipit quisquam dicta ea?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, rerum quos? Tenetur mollitia inventore similique debitis labore quaerat, repudiandae placeat, et reiciendis laudantium doloremque beatae dolorum! Tenetur vero exercitationem magni.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consectetur doloremque ipsa earum, laboriosam repellendus est expedita commodi, error autem voluptas maxime molestias illum rem enim aspernatur? Odio, animi perspiciatis
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, assumenda culpa nesciunt repellendus adipisci maiores modi officiis reiciendis velit nam minus illo rem expedita? Aliquam quibusdam nostrum tenetur odit repudiandae.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolorum asperiores atque obcaecati rem optio at eveniet quas. Nobis labore quia sed eum saepe. Corrupti incidunt molestiae id pariatur. Nostrum?
                </p>
                <Footer />
            </div>
        );
    }
}

export default connect(Search, null, { });
