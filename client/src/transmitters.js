import axios from "axios";
import { connect } from "riddl-js"

export const handleChange = (e) => {
    this.props.setGlobalState({[e.target.name]: e.target.value})
}
export const handleSubmit = (e, body) => {
    body.composers.split(",");
    body.lyricists.split(",");
    axios.post(`/songs`, body)
        .then(response => response.json())
        .catch(err => { console.error(err, "err message") })
}