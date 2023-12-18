import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='notfound'>
        <h2>Not Found</h2>
        <p>Please try again and crosscheck the links.</p>
        <p> Go to the <Link to="/">HomePage</Link>.</p>
    </div>
  )
}