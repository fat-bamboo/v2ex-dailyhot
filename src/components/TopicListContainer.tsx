import React from "react";
import "../css/topic-list-container.css";
import { Topic } from "../types";

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
    const dateString: string = this.props.date;
    const topics: Topic[] = this.props.topics;

    return (
      <div className="topics-container">
        <p className="date-text">{dateString}</p>
        {topics.length === 0 ? (
          <p className="null-text">空空如也</p>
        ) : (
          topics.map((t) => (
            <div className="topic-container" key={t.id}>
              <a className="" href={t.url}>
                {t.title}
              </a>
            </div>
          ))
        )}
      </div>
    );
  }
}
