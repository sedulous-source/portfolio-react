import React, { useEffect } from 'react';

const Typography = () => {
  useEffect(() => {
    document.title = "Typography - My Portfolio";
  }, []);

  return (
    <>
      <div className="container">
        <h1>
          <strong>
            Dies ist eine Headline H1 über mehrere Zeilen. Die in Bold und
            Regular gesetzt wird.
          </strong>
          Dies ist eine Headline H1 über mehrere Zeilen. Die in Bold und Regular
          gesetzt wird.
          <br />
          &nbsp;
        </h1>
        <h2>
          <strong>
            Dies ist eine Headline H2 in bold über mehrere Zeilen.
          </strong>
          <br />
          &nbsp;
        </h2>
        <h3>
          Hier steht eine Headline H3 in der Schriftart Montserrat{" "}
          <span className="mark">hier hinterlegt</span> Ein kleines{" "}
          <strong>Bächlein namens Duden</strong> fließt durch Ihren Ort und
          versorgt sie mit den nötigen Regelialien.
        </h3>
        <h4>
          <strong>
            Hier steht eine Headline H4 über mehrerer Zeilen gesetzt
          </strong>
        </h4>
        <p>
          Das ist der Copy-Text. Weit hinten, hinter den Wortbergen, fern der
          Länder Vokalien und Konsonantien leben die Blindtexte. Das ist{" "}
          <a className="link" href="/">
            ein Link
          </a>{" "}
          innerhalb des Texts. Abgeschieden wohnen sie in das ist ein{" "}
          <a className="link" href="https://google.com/">
            Link extern
          </a>{" "}
          an der Küste des Semantik, eines großen Sprachozeans. Das ist eine
          Hervorhebung. Ein kleines Bächlein namens Duden fließt durch Ihren Ort
          und versorgt sie mit den nötigen Regelialien. Es ist ein
          paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund
          fliegen.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>Eine Aufzählung darf natürlich auch nicht fehlen</strong>
        </p>
        <ul>
          <li>
            Das ist der erste Aufzählungspunkt, auch noch alles als Blindtext.
            Erste Hierarchie.
            <ul>
              <li>Aufzählungspunkt, als Blindtext. Zweite Hierarchie.</li>
            </ul>
          </li>
          <li>Ein weiterer Aufzählungspunkt, als Blindtext.</li>
          <li>
            Ein weiterer Aufzählungspunkt, als Blindtext. Gerne auch über
            mehrere Zeilen
          </li>
        </ul>
        <ol>
          <li>
            Das ist der erste Aufzählungspunkt, auch noch alles als Blindtext.
            Erste Hierarchie.
            <ol>
              <li>Aufzählungspunkt, als Blindtext. Zweite Hierarchie.</li>
            </ol>
          </li>
          <li>Ein weiterer Aufzählungspunkt, als Blindtext.</li>
          <li>
            Ein weiterer Aufzählungspunkt, als Blindtext. Gerne auch über
            mehrere Zeilen
          </li>
        </ol>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>
          <a className="btn" href="/">
            Primärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-outline btn-arrow" href="/">
            Sekundärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-link btn-arrow" href="/">
            Tertiärbutton
          </a>
        </p>
        <p>
          <a className="btn btn-orange" href="/">
            Primärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-orange btn-outline btn-arrow" href="/">
            Sekundärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-orange btn-link btn-arrow" href="/">
            Tertiärbutton
          </a>
        </p>
        <p>
          <a className="btn btn-green" href="/">
            Primärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-outline btn-arrow btn-green" href="/">
            Sekundärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-link btn-arrow btn-green" href="/">
            Tertiärbutton
          </a>
        </p>
        <p>
          <a className="btn btn-blue" href="/">
            Primärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-outline btn-arrow btn-blue" href="/">
            Sekundärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-link btn-arrow btn-blue" href="/">
            Tertiärbutton
          </a>
        </p>
        <p>
          <a className="btn btn-lila" href="/">
            Primärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-outline btn-arrow btn-lila" href="/">
            Sekundärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-link btn-arrow btn-lila" href="/">
            Tertiärbutton
          </a>
        </p>
        <p>
          <a className="btn btn-yellow" href="/">
            Primärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-outline btn-arrow btn-yellow" href="/">
            Sekundärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-link btn-arrow btn-yellow" href="/">
            Tertiärbutton
          </a>
        </p>
        <p>
          <a className="btn btn-lightgreen" href="/">
            Primärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-outline btn-arrow btn-lightgreen" href="/">
            Sekundärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-link btn-arrow btn-lightgreen" href="/">
            Tertiärbutton
          </a>
        </p>
        <p>
          <a className="btn btn-lightblue" href="/">
            Primärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-outline btn-arrow btn-lightblue" href="/">
            Sekundärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-link btn-arrow btn-lightblue" href="/">
            Tertiärbutton
          </a>
        </p>
        <p>
          <a className="btn btn-pink" href="/">
            Primärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-outline btn-arrow btn-pink" href="/">
            Sekundärbutton
          </a>{" "}
          &nbsp;&nbsp;
          <a className="btn btn-link btn-arrow btn-pink" href="/">
            Tertiärbutton
          </a>
        </p>
      </div>

      <section className="content-section bg-yellow frame-space-before-medium frame-space-after-medium">
        <div className="container">
          <p>
            <strong>Das ist ein Copytext</strong>
            <br />
            In Bold oder in Regulär
            <br />
            &nbsp;
          </p>
          <p>
            <a className="btn btn-green" href="/">
              Primärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-outline btn-arrow btn-green" href="/">
              Sekundärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-link btn-arrow btn-green" href="/">
              Tertiärbutton
            </a>
          </p>
        </div>
      </section>

      <section className="content-section bg-orange frame-space-before-medium frame-space-after-medium">
        <div className="container">
          <p>
            <strong>Das ist ein Copytext</strong>
            <br />
            In Bold oder in Regulär
            <br />
            &nbsp;
          </p>
          <p>
            <a className="btn btn-white" href="/">
              Primärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-outline btn-arrow btn-white" href="/">
              Sekundärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-link btn-arrow btn-white" href="/">
              Tertiärbutton
            </a>
          </p>
        </div>
      </section>
      
      <section className="content-section bg-light-green frame-space-before-medium frame-space-after-medium">
        <div className="container">
          <p>
            <strong>Das ist ein Copytext</strong>
            <br />
            In Bold oder in Regulär
            <br />
            &nbsp;
          </p>
          <p>
            <a className="btn btn-green" href="/">
              Primärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-outline btn-arrow btn-green" href="/">
              Sekundärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-link btn-arrow btn-green" href="/">
              Tertiärbutton
            </a>
          </p>
        </div>
      </section>
      
      <section className="content-section bg-green frame-space-before-medium frame-space-after-medium">
        <div className="container">
          <p>
            <strong>Das ist ein Copytext</strong>
            <br />
            In Bold oder in Regulär
            <br />
            &nbsp;
          </p>
          <p>
            <a className="btn btn-lightblue" href="/">
              Primärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-outline btn-arrow btn-lightblue" href="/">
              Sekundärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-link btn-arrow btn-lightblue" href="/">
              Tertiärbutton
            </a>
          </p>
        </div>
      </section>
      
      <section className="content-section bg-light-blue frame-space-before-medium frame-space-after-medium">
        <div className="container">
          <p>
            <strong>Das ist ein Copytext</strong>
            <br />
            In Bold oder in Regulär
            <br />
            &nbsp;
          </p>
          <p>
            <a className="btn btn-darkblue" href="/">
              Primärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-outline btn-arrow btn-darkblue" href="/">
              Sekundärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-link btn-arrow btn-darkblue" href="/">
              Tertiärbutton
            </a>
          </p>
        </div>
      </section>
      
      <section className="content-section bg-blue frame-space-before-medium frame-space-after-medium">
        <div className="container">
          <p>
            <strong>Das ist ein Copytext</strong>
            <br />
            In Bold oder in Regulär
            <br />
            &nbsp;
          </p>
          <p>
            <a className="btn btn-white" href="/">
              Primärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-outline btn-arrow btn-white" href="/">
              Sekundärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-link btn-arrow btn-white" href="/">
              Tertiärbutton
            </a>
          </p>
        </div>
      </section>
      
      <section className="content-section bg-pink frame-space-before-medium frame-space-after-medium">
        <div className="container">
          <p>
            <strong>Das ist ein Copytext</strong>
            <br />
            In Bold oder in Regulär
            <br />
            &nbsp;
          </p>
          <p>
            <a className="btn btn-lila" href="/">
              Primärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-outline btn-arrow btn-lila" href="/">
              Sekundärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-link btn-arrow btn-lila" href="/">
              Tertiärbutton
            </a>
          </p>
        </div>
      </section>
      
      <section className="content-section bg-lila frame-space-before-medium frame-space-after-medium">
        <div className="container">
          <p>
            <strong>Das ist ein Copytext</strong>
            <br />
            In Bold oder in Regulär
            <br />
            &nbsp;
          </p>
          <p>
            <a className="btn btn-white" href="/">
              Primärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-outline btn-arrow btn-white" href="/">
              Sekundärbutton
            </a>{" "}
            &nbsp;&nbsp;
            <a className="btn btn-link btn-arrow btn-white" href="/">
              Tertiärbutton
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Typography;
