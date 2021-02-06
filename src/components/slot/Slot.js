import React, {PureComponent} from 'react';
import html2canvas from 'html2canvas';
import {Row, Col, Button} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import styles from './Slot.less';

import { faces, dresses } from "@/settings/salvinification/SalvinificationElements";

class Slot extends PureComponent {
  state = {
    slot: dresses[0].dress,
    face: faces[0].face,
    name: "",
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
  }

  // ======================= FACE =======================
  // Trigger rolling and maintain state
  rollFace = () => {
    this.setState({
      rolling: true
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 700);

    const selected = this.triggerFaceSlotRotation(this.faceSlotRef.current);
    this.setState({ face: selected });
  };

  // This will create a rolling effect and return random selected option
  triggerFaceSlotRotation = ref => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = this.avoidFaceDuplicateOption();
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop);
    return faces[randomOption].face;
  };

  // Don't permit to extract the same random number of the precedent
  avoidFaceDuplicateOption = () => {
    let random = Math.floor(Math.random() * faces.length);
    const {lastFaceOption} = this.state

    while (random === lastFaceOption) {
      random = Math.floor(Math.random() * faces.length);
    }

    this.setState({ lastFaceOption: random });

    return random;
  }

  // ======================= BODY =======================
  rollBody = () => {
    this.setState({
      rolling: true
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 700);

    const selected = this.triggerBodySlotRotation(this.bodySlotRef.current);
    this.setState({ slot: selected });
  };

  triggerBodySlotRotation = ref => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = this.avoidBodyDuplicateOption();
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return dresses[randomOption].dress;
  };

  avoidBodyDuplicateOption = () => {
    let random = Math.floor(Math.random() * dresses.length);
    const {lastOption} = this.state;

    while (random === lastOption || random === 0) {
      random = Math.floor(Math.random() * dresses.length);
    }

    this.setState({ lastOption: random });

    setTimeout(() => {
      this.setState({ name: dresses[random].name });
      if (this.state.pageWidth > 600) {
        if (this.captureBtnRef.current.style.display !== "block") {
          this.captureBtnRef.current.style.display = "block";
          this.captureLabelRef.current.style.display = "block";
        }
      }
    }, 600);

    return random;
  }

  // Take the screenshot
  screenshot = () => {
    this.screenshotNameRef.current.style.display = "block";
    let toCapture = document.getElementById("capture");

    html2canvas(toCapture, {y: 250}).then((canvas) => {
      this.state.name !== null ? this.saveAs(canvas.toDataURL("image/png"), this.state.name + '.png') : this.saveAs(canvas.toDataURL("image/png"), 'Salvini.png');
      window.location.reload();
    });
  }

  // Save the screenshot
  saveAs = (url, salvinification) => {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = url;
      link.download = salvinification;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    else {
      window.open(url);
    }
  }

  render() {
    const {rolling} = this.state
    return (
      <div className={styles.slotMachine}>
        <Row>
          <Col
            id="capture"
            className={styles.capture}
            sm={24}
            md={12}
          >
            <div className={styles.faceSlot}>
              <section className={styles.faceSection}>
                <div className={styles.slotContainer} ref={this.faceSlotRef}>
                  {faces.map((face, i) => (
                    <div key={i}>
                      <img className={styles.salviniFace} src={face.face} alt="salvini's face" />
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <div className={styles.bodySlot}>
              <section className={styles.bodySection}>
                <div className={styles.slotContainer} ref={this.bodySlotRef}>
                  {dresses.map((dress, i) => (
                    <div key={i}>
                      <img src={dress.dress} alt="salvini's dress" />
                    </div>
                  ))}
                </div>
              </section>
              <h1 id="screenshot-name" className={styles.screenshotName} ref={this.screenshotNameRef}>{this.state.name}</h1>
            </div>
          </Col>
          {/*=============== BUTTONS ===============*/}
          <Col
            className={styles.buttonsCol}
            sm={24}
            md={12}
          >
            <h2>{this.state.name}</h2>
            <Button
              className={styles.rollFace}
              onClick={!rolling ? this.rollFace :  undefined}
              disabled={rolling}
            >
              {rolling ? "Rolling..." : "ROLL FACE"}
            </Button>
            <Button
              className={styles.rollBody}
              onClick={!rolling ? this.rollBody :  undefined}
              disabled={rolling}
            >
              {rolling ? "Rolling..." : "ROLL BODY"}
            </Button>
            <Button
              className={styles.rollBoth}
              onClick={!rolling ? this.rollBoth :  undefined}
              disabled={rolling}
            >
              {rolling ? "Rolling..." : "ROLL BOTH"}
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
        </Row>
        {/* <Row className="text-center font weight-bolder my-4">
          <Col md={12} sm={12}>
            Salvinification has been developed by me and Elisa Cinquemani
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default Slot
