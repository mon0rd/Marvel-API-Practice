// import { useState } from "react";
import { Component } from "react";
import "/src/Components/Characters/CharInfo/CharInfo.sass";

class CharInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <aside className="CharInfo">
        <div className="CharInfo_header">
          <img
            src="/src/assets/Characters/img/jpeg/loki.jpg"
            alt="loki"
            className="CharInfo_avatar"
          />
          <div className="CharInfo_header_wrapper">
            <h2 className="title_h2">LOKI</h2>
            <button className="red_btn">HOMEPAGE</button>
            <button className="gray_btn">WIKI</button>
          </div>
        </div>
        <div className="CharInfo_text">
          In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
          of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
          the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and
          the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari
          and/or Narfi and with the stallion Svaðilfari as the father, Loki gave
          birth—in the form of a mare—to the eight-legged horse Sleipnir. In
          addition, Loki is referred to as the father of Váli in the Prose Edda.
        </div>
        <h3 className="title_h3">Comics:</h3>
        <ul className="CharInfo_comics">
          <li className="CharInfo_comics_item">
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className="CharInfo_comics_item">Alpha Flight (1983) #50</li>
          <li className="CharInfo_comics_item">
            Amazing Spider-Man (1999) #503
          </li>
          <li className="CharInfo_comics_item">
            Amazing Spider-Man (1999) #504
          </li>
          <li className="CharInfo_comics_item">
            AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
          </li>
          <li className="CharInfo_comics_item">
            Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
          </li>
          <li className="CharInfo_comics_item">
            Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
          </li>
          <li className="CharInfo_comics_item">Vengeance (2011) #4</li>
          <li className="CharInfo_comics_item">Avengers (1963) #1</li>
          <li className="CharInfo_comics_item">Avengers (1996) #1</li>
        </ul>
      </aside>
    );
  }
}

export default CharInfo;
