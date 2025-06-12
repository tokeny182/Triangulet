// CREDITS TO C00LESTKIDDEVER (yeah thats me thx for putting that there danny)
(function () {
  'use strict';

  const applyTheme = (colors, favicon, statImg, trianImg, bgImg, marketImg, phillImg) => {
    const change = (selector, property, value) => {
      const interval = setInterval(() => {
        const elements = document.querySelectorAll(selector);
        if (elements.length) {
          elements.forEach(el => el.style[property] = value);
          clearInterval(interval);
        }
      }, 25);
    };

    const hover = (selector, property, value) => {
      const style = document.createElement('style');
      style.textContent = `${selector}:hover { ${property}: ${value} !important; }`;
      document.head.appendChild(style);
    };

    const injectStyles = () => {
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        ::placeholder { color: ${colors.accent}; }
        ::-webkit-scrollbar-track { background: ${colors.dark}; }
        ::-webkit-scrollbar-thumb { background: ${colors.medium}; }
        ::-webkit-scrollbar-thumb:hover { background: ${colors.accent}; }
        .styles__chatRarityIcon___a-rM3-camelCase {
          background-image: url('https://i.ibb.co/yB650j1f/aaaaaa-removebg-preview.png') !important;
          background-size: contain !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
        }
      `;
      document.head.appendChild(styleElement);

      const link = document.createElement('link');
      link.rel = 'shortcut icon';
      link.href = favicon;
      document.head.appendChild(link);
    };

    injectStyles();

    change('.styles__edge___3eWfq-camelCase', 'backgroundColor', colors.accent);
    change('.styles__front___vcvuy-camelCase', 'backgroundColor', colors.accent);
    change('.headerside', 'backgroundColor', colors.base);
    change('.styles__background___2J-JA-camelCase', 'backgroundColor', colors.base);
    change('._body_di4r2_71', 'backgroundColor', colors.base);
    change('.signUpButton', 'backgroundColor', colors.base);
    change('.center-square', 'backgroundColor', colors.dark);
    hover('.welcomeButton', 'color', colors.base);
    change('.styles__chatInput___hfdT6-camelCase', 'border', `1px solid ${colors.dark}`);
    change('.styles__chatInput___hfdT6-camelCase', 'backgroundColor', colors.medium);
    change('.navigation-line', 'backgroundColor', colors.dark);
    change('.styles__icon___358UQ-camelCase', 'color', colors.highlight);
    hover('.styles__button___2hNZo-camelCase', 'borderColor', '#3f3f3f');
    change('.center-square', 'boxShadow', `inset 0 -7px ${colors.shadow}`);
    change('.center-square-create', 'boxShadow', `inset 0 -7px ${colors.shadow}`);
    change('.styles__button___2hNZo-camelCase', 'backgroundColor', colors.dark);
    change('.styles__input___2XTSp-camelCase', 'backgroundColor', colors.dark);
    change('.styles__buttonFilled___23Dcn-camelCase', 'borderColor', colors.highlight);
    change('.styles__forgotLink___KkpPa-camelCase', 'color', colors.highlight);
    change('.styles__sidebar___1XqWi-camelCase', 'backgroundColor', colors.dark);
    change('.styles__statsContainer___QnrRB-camelCase', 'backgroundColor', colors.dark);
    change('.styles__statContainer___QKuOF-camelCase', 'backgroundColor', colors.base);
    change('.styles__containerHeader___3xghM-camelCase', 'backgroundColor', colors.dark);
    change('.styles__container___1BPm9-camelCase', 'backgroundColor', colors.dark);
    change('.styles__container___1BPm9-camelCase', 'borderColor', colors.medium);
    change('.styles__input___2vJSW-camelCase', 'backgroundColor', colors.dark);
    change('.styles__container___3St5B-camelCase', 'backgroundColor', colors.dark);
    change('.styles__containerHeaderInside___2omQm-camelCase', 'background', `linear-gradient(${colors.accent},${colors.accent} 50%,${colors.medium} 50.01%,${colors.medium})`);
    change('.styles__profileContainer___CSuIE-camelCase', 'backgroundColor', colors.dark);
    change('.styles__profileContainer___CSuIE-camelCase', 'boxShadow', `inset 0 -8px ${colors.dark}, 0 0 4px rgba(0, 0, 0, 0.15)`);
    change('.styles__profileDropdownMenu___2jUAA-camelCase', 'boxShadow', `inset 0 -8px ${colors.dark}, 0 0 4px rgba(0, 0, 0, 0.15)`);
    change('.styles__profileDropdownMenu___2jUAA-camelCase', 'backgroundColor', colors.dark);
    hover('.styles__profileDropdownOption___ljZXD-camelCase', 'backgroundColor', colors.dark);
    change('.styles__profileDropdownOption___ljZXD-camelCase', 'backgroundColor', colors.accent);
    change('.styles__infoContainer___2uI-S-camelCase', 'backgroundColor', colors.dark);
    change('.styles__headerIcon___1ykdN-camelCase', 'color', colors.highlight);
    hover('.styles__pageButton___1wFuu-camelCase', 'backgroundColor', colors.base);
    change('.postbackground', 'backgroundColor', colors.medium);
    hover('.styles__bottomIcon___3FswG-camelCase', 'color', colors.dark);
    change('.postbackground', 'color', '#fff');
    change('.explaination', 'color', colors.dark);
    change('.center-square-create', 'backgroundColor', colors.dark);
    change('.fourofoursquare', 'backgroundColor', colors.medium);
    change('.legacycontainer', 'backgroundColor', colors.medium);
    change('.fourofoursquare', 'color', '#fff');
    change('.legacycontainer', 'color', '#fff');
    change('.styles__left___9beun-camelCase', 'backgroundColor', colors.medium);
    change('.styles__tokenBalance___1FHgT-camelCase', 'backgroundColor', colors.dark);
    change('._front_552gk_33', 'backgroundColor', colors.base);
    change('._edge_552gk_23', 'backgroundColor', colors.shadow);
    change('#themeselect', 'backgroundColor', colors.accent);

    if (window.location.pathname === '/stats') {
      (function waitStats() {
        const el = document.getElementsByClassName('styles__headerBg___12ogR-camelCase')[0];
        if (!el || !document.getElementById('profiletrian')) return setTimeout(waitStats, 1);
        el.src = statImg;
      })();
    } else if (window.location.pathname === '/trians') {
      (function waitTrian() {
        if (!document.getElementById('trianimg') || !document.getElementById('trianbackground')) return setTimeout(waitTrian, 1);
        document.getElementById('trianimg').src = trianImg;
        document.getElementById('trianbackground').src = bgImg;
      })();
    } else if (window.location.pathname === '/market') {
      (function waitMarket() {
        if (!document.getElementById('phill') || !document.getElementById('market')) return setTimeout(waitMarket, 1);
        document.getElementById('phill').src = phillImg;
        document.getElementById('market').src = marketImg;
      })();
    }

    const pfpImg = document.getElementById("pfpimg");
    if (pfpImg) pfpImg.src = trianImg;
    const profileTrianImg = document.getElementById("profiletrian");
    if (profileTrianImg) profileTrianImg.src = trianImg;

    const extraCSS = `
      .styles__pageButton___1wFuu-camelCase:hover,
      .styles__pageSelected___MugaH-camelCase {
        background-color: ${colors.buttonHover} !important;
        color: #fff !important;
      }
    `;
    const styleTag = document.createElement('style');
    styleTag.textContent = extraCSS;
    document.head.appendChild(styleTag);
  };

  const themes = {
    Purple: {
      colors: {
        base: '#8521B7',
        medium: '#7b1ea9',
        accent: '#a436db',
        dark: '#4d136b',
        highlight: '#b55ce2',
        shadow: '#3f0a5b',
        buttonHover: '#7a3fad'
      },
      favicon: 'https://i.ibb.co/Qvz5nfbX/Triangulet-Game-Logo-Purple.png',
      statImg: 'https://i.ibb.co/sv4HpL6b/Screenshot-2025-06-09-2-34-57-PM.png',
      trianImg: 'https://i.ibb.co/Qvz5nfbX/Triangulet-Game-Logo-Purple.png',
      bgImg: 'https://i.ibb.co/k2Gx66B9/Screenshot-2025-06-09-2-34-57-PM.png',
      marketImg: 'https://i.ibb.co/5Xy7Xcbq/1e87f8d5-c9f5-463f-b6fa-5b481653964d-removebg-preview.png',
      phillImg: 'https://i.ibb.co/8LTH8yHK/output-onlinepngtools-2.png'
    },

    Red: {
      colors: {
        base: '#b71c1c', medium: '#e53935', accent: '#f44336', dark: '#7f1a1a', highlight: '#ffcdd2', shadow: '#5d0d0d', buttonHover: '#c62828'
      },
      favicon: 'https://i.ibb.co/bDRqCwt/Triangulet-Game-Logo-Red.png',
      statImg: 'https://i.ibb.co/h1VvgNjb/yop.png',
      trianImg: 'https://i.ibb.co/bDRqCwt/Triangulet-Game-Logo-Red.png',
      bgImg: 'https://i.ibb.co/6cM9Lkx0/yop.png',
      marketImg: 'https://i.ibb.co/rRwwQ2jK/Redmarket-removebg-preview.png',
      phillImg: 'https://i.ibb.co/KxbXF8qn/output-onlinepngtools-2-removebg-preview.png'
    },
    Blue: {
      colors: {
        base: '#1a237e', medium: '#303f9f', accent: '#3f51b5', dark: '#121858', highlight: '#c5cae9', shadow: '#0d1042', buttonHover: '#3949ab'
      },
      favicon: 'https://i.ibb.co/yB650j1f/aaaaaa-removebg-preview.png',
      statImg: 'https://i.ibb.co/Wvz0DvMW/xnjo.gif',
      trianImg: 'https://i.ibb.co/yB650j1f/aaaaaa-removebg-preview.png',
      bgImg: 'https://i.ibb.co/B51Txj24/Screenshot-2025-06-10-8-45-48-PM.png',
      marketImg: 'https://i.ibb.co/FkXYq68N/lol-removebg-preview-2-removebg-preview.png',
      phillImg: 'https://i.ibb.co/4RGcsdMg/IM-BLUE-DABADEEBADODYE-removebg-preview.png'
    },
    Orange: {
      colors: {
        base: '#ef6c00',
        medium: '#ff9800',
        accent: '#ffa726',
        dark: '#bf360c',
        highlight: '#ffe0b2',
        shadow: '#8c2700',
        buttonHover: '#f57c00'
      },
      favicon: 'https://i.ibb.co/wfvv7Gb/orange-removebg-preview.png',
      statImg: 'https://i.ibb.co/4wR9KNc0/he.png',
      trianImg: 'https://i.ibb.co/wfvv7Gb/orange-removebg-preview.png',
      bgImg: 'https://i.ibb.co/HTF6FfRL/Screenshot-2025-06-10-8-49-58-PM.png',//yo did u get the other themes working just got out of the shower
      marketImg: 'https://i.ibb.co/whxbJ0Hd/aaaaaaaaaaaaaaaaa-removebg-preview.png',
      phillImg: 'https://i.ibb.co/CGF74xM/oren-guy-lol-removebg-preview.png'
    },

 Yellow: {
  colors: {
    base: '#fdd835',
    medium: '#fff176',
    accent: '#ffee58',
    dark: '#fbc02d',
    highlight: '#fff9c4',
    shadow: '#c6a700',
    buttonHover: '#fdd835'
  },
  favicon: 'https://i.ibb.co/mVPQRMJh/spongebobulet-removebg-preview.png',
  statImg: 'https://i.ibb.co/HLWZbGXM/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.png',
  trianImg: 'https://i.ibb.co/mVPQRMJh/spongebobulet-removebg-preview.png',
  bgImg: 'https://i.ibb.co/35kv4YqT/Screenshot-2025-06-10-8-51-08-PM.png',
  marketImg: 'https://i.ibb.co/mVkPrW7j/output-removebg-preview.png',
  phillImg: 'https://i.ibb.co/ZpfshvkQ/yellow-removebg-preview.png'
},
  Pink: {
  colors: {
    base: '#ad1457',
    medium: '#ec407a',
    accent: '#f06292',
    dark: '#880e4f',
    highlight: '#f8bbd0',
    shadow: '#560027',
    buttonHover: '#d81b60'
  },
  favicon: 'https://i.ibb.co/CprVWd1m/Triangulet-Game-Logo-Pink-removebg-preview.png',
  statImg: 'https://i.ibb.co/DgK6sMtV/pik-thing-lol.png',
  trianImg: 'https://i.ibb.co/CprVWd1m/Triangulet-Game-Logo-Pink-removebg-preview.png',
  bgImg: 'https://i.ibb.co/SwbywF8C/Screenshot-2025-06-10-9-01-04-PM.png',
  marketImg: 'https://i.ibb.co/YTh5brnC/output-1-removebg-preview.png',
  phillImg: 'https://i.ibb.co/Y7hQJQGp/pink-guy-removebg-preview.png'
},
White: {
  colors: {
    base: '#e6e6e6',
    medium: '#f5f5f5',
    accent: '#ffffff',
    dark: '#cccccc',
    highlight: '#000000',
    shadow: '#b3b3b3',
    buttonHover: '#dcdcdc'
  },
  favicon: 'https://i.ibb.co/Wp4vBtqx/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-removebg-prev.png',
  statImg: 'https://i.ibb.co/JRjXMZLQ/aaaaw.png',
  trianImg: 'https://i.ibb.co/Wp4vBtqx/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-removebg-prev.pngg',
  bgImg: 'https://i.ibb.co/fzWCdMgr/Screenshot-2025-06-10-9-02-37-PM.png',
  marketImg: 'https://i.ibb.co/RF6x5Xj/output-3.png',
  phillImg: 'https://i.ibb.co/CpR7kLkm/whi6e6tf97-removebg-preview.png'
},
Black: {
  colors: {
    base: '#121212',
    medium: '#1e1e1e',
    accent: '#000000',
    dark: '#0a0a0a',
    highlight: '#ffffff',
    shadow: '#2a2a2a',
    buttonHover: '#2c2c2c'
  },
  favicon: 'https://i.ibb.co/TDYRHjgp/output-onlinepngtools.png',
  statImg: 'https://i.ibb.co/jv0PBBcV/black-bar-thang.png',
  trianImg: 'https://i.ibb.co/TDYRHjgp/output-onlinepngtools.png',
  bgImg: 'https://i.ibb.co/1fqsLzth/Screenshot-2025-06-10-9-04-17-PM.png',//hey danny did you get the whitet themes working?
  marketImg: 'https://i.ibb.co/3524Yqx5/output-4-removebg-preview.png',
  phillImg: 'https://i.ibb.co/JjjCZN1L/black-guy-removebg-preview.png'
},

  };

  const current = localStorage.getItem("theme");
  if (current && themes[current]) {
    const t = themes[current];
    applyTheme(t.colors, t.favicon, t.statImg, t.trianImg, t.bgImg, t.marketImg, t.phillImg);

    const replaceImages = () => {
      const originalLogo = "https://i.ibb.co/5GBHSTB/Triangulet-Game-Logo.png";
let newLogo;

if (current === "Red") {
  newLogo = "https://i.ibb.co/bDRqCwt/Triangulet-Game-Logo-Red.png";
} else if (current === "Blue") {
  newLogo = "https://i.ibb.co/yB650j1f/aaaaaa-removebg-preview.png";
} else if (current === "Orange") {
  newLogo = "https://i.ibb.co/wfvv7Gb/orange-removebg-preview.png";
} else if (current === "Yellow") {
  newLogo = "https://i.ibb.co/mVPQRMJh/spongebobulet-removebg-preview.png";
} else if (current === "Green") {
  newLogo = "https://i.ibb.co/5GBHSTB/Triangulet-Game-Logo.png";
} else if (current === "Purple") {
  newLogo = "https://i.ibb.co/Qvz5nfbX/Triangulet-Game-Logo-Purple.png";
} else if (current === "Pink") {
  newLogo = "https://i.ibb.co/CprVWd1m/Triangulet-Game-Logo-Pink-removebg-preview.png";
} else if (current === "White") {
  newLogo = "https://i.ibb.co/Wp4vBtqx/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-removebg-prev.png";
} else if (current === "Black") {
  newLogo = "https://i.ibb.co/TDYRHjgp/output-onlinepngtools.png";
}




      if (!newLogo) return;

      document.querySelectorAll(`img[src="${originalLogo}"]`).forEach(img => img.src = newLogo);

      const observer = new MutationObserver(mutations => {
        mutations.forEach(m => {
          m.addedNodes.forEach(node => {
            if (node instanceof HTMLImageElement && node.src === originalLogo) node.src = newLogo;
            if (node instanceof HTMLElement) {
              node.querySelectorAll(`img[src="${originalLogo}"]`).forEach(img => img.src = newLogo);
            }
          });
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
    };

    replaceImages();
  }

  const chatIconUrl = 'https://i.ibb.co/yB650j1f/aaaaaa-removebg-preview.png';
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (!(node instanceof HTMLElement)) return;

        if (node.classList && node.classList.contains('styles__chatRarityIcon___a-rM3-camelCase')) {
          node.style.backgroundImage = `url('${chatIconUrl}')`;
          node.style.backgroundSize = 'contain';
          node.style.backgroundRepeat = 'no-repeat';
          node.style.backgroundPosition = 'center';
        }

        const icons = node.querySelectorAll('.styles__chatRarityIcon___a-rM3-camelCase');
        icons.forEach(icon => {
          icon.style.backgroundImage = `url('${chatIconUrl}')`;
          icon.style.backgroundSize = 'contain';
          icon.style.backgroundRepeat = 'no-repeat';
          icon.style.backgroundPosition = 'center';
        });
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  const waitDropdown = setInterval(() => {
    const dropdown = document.getElementById("themeSelect");
    if (dropdown) {
      clearInterval(waitDropdown);

      const addOption = (name) => {
        if (![...dropdown.options].some(opt => opt.value === name)) {
          const opt = document.createElement("option");
          opt.value = name;
          opt.textContent = name;
          dropdown.appendChild(opt);
        }
      };

      addOption("Red");
      addOption("Blue");
      addOption("Orange");
      addOption("Yellow");
      addOption("Pink");
      addOption("White");
      addOption("Black");
      addOption("Spooky");
      addOption("WG");
      dropdown.value = current || "Green";

      dropdown.addEventListener("change", () => {
        const theme = dropdown.value;
        if (theme === "Green") {
          localStorage.removeItem("theme");
        } else {
          localStorage.setItem("theme", theme);
        }
        location.reload();
      });
    }
  }, 100);
})();
