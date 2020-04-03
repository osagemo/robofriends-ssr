import "simplebar/dist/simplebar.min.css";

export default class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () =>
    this.props.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.props.searchField)
    );

  render() {
    const { onSearchChange, robots, isPending } = this.props;
    const filteredRobots = this.filterRobots(robots);

    if (isPending) {
      return <h1>Fetching users...</h1>;
    }

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <SimpleBar style={{ maxHeight: "75vh" }}>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </SimpleBar>
      </div>
    );
  }
}
