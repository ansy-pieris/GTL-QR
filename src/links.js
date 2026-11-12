// Brings in the brand icons from react-icons (fa6 = Font Awesome version 6 set)
import { FaGlobe, FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa6'

// The list of all links shown on the page, in the order they appear
const links = [
  {
    // Text shown on the button
    name: 'Website',
    // Small line under the name
    handle: 'Visit our official site',
    // Where the button goes when clicked
    url: 'https://www.gtllanka.com/',
    // The icon shown on the button
    icon: FaGlobe,
    // Tailwind classes for the icon's background colour
    color: 'bg-emerald-500',
  },
    {
    // Text shown on the button
    name: 'LinkedIn',
    // Small line under the name
    handle: 'Connect with us',
    // Your LinkedIn company page link
    url: 'https://www.linkedin.com/company/globalpark-gtl',
    // The LinkedIn icon
    icon: FaLinkedin,
    // LinkedIn blue
    color: 'bg-sky-700',
  },
  {
    // Text shown on the button
    name: 'Instagram',
    // Small line under the name (your Instagram username)
    handle: '@globalpark.gtl',
    // Your Instagram profile link
    url: 'https://www.instagram.com/globalpark.gtl/',
    // The Instagram icon
    icon: FaInstagram,
    // Instagram's purple-pink-orange gradient
    color: 'bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600',
  },
  {
    // Text shown on the button
    name: 'Facebook',
    // Small line under the name
    handle: 'Like our page',
    // Your Facebook page link
    url: 'https://www.facebook.com/globalpark.gtl',
    // The Facebook icon
    icon: FaFacebook,
    // Facebook blue
    color: 'bg-blue-600',
  },
  {
    // Text shown on the button
    name: 'TikTok',
    // Small line under the name (your TikTok username)
    handle: '@global_park_',
    // Your TikTok profile link
    url: 'https://www.tiktok.com/@global_park_',
    // The TikTok icon
    icon: FaTiktok,
    // TikTok black
    color: 'bg-black',
  },

]

// Makes the list available so App.jsx can use it
export default links