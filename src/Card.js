import React from "react";
import 'tachyons'

const Card = (props) => {
    const { name, email, id, userName } = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="roboto"></img>
            <div>
                <h2>{name}</h2>
                <h3>{userName}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;