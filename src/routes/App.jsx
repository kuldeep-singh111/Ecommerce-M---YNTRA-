import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Fetchitems from '../components/Fetchitems'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'


const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);




  return (
    <>

      <Header />
      <Fetchitems />

      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;