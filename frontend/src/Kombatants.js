import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

/*We take the data from Data.js */
const Kombatants = () => {
    const [kombatants, setCombantants] = useState([]);

    useEffect(() => {
        const makeAPICall = async () => {
            const res = await fetch(`http://localhost:3001/kombatants`);
            const data = await res.json();
            setCombantants(data.kombatants);
        };
        makeAPICall();
    }, []);

    return (
        <>
            <div className="row">
                <h1>KOMBATANTS</h1>
                <div className="row">
                    <div id="base">
                        {/* we loop through each character and have it */}
                        {/* Return the character image */}
                        {kombatants.map((kombatant) => {
                            return (
                                <Link to={`/kombatantDetails/${kombatant.id}`}>
                                    <img
                                        src={`/img/Characters/icon/${kombatant.name}.png`}
                                        className="img-fluid"
                                        alt={kombatant.name}
                                        key={kombatant.id}
                                    />
                                </Link>
                            );
                        })}
                        {/* <div>
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
                                alt="Mileena"
                            />
                            <img
                                src="img/Characters/icon/Baraka.png"
                                className="img-fluid"
                                alt="Baraka"
                            />
                            <img
                                src="img/Characters/icon/Sub Zero.png"
                                className="img-fluid"
                                alt="Sub Zero"
                            />
                            <img
                                src="img/Characters/icon/Sindel.png"
                                className="img-fluid"
                                alt="Sindel"
                            />
                            <img
                                src="img/Characters/icon/Havik.png"
                                className="img-fluid"
                                alt="Havik"
                            />
                        </div> */}
                    </div>
                </div>
                {/* <div className="row">
                    <div id="base">
                        <div>
                            <img
                                src="img/Characters/icon/Raiden.png"
                                className="img-fluid"
                                alt="Raiden"
                            />
                            <img
                                src="img/Characters/icon/Li mei.png"
                                className="img-fluid"
                                alt="Li Mei"
                            />
                            <img
                                src="img/Characters/icon/Kabal.png"
                                className="img-fluid"
                                alt="Kabal"
                            />
                            <img
                                src="img/Characters/icon/Ermac.png"
                                className="img-fluid"
                                alt="Ermac"
                            />
                            <img
                                src="img/Characters/icon/Nightwolf.png"
                                className="img-fluid"
                                alt="Nightwolf"
                            />
                            <img
                                src="img/Characters/icon/Bo rai cho.png"
                                className="img-fluid"
                                alt="Bo Rai Cho"
                            />
                            <img
                                src="img/Characters/icon/Noob-Smoke.png"
                                className="img-fluid"
                                alt="Noob-Smoke"
                            />
                            <img
                                src="img/Characters/icon/Tanya.png"
                                className="img-fluid"
                                alt="Tanya"
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
                                alt="Shujinko"
                            />
                            <img
                                src="img/Characters/icon/Hotaru.png"
                                className="img-fluid"
                                alt="Hotaru"
                            />
                            <img
                                src="img/Characters/icon/Ashrah.png"
                                className="img-fluid"
                                alt="Ashrah"
                            />
                            <img
                                src="img/Characters/icon/Dairou.png"
                                className="img-fluid"
                                alt="Dairou"
                            />
                            <img
                                src="img/Characters/icon/Kobra.png"
                                className="img-fluid"
                                alt="Kobra"
                            />
                            <img
                                src="img/Characters/icon/Darrius.png"
                                className="img-fluid"
                                alt="Darrius"
                            />
                            <img
                                src="img/Characters/icon/Kira.png"
                                className="img-fluid"
                                alt="Kira"
                            />
                            <img
                                src="img/Characters/icon/Liu Kang.png"
                                className="img-fluid"
                                alt="Liu Kang"
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
                            alt="Shao Khan"
                        />
                        <img
                            src="img/Characters/icon/Goro.png"
                            className="customWidth"
                            alt="Goro"
                        />
                    </div>
                </div>
                <div className="row" id="unchained">
                    <div id="unchained">
                        <img
                            src="img/Characters/icon/Blaze.png"
                            className="customWidth"
                            alt="Blaze"
                        />
                        <img
                            src="img/Characters/icon/Frost.png"
                            className="customWidth"
                            alt="Frost"
                        />
                        <img
                            src="img/Characters/icon/Jax.png"
                            className="customWidth"
                            alt="Jax"
                        />
                        <img
                            src="img/Characters/icon/Kitana.png"
                            className="customWidth"
                            alt="Kitana"
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
                            alt="Sonya"
                        />
                        <img
                            src="img/Characters/icon/Drahmin.png"
                            className="customWidth"
                            alt="Drahmin"
                        />
                        <img
                            src="img/Characters/icon/Sareena.png"
                            className="customWidth"
                            alt="Sareena"
                        />
                        <img
                            src="img/Characters/icon/Quan chi.png"
                            className="customWidth"
                            alt="Quan Chi"
                        />
                        <img
                            src="img/Characters/icon/Shang tsung.png"
                            className="customWidth"
                            alt="Shang Tsung"
                        />
                    </div>
                </div>
                <div className="row">
                    <div id="ultimate">
                        <img
                            src="img/Characters/icon/Kung lao.png"
                            className="customWidth"
                            alt="Kung lao"
                        />
                        <img
                            src="img/Characters/icon/Johnny cage.png"
                            className="customWidth"
                            alt="Johnny Cage"
                        />
                        <img
                            src="img/Characters/icon/Sektor.png"
                            className="customWidth"
                            alt="Sektor"
                        />
                        <img
                            src="img/Characters/icon/Nitara.png"
                            className="customWidth"
                            alt="Nitara"
                        />
                        <img
                            src="img/Characters/icon/Rain.png"
                            className="customWidth"
                            alt="Rain"
                        />
                    </div>
                </div>
                <div className="row">
                    <div id="ultimate">
                        <img
                            src="/img/Characters/icon/Cyrax.png"
                            className="customWidth"
                            alt="Cyrax"
                        />
                        <img
                            src="/img/Characters/icon/Reiko.png"
                            className="customWidth"
                            alt="Reiko"
                        />
                        <img
                            src="/img/Characters/icon/Tremor.png"
                            className="customWidth"
                            alt="Tremor"
                        />
                    </div>
                </div> */}

                {/* <div className="row text-center" id="bossName">
                    <div className="col">
                        <span
                            style={{
                                marginLeft: "30px",
                            }}
                        >
                            Boss character
                        </span>
                    </div>
                </div> */}

                {/* <div>
                    <div className="col" id="onaga">
                        <Link to={"/onaga"}>
                            <img
                                src="img/Characters/icon/Onaga.png"
                                className="customWidth"
                                alt="Onaga"
                            />
                        </Link>
                    </div>
                </div> */}
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
