/* ------------------------------------------------------------
  -                        HEADER                            -
  ------------------------------------------------------------ */

// Select listan i headern
const listHeader = document.querySelectorAll('.list-header')
// Select the About
const about = document.querySelector('.profile-content')
// Select the portfolio
const portfolio = document.querySelector('.main-area')
// Select the footer
const contact = document.querySelector('.footer-content')

// lyssnar vid click av utbildningar i headern.
listHeader[0].addEventListener('click', () => {
  scrollIt(about)
})

// lyssnar vid click av utbildningar i headern.
listHeader[1].addEventListener('click', () => {
  scrollIt(portfolio)
})
// Liten to clicked on "about us" section on header
listHeader[2].addEventListener('click', () => {
  scrollIt(contact)
})

// scrollar ned till det valda content.
function scrollIt (element) {
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  })
}