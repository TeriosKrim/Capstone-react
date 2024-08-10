import React, { useEffect, useState } from "react";
import "./App.css";
import charactersData from "./data";

const Scorpion = () => {
    // We set this to null for now so we can put data into this
    const [availability, setAvailbility] = useState(null);

    useEffect(() => {
        console.log(charactersData);
        /*This look at data.js and it looks for the name of that character
        and put it into a variable called matchingData */
        const matchingData = charactersData["scorpion"];
        // setAvailbility will look at matchData
        //and pull data from it
        setAvailbility(matchingData);
    }, []);
    // this checks if availability is not there
    // Returns Loading text
    if (!availability) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4" id="latestVersion"></div>
                </div>
            </div>
            <h1>SCORPION</h1>
            <div className="container">
                <div className="row" id="charSelect">
                    <div className="col">
                        <h2
                            id="selectable"
                            className="row justify-content-start"
                        >
                            Selectable via character selection?
                        </h2>
                        <div className="row" id="ps2">
                            PS2/Xbox{" "}
                            <span
                                id="ps2-status"
                                style={{
                                    color: availability.ps2 ? "green" : "red",
                                }}
                            >
                                {/*This checks if availabilty Ps2 is true */}
                                {/* if it is insert yes otherwise no */}
                                {availability.ps2 ? "YES" : "NO"}
                            </span>
                        </div>
                        <div className="row" id="GameCube">
                            Gamecube{" "}
                            <span
                                id="gamecube-status"
                                style={{
                                    color: availability.gamecube
                                        ? "green"
                                        : "red",
                                }}
                            >
                                {availability.gamecube ? "YES" : "NO"}
                            </span>
                        </div>
                        <div className="row" id="psp">
                            PSP{" "}
                            <span
                                id="psp-status"
                                style={{
                                    color: availability.psp ? "green" : "red",
                                }}
                            >
                                {availability.psp ? "YES" : "NO"}
                            </span>
                        </div>
                        <div className="row" id="ult">
                            Ultimate{" "}
                            <span
                                id="ultimate-status"
                                style={{
                                    color: availability.ultimate
                                        ? "green"
                                        : "red",
                                }}
                            >
                                {availability.ultimate ? "YES" : "NO"}
                            </span>
                        </div>
                    </div>
                    <div className="col" id="scorpionImg">
                        <img
                            src="img/Characters/Primary/Scorpion render2.png"
                            className="scorpion"
                        />
                    </div>
                </div>
                <div className="row justify-content-end"></div>
                <div className="row">
                    <div className="col" id="bio">
                        <h1>Bio</h1>
                        <div className="row" id="scorpBio">
                            <div className="col text-center">
                                <img src="/img/bios/scorpionbio1.png" />
                                <img src="/img/bios/scorpionbio2.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row" id="ending">
                        <h1>Ending</h1>
                        <div className="col" id="scorpEnding">
                            <div className="row text-center">
                                <iframe
                                    width="360"
                                    height="460"
                                    src="https://youtube.com/embed/3DY9wc39PZU"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <h1>MOVE LIST</h1>
                    <div className="row">
                        <div>
                            <h2 className="text-center">
                                Legend:
                                <p>Default settings</p>
                            </h2>
                            <div className="row" id="controlSetup">
                                <div className="col-6" id="controlSetup">
                                    <img src="/img/controller setup.png" />
                                </div>
                                <div className="col-6" id="controlSetup">
                                    <img src="/img/xbox setup.png" />
                                </div>
                            </div>
                            <div className="row" id="controlSetup">
                                <div className="col-6" id="controlSetup">
                                    <img src="/img/gamecube setup.png" />
                                </div>
                                <div className="col-6" id="controlSetup">
                                    <img src="/img/psp setup.png" />
                                </div>
                            </div>

                            <div className="row text-center">
                                <p>1 = Attack 1</p>
                                <p>2 = Attack 2</p>
                                <p>3 = Attack 3</p>
                                <p>4 = Attack 4</p>
                                <p>u = Up</p>
                                <p>d = Down</p>
                                <p>b = Back</p>
                                <p>f = forward</p>
                                <p>cs = change stance</p>

                                <p>(close) = Move close to opponent</p>
                                <p>
                                    (mid) = Put some distance between you and
                                    your opponent
                                </p>
                                <p>
                                    (far) = Move back to the edge of the screen
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center" id="stance">
                            <div className="col text-center justify-content-start">
                                <h2>HAPKIDO</h2>
                                <div className="row" id="stance1">
                                    <div className="col">
                                        <h3>Flowing water</h3>
                                        <h3>Inner power</h3>
                                        <h3>Spectre blast</h3>
                                        <h3>Lethal Legs</h3>
                                        <h3>Liftoff</h3>
                                        <h3>Burning soul</h3>
                                        <h3>Sinking leaf</h3>
                                        <h3>Doombringer</h3>
                                        <h3>Painless</h3>
                                        <h3>Death fingers</h3>
                                        <h3>Kruncher</h3>
                                        <h3>Flurry kicks</h3>
                                        <h3>Hell on earth</h3>
                                        <h3>Hidden string 1</h3>
                                        <h3>Hidden string 2</h3>
                                    </div>
                                    <div className="col">
                                        <h3>2,2,1</h3>
                                        <h3>2,2,4</h3>
                                        <h3>3,b1</h3>
                                        <h3>4,b4</h3>
                                        <h3>4,u4</h3>
                                        <h3>2,3,u4</h3>
                                        <h3>f3,b3</h3>
                                        <h3>2,3,b1</h3>
                                        <h3>2,2,cs,1,b1</h3>
                                        <h3>2,2,cs,1,1</h3>
                                        <h3>2,2,cs,1,4</h3>
                                        <h3>2,2,cs,1,3,3,3</h3>
                                        <h3>2,2,cs,1,3,3,cs</h3>
                                        <h3>2,2,3</h3>
                                        <h3>2,2,3,cs,3,cs</h3>
                                    </div>
                                    <div className="col">
                                        <h3>
                                            <a href="https://youtu.be/h1t7jyGZycs">
                                                link
                                            </a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="https://youtu.be/QJHi5yfogWI">
                                                link
                                            </a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h2>MOI FAH</h2>
                                <div className="row">
                                    <div className="col">
                                        <h3>Move</h3>
                                    </div>
                                    <div className="col">
                                        <h3>button</h3>
                                    </div>
                                    <div className="col">
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h2>MUGAI RYU</h2>
                                <div className="row">
                                    <div className="col">
                                        <h3>Move</h3>
                                    </div>
                                    <div className="col">
                                        <h3>button</h3>
                                    </div>
                                    <div className="col">
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                        <h3>
                                            <a href="">link</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h2>SPECIAL MOVES </h2>
                                <div className="row">
                                    <div className="col">
                                        <h3>Move</h3>
                                    </div>
                                    <div className="col">
                                        <h3>button</h3>
                                    </div>
                                    <div className="col">video link</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h5>Add a comment about this character:</h5>
                            <form id="comment-form">
                                <input
                                    type="text"
                                    id="name-input"
                                    placeholder="Your Username(optional)"
                                    className="form-control mb-2"
                                />
                                <textarea
                                    id="comment-input"
                                    placeholder="Your comment"
                                    className="form-control mb-2"
                                ></textarea>
                            </form>
                            <div className="row">
                                <div className="col-6">
                                    <button
                                        type="submit"
                                        id="submitButton"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </div>
                                <div className="col-6 text-end">
                                    <button
                                        id="clearButton"
                                        type="button"
                                        className="btn btn-danger"
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Scorpion;
