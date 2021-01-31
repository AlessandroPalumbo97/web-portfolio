import {Row, Col, Button} from 'antd';
import MyComponent from '@/components/test/component.js';

export default function Test() {
  return (
    <Row>
      <Col lg={12} xl={12}>
        <div>
          <h1>JACOBSON index</h1>
          <MyComponent />
        </div>
      </Col>
    </Row>

  );
}
