import React from "react";
import ReactDOM from "react-dom";
import BaseDialog from "./base/BaseDialog";
import "../css/about-dialog.css";

export default class AboutDialog extends React.Component {
  private tempContainerEl: HTMLDivElement;

  constructor(props = {}) {
    super(props);

    this.tempContainerEl = document.createElement("div");
  }

  public show() {
    // FIXME: 还没考虑如果存在多个 Dialog。
    document.body.classList.add("dialog-present-no-scroll");
    ReactDOM.render(this.render(), document.body.appendChild(this.tempContainerEl));
  }

  public close() {
    this.tempContainerEl.remove();
    document.body.classList.remove("dialog-present-no-scroll");
  }

  public render() {
    return (
      <BaseDialog class="about-dialog-container">
        <div className="header-container">
          <p className="title-text">About</p>
          <span className="btn close-btn" onClick={this.close.bind(this)}>
            Close
          </span>
        </div>
        <div className="content-container">
          <p>V2EX 热议话题榜，展示从 2020-12-18 日开始的 V2EX 热议话题榜单。</p>
          <p>
            源码地址：
            <a href="https://github.com/boojack/v2ex-daily-hot-topic-web">GitHub</a>
          </p>
        </div>
        <div className="footer-container">{/* TODO */}</div>
      </BaseDialog>
    );
  }
}
