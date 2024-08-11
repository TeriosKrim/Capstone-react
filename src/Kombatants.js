import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

/*We take the data from Data.js */
const Kombatants = () => {
    const [characters, setCharacters] = useState(["Kenshi", "Jade"]);

    return (
        <>
            <div className="row">
                <h1>KOMBATANTS</h1>
                <div className="row">
                    <div id="base">
                        {/* we loop through each character and have it */}
                        {/* Return the character image */}
                        {characters.map((character) => {
                            return (
                                <img
                                    src={`img/Characters/icon/${character}.png`}
                                    className="img-fluid"
                                    alt={character}
                                    key={character}
                                />
                            );
                        })}
                        <div>
                            <Link to="/scorpion">
                                <img
                                    src="img/Characters/icon/Scorpion.png"
                                    className="img-fluid"
                                    alt="Scorpion"
                                />
                            </Link>
                            <img
                                src="img/Characters/icon/Mileena.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Baraka.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Sub Zero.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Sindel.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Havik.png"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="base">
                        <div>
                            <img
                                src="img/Characters/icon/Raiden.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Li mei.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Kabal.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Ermac.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Nightwolf.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Bo rai cho.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Noob-Smoke.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Tanya.png"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="base">
                        <div>
                            <img
                                src="img/Characters/icon/Shujinko.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Hotaru.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Ashrah.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Dairou.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Kobra.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Darrius.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Kira.png"
                                className="img-fluid"
                            />
                            <img
                                src="img/Characters/icon/Liu Kang.png"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="row text-center" id="unchainedName">
                    <div className="col">
                        Mortal Kombat:Unchained extra characters
                    </div>
                </div>
                <div className="row">
                    <div id="gamecube">
                        <img
                            src="img/Characters/icon/Shao Khan.png"
                            className="customWidth"
                        />
                        <img
                            src="img/Characters/icon/Goro.png"
                            className="customWidth"
                        />
                    </div>
                </div>
                <div className="row" id="unchained">
                    <div id="unchained">
                        <img
                            src="img/Characters/icon/Blaze.png"
                            className="customWidth"
                        />
                        <img
                            src="img/Characters/icon/Frost.png"
                            className="customWidth"
                        />
                        <img
                            src="img/Characters/icon/Jax.png"
                            className="customWidth"
                        />
                        <img
                            src="img/Characters/icon/Kitana.png"
                            className="customWidth"
                        />
                    </div>
                </div>
                <div className="row text-center" id="ultimateName">
                    <div className="col">
                        Ultimate Mortal Kombat Deception exclusives
                    </div>
                </div>
                <div className="row">
                    <div id="ultimate">
                        <img
                            src="img/Characters/icon/Sonya.png"
                            className="customWidth"
                        />
                        <img
                            src="img/Characters/icon/Drahmin.png"
                            className="customWidth"
                        />
                        <img
                            src="img/Characters/icon/Sareena.png"
                            className="customWidth"
                        />
                        <img
                            src="img/Characters/icon/Quan chi.png"
                            className="customWidth"
                        />
                        <img
                            src="img/Characters/icon/Shang tsung.png"
                            className="customWidth"
                        />
                    </div>
                </div>
                <div className="row">
                    <div id="ultimate">
                        <img
                            src="img/Characters/icon/Kung lao.png"
                            className="customWidth"
                        />
                        <img
                            src="img/Characters/icon/Johnny cage.png"
                            className="customWidth"
                        />
                        <img
                            src="img/Characters/icon/Sektor.png"
                            className="customWidth"
                        />
                        <img
                            src="img/Characters/icon/Nitara.png"
                            className="customWidth"
                        />
                        <img
                            src="img/Characters/icon/Rain.png"
                            className="customWidth"
                        />
                    </div>
                </div>
                <div className="row">
                    <div id="ultimate">
                        <img
                            src="/img/Characters/icon/Cyrax.png"
                            className="customWidth"
                        />
                        <img
                            src="/img/Characters/icon/Reiko.png"
                            className="customWidth"
                        />
                        <img
                            src="/img/Characters/icon/Tremor.png"
                            className="customWidth"
                        />
                    </div>
                </div>

                <div className="row text-center" id="bossName">
                    <div className="col">Boss character</div>
                </div>

                <div>
                    <div className="col" id="onaga">
                        <a href="onaga.html">
                            <img
                                src="img/Characters/icon/Onaga.png"
                                className="customWidth"
                            />
                        </a>
                    </div>
                </div>
                <div id="disclaimer">
                    <p id="mod">Mod created by Ermaccer</p>
                    <p id="mod">I am not affiliated with the mod of any kind</p>
                    <p id="mod">Background by Monster Enjoyer</p>
                    <p id="warner">
                        Mortal Kombat:Deception was published by Midway games
                        Mortal Kombat©,the Dragon Logo and all characters names
                        are trademarks of Warner Bros.Entertainment Inc.
                    </p>
                </div>
            </div>
        </>
    );
};
export default Kombatants;
