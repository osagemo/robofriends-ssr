import Head from "next/head";
import { connect } from "react-redux";
import { fetchRobots, setSearchField } from "../redux/actions";
import SearchBox from "../components/SearchBox";

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

class Index extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    await reduxStore.dispatch(fetchRobots());
    return {};
  }
  componentDidMount() {}

  componentWillUnmount() {}

  filterRobots = () =>
    this.props.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.props.searchField)
    );

  onSearchChange = event =>
    this.props.dispatch(setSearchField(event.target.value));

  render() {
    console.log(this.props);
    const { dispatch } = this.props;

    const filteredRobots = this.filterRobots();
    return (
      <div className="container">
        <Head>
          <title>Next App with Redux</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <SearchBox searchChange={this.onSearchChange} />
          <div>
            {filteredRobots.map(robot => {
              return <h1>{robot.name}</h1>;
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Index);
