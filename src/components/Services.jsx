import { Outlet, Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Link to="ceramiccoating" className="bg-white p-4 shadow rounded">Ceramic Coating</Link>
        <Link to="paintprotection" className="bg-white p-4 shadow rounded">Paint Protection</Link>
        <Link to="wraps" className="bg-white p-4 shadow rounded">Wraps</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Services