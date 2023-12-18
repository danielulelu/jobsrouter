import { Link, useRouteError } from 'react-router-dom';

export const CareerError = () => {
    const error = useRouteError()
  return (
    <div className="careers-error">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to='/careers'>Go back</Link>
    </div>
  )
}