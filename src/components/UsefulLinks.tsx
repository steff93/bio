import "./UsefulLinks.scss";

const UsefulLinks = () => {
  const NICOLA_URL =
    "https://www.theeuropeanengineer.com/p/lets-collect-salaries-and-saving";
  const SALARIES_SHEET_URL =
    "https://docs.google.com/spreadsheets/d/1iTNwiAQ0s5iD6RqI7B30uWqQ8wNJqRnmHvxo5zRffu8/edit?gid=603717461#gid=603717461";
  const EMOJIPEDIA = "https://emojipedia.org/";

  return (
    <div className="useful-links">
      <h2>
        A collection of useful information found across the web relevant to
        software engineering.
      </h2>

      <div className="content">
        <div className="item">
          <h3 className="title">Salaries Across Europe 💸 💶</h3>

          <p className="description">
            A wonderful crowdsourced data gathered by{" "}
            <a href={NICOLA_URL} target="_blank">
              {" "}
              Nicola Amadio
            </a>{" "}
            that includes gross and net salaries across various European cities
            and countries, with additional information like savings rate, job
            title and seniority presented in a spreadsheet{" "}
            <a href={SALARIES_SHEET_URL} target="_blank">
              {" "}
              here
            </a>
            .
          </p>
        </div>

        <div className="item">
          <h3 className="title">Browser supported emojis? 🙏 📈 🌍</h3>
          <p className="description">
            Ever wondered how you can directly use browser-supported emojis
            without installing an icon library? I didn't even know that was
            possible until not so long ago. Just head over to{" "}
            <a target="_blank" href={EMOJIPEDIA}>
              https://emojipedia.org/
            </a>
            , search for a relevant emoji, copy it and paste it directly in your
            IDE. Yes, it even shows up as an actual emoji in your IDE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
