

const MobileWidgets = () => {
  return (
    <div className="offcanvas-widget-area">
      <div className="off-canvas-contact-widget">
        <div className="header-contact-info">
          <ul className="header-contact-info__list">
            <li>
              <i className="fa fa-phone"></i>{" "}
              <a href="tel://12452456012">+52 771 184 5809 </a>
            </li>
            <li>
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className="off-canvas-widget-social">
        <a href="https://www.instagram.com/deercottonscomx/" title="Instagram">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/Deercottons" title="Facebook">
          <i className="fa fa-facebook"></i>
        </a>
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
