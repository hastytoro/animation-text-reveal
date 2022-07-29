// GSAP TIMELINE
function landingAnimation() {
  let tl = gsap.timeline({
    defaults: { duration: 0.75, ease: "power3.out" },
  });

  tl.fromTo(
    ".hero-img",
    { scale: 1.3 },
    {
      scale: 1,
      delay: 0.35,
      duration: 2.5,
      ease: "elastic.out(1.5, 1)",
    }
  );
  tl.fromTo(
    ".cta1",
    { x: "110%", opacity: 0 },
    { x: "0%", opacity: 1 },
    "<20%"
  );
  tl.fromTo(
    ".cta3",
    { x: "-110%", opacity: 0 },
    { x: "0%", opacity: 1 },
    "<20%"
  );
  tl.fromTo(
    ".cta2",
    { y: " 110%", opacity: 0 },
    { y: "0%", opacity: 1 },
    "<20%"
  );

  tl.fromTo(
    ".cta4",
    { x: "110%", opacity: 0 },
    { x: "0%", opacity: 1 },
    "<20%"
  );
  tl.fromTo(
    ".cta6",
    { x: "-110%", opacity: 0 },
    { x: "0%", opacity: 1 },
    "<20%"
  );
  tl.fromTo(
    ".cta5",
    { y: " 110%", opacity: 0 },
    { y: "0%", opacity: 1 },
    "<20%"
  );

  tl.fromTo(".cta-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<");
  logoAnimation();
}

//  SPLIT TEXT ANIMATION
function logoAnimation() {
  let logo = document.querySelector(".logo");
  let letters = logo.textContent.split(""); // gather current logo letters.
  logo.textContent = ""; // clear current <h1> and replace with animated <span>.
  letters.forEach((letter) => {
    logo.innerHTML += `<span class='letter'>${letter}</span`;
  });
  gsap.set(".letter", { display: "inline-block" });
  gsap.fromTo(
    ".letter",
    { y: "100%" },
    { y: 0, delay: 1, stagger: 0.05, ease: "back.out(1)" }
  );
}

// INVOKES ON READ
landingAnimation();
