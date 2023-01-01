const Home = () => {
  return (
    <div>
      Home Page
      {process.env.REACT_APP_BASE_URL}
    </div>
  );
};

export default Home;
