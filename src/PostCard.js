
function PostCard({titel, heading ,imgSrc}){

    return(

        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src = {imgSrc} alt = "logo-pic"/>
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{titel}</p>
                <p className="subtitle is-4">{heading}</p>
            </div>
        </div>
    );

};

export default PostCard;