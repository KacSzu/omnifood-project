console.log(`hello`);
///////////////////////////////////////////////////////////
// MAKING MOBILE NAV WORK
const mobileNavBtn = document.querySelector(`.btn-mobile-nav`);
const headerEl = document.querySelector(`.header`);
const mainNavEl = document.querySelector(`.main-nav-list`);
mobileNavBtn.addEventListener(`click`, function (e) {
  e.preventDefault();
  headerEl.classList.toggle(`nav-open`);
});
mainNavEl.addEventListener(`click`, function (e) {
  e.preventDefault();
  if (e.target.classList.contains("main-nav-link")) {
    headerEl.classList.remove(`nav-open`);
  }
});
///////////////////////////////////////////////////////////
// SMOOTH SCROLLING ANIMATION
const allLinks = document.querySelectorAll(`a:link`);

allLinks.forEach(function (link) {
  link.addEventListener(`click`, function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // scroll to other links
    if (href !== "#" && href.startsWith(`#`)) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
    //Scroll back to top
  });
});

///////////////////////////////////////////////////////////
// MAKING STICKY NAV
const sectionHeroEl =document.querySelector(`.section-hero`)
const mobileIconEl =document.querySelector(`.icon-mobile-nav`)
const obs =new IntersectionObserver(function(entries){
  const ent=entries[0]
  console.log(ent);
  if(!ent.isIntersecting){
    document.body.classList.add(`sticky`)
    mobileIconEl.style.backgroundColor=`white`;
  } else{
    document.body.classList.remove(`sticky`)
    mobileIconEl.style.backgroundColor=`#fdf2e9`;
  }
},{
  root:null,
  threshold:0,
  rootMargin:`-80px`
})
obs.observe(sectionHeroEl)



///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

