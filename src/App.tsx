import { useEffect, useState } from "react";
import Cobe from "./Cobe";
import { getAllOffers } from "./services/offers";
import { Item } from "./types/types";

const BUTTONS_SEARCH = [
  {
    id: 1,
    name: "ingeniero",
    query: "inge",
  },
  {
    id: 2,
    name: "odontología",
    query: "odon",
  },
  {
    id: 3,
    name: "chofer",
    query: "cho",
  },
  {
    id: 4,
    name: "educador",
    query: "educ",
  },
];

function App() {
  const [offers, setOffers] = useState<Item[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getOffers = async () => {
      const res = await getAllOffers();
      setOffers(res);
    };

    getOffers();
  }, []);

  const filteredOffers = offers.filter((offer) =>
    offer.title.toLowerCase().includes(search.toLowerCase())
  );

  // get cities from filteredOffers unique

  const uniqueCities = filteredOffers
    .map((offer) => offer.city)
    .filter((city, index, self) => self.indexOf(city) === index);

  const handleChangeSearchButton = (query: string) => {
    setSearch(query);
  };

  return (
    <>
      <header>
        <h1>Búsqueda infojobs</h1>
        <p>
          Potenciado por{" "}
          <a href="https://github.com/shuding/cobe" target="_blank">
            Cobe
          </a>
        </p>

        <fieldset>
          <input
            type="search"
            name="search"
            id=""
            placeholder="Buscar..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          <aside className="buttons-options">
            {BUTTONS_SEARCH.map((button) => (
              <button
                key={button.id}
                onClick={() => handleChangeSearchButton(button.query)}
              >
                {button.name}
              </button>
            ))}
          </aside>
        </fieldset>
      </header>

      <main>
        <Cobe cities={uniqueCities} />

        <aside>
          <h3>Resultado de ofertas</h3>
          <ul>
            {filteredOffers.map((offer) => (
              <li key={offer.id}>
                <a href={offer.link} target="_blank">
                  {offer.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </main>

      <footer>
        <p>
          Hecho con{" "}
          <span role="img" aria-label="corazón">
            ❤️
          </span>{" "}
          por{" "}
          <a href="https://github.com/pipegoods" target="_blank">
            @pipegoods
          </a>
        </p>
        <p>
          Hackathon Mayo 2023 - InfoJobs -{" "}
          <a
            href="https://github.com/midudev"
            target="_blank"
            rel="noopener noreferrer"
          >
            midudev
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
