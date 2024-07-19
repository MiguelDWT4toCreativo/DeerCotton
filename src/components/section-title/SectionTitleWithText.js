import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Acerca de DeerCoton</h5>
          <h1>Nuestra Historia, Misión y Valores</h1>
          <p>
          En DeerCoton, nos dedicamos a la comercialización de prendas de vestir de alta calidad, destacándonos en el sector textil por nuestro compromiso con la innovación, la sostenibilidad y la excelencia. Desde nuestra fundación, hemos trabajado arduamente para satisfacer las necesidades del mercado de boutiques y cadenas comerciales, ofreciendo una amplia gama de pantalones para dama, caballero y niños, diseñados con los mejores estándares de confección y materiales de primera calidad.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
