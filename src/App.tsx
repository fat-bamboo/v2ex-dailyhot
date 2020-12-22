import React from "react";
import "./css/app.css";
import { Topic } from "./types";
import * as utils from "./utils";
import TopicListContainer from "./components/TopicListContainer";
import {
  RAW_JSON_BASE_URL,
  SCRIPT_BEGIN_TIMESTAMP,
  DAY_MILLISECONDS_COUNT,
} from "./consts";

class App extends React.Component {
  public state: {
    isFetching: boolean;
    dailyTopics: {
      date: string;
      topics: Topic[];
    }[];
  };

  constructor(props: any) {
    super(props);

    this.state = {
      isFetching: true,
      dailyTopics: [],
    };
  }

  async componentDidMount() {
    let currentTimestamp = utils.getCurrentTimeStamp();

    while (currentTimestamp > new Date(SCRIPT_BEGIN_TIMESTAMP).getTime()) {
      const formatDateString = utils.formatDate(currentTimestamp);
      const rawDataFilePath = RAW_JSON_BASE_URL + formatDateString + ".json";

      try {
        const res = await fetch(rawDataFilePath);
        const dailyTopics = {
          date: formatDateString,
          topics: await res.json(),
        };

        this.setState({
          dailyTopics: this.state.dailyTopics.concat(dailyTopics),
        });
      } catch (error) {
        console.error(error);
      }

      currentTimestamp -= DAY_MILLISECONDS_COUNT;
    }

    this.setState({
      isFetching: false,
    });
  }

  public render() {
    return (
      <div className="page-container">
        <header className="header-text">V2EX 热点主题</header>
        {this.state.dailyTopics.map((d) => (
          <TopicListContainer
            key={d.date}
            topics={d.topics}
            date={d.date}
          ></TopicListContainer>
        ))}
        {this.state.isFetching && <p>获取数据中...</p>}
      </div>
    );
  }
}

export default App;
