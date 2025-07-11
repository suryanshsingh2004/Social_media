import "./share.css"

export default function Share(){
    return(
        <div className="share">
            <div className="shareWrapper">
                
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/img1.jpg" alt="" />
                    <input placeholder="What is in your mind?"
                    className="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}