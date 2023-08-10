import Col from 'react-bootstrap/Col';
import PricingTable from '../../component/pricing-table/pricing-table';
import { planBasic, planStandard, planProfessional } from '../../data/pricing';

function PricingPlan() {
  return (
    <>
      <Col md={4} className="pb-4 pb-md-0">
        <PricingTable theme="pricing-style-1" data={planBasic} />
      </Col>
      <Col md={4} className="pb-4 pb-md-0">
        <PricingTable
          theme="pricing-style-1"
          className="active"
          data={planStandard}
          btnStyle="btn-primary-round"
        />
      </Col>
      <Col md={4}>
        <PricingTable theme="pricing-style-1" data={planProfessional} />
      </Col>
    </>
  );
}

export default PricingPlan;
