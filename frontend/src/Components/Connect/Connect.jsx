import React from 'react'
import BookButton from '../BookButton/BookButton'
import MyHeader from '../MyHeader/MyHeader'
import './Connect.css'

function Connect() {

  const redirect = (name) => {
    window.location.href = name;
  }

  return (
    <div className='connect'>
        <div className="connect-margin">
            <MyHeader name="CONNECT" />

            {/* expanding div section */}
            <section className='exp-div'>
              {/* Instagram  */}
              <div className="exp o1" onClick={() => {redirect("https://www.instagram.com/djkamso/")}}></div>
              {/* Gmail */}
              <div className="exp o2" onClick={() => redirect("https://mail.google.com/mail/?view=cm&fs=1&to=kamso@gmail.com")}></div>
              {/* SnapChat */}
              <div className="exp o3" onClick={() => {redirect("https://t.snapchat.com/lLR60QJS")}}></div>
            </section>

            <BookButton />
        </div>
    </div>
  )
}

export default Connect