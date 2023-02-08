import "bulma/css/bulma.css";
import PostCard from "./PostCard";
import Alexa from "./imges/Alexa.png";
import Siri from "./imges/Appel.png";
import Cortona from "./imges/Cortona.png";

function App(){

    return(
        <>
        <section class="hero is-small is-primary">
            <div class="hero-body">
                <p class="title">
                   Digital Asistent Programm
                </p>
            </div>
        </section>
        <div className="container">
            <div className="section">
            <div className="columns">
                <div className="column is-3 is-offset-1 "><PostCard titel = "Alexa" imgSrc = {Alexa} heading = "@Alexa99"/></div>
                <div className="column is-3 is-offset-1 "><PostCard titel = "Cortana" imgSrc = {Siri} heading = "@Cortan32"/></div>
                <div className="column is-3 is-offset-1 "><PostCard titel = "Siri"  imgSrc = {Cortona} heading = "@Siri"/></div>
            </div>
            </div>
        </div>
        </>



    );
};

export default App;