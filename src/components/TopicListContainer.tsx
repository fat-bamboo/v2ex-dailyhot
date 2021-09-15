import React from "react";
import { Topic } from "../types";
import "../css/topic-list-container.css";

type Props = {
  date: string;
  topics: Topic[];
};

export default class TopicListContainer extends React.Component {
  public props: Props;

  constructor(props: Props) {
    super(props);

    this.props = props;
  }

  public render() {
    const { date: dateStr, topics } = this.props;

    return (
      <div className="topics-container">
        <p className="date-text">{dateStr}</p>
        {topics.length === 0 ? (
          <p className="null-text">空空如也</p>
        ) : (
          topics.map((t, idx) => (
            <div className="topic-container" key={t.id}>
              <span className="index-text">{idx + 1}.</span>
              <a className="link-text" href={t.url}>
                {t.title}
              </a>
            </div>
          ))
        )}
      </div>
    );
  }
}
