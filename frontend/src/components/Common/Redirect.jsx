const Redirect = () => {
  const previousURL = sessionStorage.getItem("previousURL");
  window.location.href = previousURL;
  return (
    <>
      <h1>Redirect to somewhere...</h1>
    </>
  );
};

export default Redirect;
