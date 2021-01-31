import styles from './index.less';
import {Row, Col, Button} from 'antd';
import MyComponent from '@/components/test/component.js';
import MainLayout from '@/layouts/Main';

export default function IndexPage() {
  return (
    <Row>
      <Col lg={12} xl={12}>
      <div>
        <MainLayout>
          <h1 className={styles.title}>Page index</h1>
          <MyComponent />
        </MainLayout>
      </div>
      </Col>
    </Row>
  );
}
