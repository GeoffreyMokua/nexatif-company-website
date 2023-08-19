import { Link } from 'react-router-dom';
import './footer.scss';

function FooterCopyright() {
  // Current Year
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="copyright-text">
                ©Copyright {currentYear} <Link to="/">nexatif</Link> All Rights
                Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterCopyright;
