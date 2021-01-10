import React from "react";
import "../../css/base/base-dialog.css";

type Props = {
  // css class names
  class: string;
  // slot elements
  children: React.ReactNode;
};

export default class BaseDialog extends React.Component {
  public props: Props;

  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  public render() {
    return (
      <div className="dialog-main-wrapper">
        <div className={"dialog-main-container " + this.props.class}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
