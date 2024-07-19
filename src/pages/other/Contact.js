import { Fragment } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import GoogleMap from "../../components/google-map"

const Contact = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Contact"
        description="Contact page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Inicio", path: process.env.PUBLIC_URL + "/" },
            {label: "Contacto", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
<div className="contact-area pt-100 pb-100">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <div className="contact-map">
          <GoogleMap lat={20.1011} lng={-98.7591} />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="contact-info-wrap">
          <div className="single-contact-info">
            <div className="contact-icon">
              <i className="fa fa-phone" />
            </div>
            <div className="contact-info-dec">
              <p>+52 771 184 5809</p>
            </div>
          </div>
          <div className="single-contact-info">
            <div className="contact-icon">
              <i className="fa fa-globe" />
            </div>
            <div className="contact-info-dec">
              <p>
                <a href="mailto:yourname@email.com">Amazon</a>
              </p>
              <p>
                <a href="https://yourwebsitename.com">Mercado Libre</a>
              </p>
            </div>
          </div>
          <div className="single-contact-info">
            <div className="contact-icon">
              <i className="fa fa-map-marker" />
            </div>
            <div className="contact-info-dec">
              <p>Pachuca, Hidalgo, Mexico.</p>
            </div>
          </div>
          <div className="contact-social text-center">
            <h3>Síguenos</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/Deercottons">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/deercottonscomx/">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
