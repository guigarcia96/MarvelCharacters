import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import './index.css'
function Page404() {

  return(
    <div>
      <Header title='Marvel Characters' />
      <section>
        <h1>Page Not Found</h1>
        <p>
          Please return to the Home Page
        </p>

        <Button path='/' name='Home' />

      </section>
    </div>
  )
}

export default Page404