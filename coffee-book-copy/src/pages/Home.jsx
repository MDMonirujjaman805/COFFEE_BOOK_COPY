import { Outlet, useLoaderData } from 'react-router'
import Banner from '../components/Banner'
import Heading from '../components/Heading'
import Categories from '../components/Categories'

const Home = () => {
  const categories = useLoaderData()
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Heading */}
      <Heading
        title='Browse Coffees by Category'
        subtitle='Choose your desired coffee category to browse through specific coffees that fit in your taste.

'
      />
      {/* Categories tab section */}
      <Categories categories={categories} />
      {/* Dynamic Nested Component */}
      <Outlet />
    </div>
  )
}

export default Home