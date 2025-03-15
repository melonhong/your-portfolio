const Redirect = () => {
  const previousUrl = sessionStorage.getItem("previousUrl");
  window.location.href = previousUrl;
  return (
    <>
      <h1>Redirect to somewhere...</h1>
    </>
  );
};

export default Redirect;
