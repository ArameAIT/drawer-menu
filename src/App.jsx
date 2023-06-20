import { useState } from 'react'
import './App.css'

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setaboutOpen] = useState(false);
  const [contactOpen, setcontactOpen] = useState(false);
  const [socialOpen, setsocialOpen] = useState(false)
  const [courseOpen, setcourseOpen] = useState(false)

  function toggleDrawer() {
    setOpen(!open);
  };
  function forSocialMenu() {
    setsocialOpen(!socialOpen)
  }
  function forAboutMenu() {
    setaboutOpen(!aboutOpen)
  }
  function forContactMenu() {
    setcontactOpen(!contactOpen)
  }
  function forCourseMenu() {
    setcourseOpen(!courseOpen)
  }


  return (
    <div>
      <button onClick={toggleDrawer}>Drawer Menu</button>
      {open && (
        <ul style={{ cursor: "pointer" }}>
          <li onClick={forAboutMenu}>
            About Us
            {aboutOpen && (
              <ul>
                <a target='blank' href="https://www.aitschool.am/aboutUs"><li>Click for more</li></a>
              </ul>
            )}
          </li>
          <li onClick={forContactMenu}>
            Contact Us
            {contactOpen && (
              <ul>
                <a target='blank' href="https://www.aitschool.am/contact"><li>Click for more</li></a>
              </ul>
            )}
          </li>
          <li onClick={forSocialMenu}>
            Us on social sites{socialOpen && (
              <ul>
                <a target='blank' href="https://www.instagram.com/ararat_itcenter/"><li>Instagram</li></a>
                <a target='blank' href="https://www.facebook.com/AraratITCenter/"><li>Facebook</li></a>
              </ul>)}

          </li>
          <li onClick={forCourseMenu}>
            Our Courses
            {courseOpen && (
              <ul>
                <a href="https://www.aitschool.am/"><li>Click for Courses</li></a>
              </ul>
            )}
            </li>
        </ul>
      )}
    </div>
  )
}

export default DrawerMenu
