import React, { PureComponent } from 'react';
import html2canvas from 'html2canvas';
import { Row, Col, Button, Spin } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import styles from './index.less';
import {
  FACES,
  DRESSES,
} from '@/settings/salvinification/SalvinificationItems';

class Index extends PureComponent {
  state = {
    slot: DRESSES[0].dress,
    face: FACES[0].face,
    name: '',
    rolling: false,
    lastBodyOption: null,
    lastFaceOption: null,
    pageWidth: window.innerWidth,
  };

  faceSlotRef = React.createRef();
  bodySlotRef = React.createRef();
  captureBtnRef = React.createRef();
  captureLabelRef = React.createRef();
  screenshotNameRef = React.createRef();

  rollBoth = () => {
    this.rollFace();
    this.rollBody();
  };

  // ======================= FACE =======================
  // Trigger rolling and maintain state
  rollFace = () => {
    this.setState({
      rolling: true,
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 700);

    const selected = this.triggerFaceSlotRotation(this.faceSlotRef.current);
    this.setState({ face: selected });
  };

  // This will create a rolling effect and return random selected option
  triggerFaceSlotRotation = (ref) => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    const options = ref.children;
    const randomOption = this.avoidFaceDuplicateOption();
    const choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop);
    return FACES[randomOption].face;
  };

  // Don't permit to extract the same random number of the precedent
  avoidFaceDuplicateOption = () => {
    let random = Math.floor(Math.random() * FACES.length);
    const { lastFaceOption } = this.state;

    while (random === lastFaceOption) {
      random = Math.floor(Math.random() * FACES.length);
    }

    this.setState({ lastFaceOption: random });

    return random;
  };

  // ======================= BODY =======================
  rollBody = () => {
    this.setState({
      rolling: true,
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 700);

    const selected = this.triggerBodySlotRotation(this.bodySlotRef.current);
    this.setState({ slot: selected });
  };

  triggerBodySlotRotation = (ref) => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    const options = ref.children;
    const randomOption = this.avoidBodyDuplicateOption();
    const choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return DRESSES[randomOption].dress;
  };

  avoidBodyDuplicateOption = () => {
    let random = Math.floor(Math.random() * DRESSES.length);
    const { lastOption } = this.state;

    while (random === lastOption || random === 0) {
      random = Math.floor(Math.random() * DRESSES.length);
    }

    this.setState({ lastOption: random });

    setTimeout(() => {
      this.setState({ name: DRESSES[random].name });
      if (this.state.pageWidth > 600) {
        if (this.captureBtnRef.current.style.display !== 'block') {
          this.captureBtnRef.current.style.display = 'block';
          this.captureLabelRef.current.style.display = 'block';
        }
      }
    }, 600);

    return random;
  };

  // Take the screenshot
  screenshot = () => {
    this.screenshotNameRef.current.style.display = 'block';
    const toCapture = document.getElementById('capture');

    html2canvas(toCapture, { y: 250 }).then((canvas) => {
      this.state.name !== null
        ? this.saveAs(canvas.toDataURL('image/png'), this.state.name + '.png')
        : this.saveAs(canvas.toDataURL('image/png'), 'Salvini.png');
      window.location.reload();
    });
  };

  // Save the screenshot
  saveAs = (url, salvinification) => {
    const link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = url;
      link.download = salvinification;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(url);
    }
  };

  render() {
    const { rolling } = this.state;
    const loading = true;
    // const loading = (!FACES || !DRESSES);
    return (
      <div className={styles.slotMachine}>
        <Row className={styles.salvinificationMainRow}>
          {loading ? (
            <Col xs={24}>
              <Spin />
            </Col>
          ) : (
            <>
              <Col id="capture" className={styles.capture} xs={24} md={12}>
                <div className={styles.faceSlot}>
                  <section className={styles.faceSection}>
                    <div
                      className={styles.slotContainer}
                      ref={this.faceSlotRef}
                    >
                      {FACES.map((face, i) => (
                        <div key={i}>
                          <img
                            className={styles.salviniFace}
                            src={face.face}
                            alt="salvini's face"
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
                <div className={styles.bodySlot}>
                  <section className={styles.bodySection}>
                    <div
                      className={styles.slotContainer}
                      ref={this.bodySlotRef}
                    >
                      {DRESSES.map((dress, i) => (
                        <div key={i}>
                          <img src={dress.dress} alt="salvini's dress" />
                        </div>
                      ))}
                    </div>
                  </section>
                  <h2
                    id="screenshot-name"
                    className={styles.screenshotName}
                    ref={this.screenshotNameRef}
                  >
                    {this.state.name}
                  </h2>
                </div>
              </Col>
              <Col className={styles.buttonsCol} xs={24} md={12}>
                <h2 className={styles.displayName}>{this.state.name}</h2>
                <Button
                  className={styles.rollFace}
                  onClick={!rolling ? this.rollFace : undefined}
                  disabled={rolling}
                >
                  {rolling ? 'Rolling...' : 'ROLL FACE'}
                </Button>
                <Button
                  className={styles.rollBody}
                  onClick={!rolling ? this.rollBody : undefined}
                  disabled={rolling}
                >
                  {rolling ? 'Rolling...' : 'ROLL BODY'}
                </Button>
                <Button
                  className={styles.rollBoth}
                  onClick={!rolling ? this.rollBoth : undefined}
                  disabled={rolling}
                >
                  {rolling ? 'Rolling...' : 'ROLL BOTH'}
                </Button>
                <Button
                  className={styles.screenshot}
                  onClick={this.screenshot}
                  ref={this.captureBtnRef}
                  disabled={rolling}
                >
                  SAVE HIM <DownloadOutlined />
                </Button>
                <p
                  ref={this.captureLabelRef}
                  className={styles.screenshotLabel}
                >
                  Desktop only
                </p>
              </Col>
            </>
          )}
        </Row>
      </div>
    );
  }
}

export default Index;
