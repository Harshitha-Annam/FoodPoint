import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      {console.log(error)}
      <h1>{error.status}</h1>
      <p>{error.statusText}</p>
    </div>
  );
};
export default Error;
