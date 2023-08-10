// Site Data
import Button from '../../component/button/button';

function CustomInfoBox() {
  const styles = {
    height: '5px',
    width: '100%',
    borderRadius: '5px',
  };

  return (
    <>
      <div className="mb-4">
        <div className="bg-primary" style={styles}></div>
        <div className="p-4">
          <h4 className="text-primary">Technology partners</h4>
          <p className="mb-3">
            We partnered with Technology Managers to increase its skills at
            every step of the software development process.
          </p>
          <Button
            btnClass="btn-link link-secondary"
            btnText="Become a Partner"
            btnURL="/about-us"
          />
        </div>
      </div>
      <div className="p-4 bg-secondary border-radius-5 text-white">
        <h4 className="text-white">Careers with us</h4>
        <p>
          There’s always room for intelligent people who are excited about the
          digital world and are continually looking forward to seeing what’s
          next.
        </p>
        <Button
          btnClass="btn-link link-primary"
          btnText="View Available Positions"
          btnURL="/about-us"
        />
      </div>
    </>
  );
}

export default CustomInfoBox;
