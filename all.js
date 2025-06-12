console.log("%cWARNING... ", "color: red;font-size: 50px;");
console.log("%cThis console is intended for developers, if someone told you to paste something here it is most likely a scam.", "color: grey;font-size: 30px;");
console.log("%cIf you ran something here, please contact a Triangulet developer now.", "color: grey;font-size: 30px;");

fetch('/config.json', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: null
      })
      .then(response => response.json())
      .then(response => {
        let pagename = window.location.pathname.replace("/", "")
        document.title = `${pagename.charAt(0).toUpperCase() + pagename.slice(1)} | ${response.name}`;
        document.getElementsByClassName("styles__blooketText___1pMBG-camelCase")[0].innerText = response.name
      })

  document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("triangulet_username") || "user";
    const userDrop = document.getElementById("usernamedrop");
    if (userDrop) {
      userDrop.textContent = username;
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("triangulet_username");

    if (!username) {
      alert("Please sign in.");
      window.location.href = "/login";
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const logoutLink = document.getElementById("logout-link");

    if (logoutLink) {
      logoutLink.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "/login";
      });
    }
  });

(function () {
  const theme = (localStorage.getItem("trianguletTheme") || "Green").trim().toLowerCase();
  const logos = {
    red: "https://i.ibb.co/bDRqCwt/Triangulet-Game-Logo-Red.png",
    blue: "https://i.ibb.co/yB650j1f/aaaaaa-removebg-preview.png",
    orange: "https://i.ibb.co/wfvv7Gb/orange-removebg-preview.png",
    yellow: "https://i.ibb.co/mVPQRMJh/spongebobulet-removebg-preview.png",
    green: "https://i.ibb.co/5GBHSTB/Triangulet-Game-Logo.png",
    blue: "https://i.ibb.co/yB650j1f/aaaaaa-removebg-preview.png",
    purple: "https://i.ibb.co/ZzfGbJBd/Purple-Market.png",
    pink: "https://i.ibb.co/p3jv4Rr/pink-triangulet.png",
    white: "https://i.ibb.co/fDNWjVc/white-triangulet.png",
    black: "https://i.ibb.co/4fm4pQh/black-triangulet.png"
  };
  const logoURL = logos[theme] || logos.green;
  const overlay = document.createElement("div");
  overlay.id = "triangulet-loading-screen";
  overlay.style.cssText = ` position: fixed; z-index: 9999; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.7); display: flex; align-items: center; justify-content: center; `;
  const logo = document.createElement("img");
  logo.src = logoURL;
  logo.style.cssText = ` width: 150px; height: auto; animation: trianguletPulse 0.6s infinite alternate; `;
  const style = document.createElement("style");
  style.textContent = ` @keyframes trianguletPulse { from { transform: scale(1); } to { transform: scale(1.2); } } `;
  overlay.appendChild(logo);
  document.head.appendChild(style);
  document.body.appendChild(overlay);
  window.addEventListener("load", () => {
    overlay.remove();
  });
})();
