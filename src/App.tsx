import React from "react";
import "./css/app.css";
import TopicListContainer from "./components/TopicListContainer";
import * as utils from "./utils";
import { Topic } from "./types";
import { RAW_JSON_BASE_URL, SCRIPT_BEGIN_TIMESTAMP, DAY_MILLISECONDS_COUNT } from "./consts";
import AboutDialog from "./components/AboutDialog";

type State = {
  isFetching: boolean;
  dailyTopics: {
    date: string;
    topics: Topic[];
  }[];
  failedFetching: boolean;
};

class App extends React.Component {
  public state: State;

  constructor(props: any) {
    super(props);

    this.state = {
      isFetching: true,
      dailyTopics: [],
      failedFetching: false,
    };
  }

  async componentDidMount() {
    const beginingTimestamp = SCRIPT_BEGIN_TIMESTAMP;
    let currentTimestamp = utils.getCurrentTimeStamp();

    while (currentTimestamp > beginingTimestamp) {
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
        this.setState({
          failedFetching: true,
        });
        console.error(error);
        break;
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
        <header className="header-container">
          <p className="header-text">V2EX 每日热门话题</p>
          <span className="about-btn" onClick={this.showAboutDialog.bind(this)}>
            About
          </span>
        </header>
        {/* 每日话题列表 */}
        {this.state.dailyTopics.map((d) => (
          <TopicListContainer key={d.date} topics={d.topics} date={d.date}></TopicListContainer>
        ))}
        {/* fetching status text */}
        {this.state.isFetching && <p>获取数据中...</p>}
        {/* fetch failed result text */}
        {this.state.failedFetching && (
          <p>
            获取数据失败，
            <span className="error-text" onClick={this.refreshPage.bind(this)}>
              尝试刷新一下吧
            </span>
          </p>
        )}
      </div>
    );
  }

  private refreshPage() {
    this.setState({
      isFetching: true,
      dailyTopics: [],
      failedFetching: false,
    });

    setTimeout(() => {
      this.componentDidMount();
    }, 2000);
  }

  private showAboutDialog() {
    const aboutDialog = new AboutDialog();
    aboutDialog.show();
  }
}

export default App;
