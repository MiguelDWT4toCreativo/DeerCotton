import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li >
          <Link to={process.env.PUBLIC_URL + "/"}>{t("Inicio")}</Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {t("Comprar Ahora")}
          </Link>
          <ul className="sub-menu">
            <li >
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                {t("Mercado Libre")}
              </Link>
            </li>
            <li >
              <Link to={process.env.PUBLIC_URL + "/product/1"}>
                {t("Amazon")}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {t("Catálogo")}
          </Link>
        </li>
        <li >
          <Link to={process.env.PUBLIC_URL + "/about"}>{t("Acerca de")}</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
            {t("Blog")}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {t("Contacto")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
