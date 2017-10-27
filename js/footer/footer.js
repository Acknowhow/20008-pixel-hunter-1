const date = new Date();
const year = date.getFullYear();

const socialLinks = [`Твиттер`, `Инстаграм`, `Фэйсбук`, `Вконтакте`];

const footer = {
  credits: {
    author: `HTML Academy`,
    text: `Сделано в`,
    src: `https://htmlacademy.ru`,
    date: [year]
  },
  social: {
    [socialLinks[0]]: {
      src: `https://twitter.com/htmlacademy_ru`,
      modifier: `tw`
    },
    [socialLinks[1]]: {
      src: `https://www.instagram.com/htmlacademy/`,
      modifier: `ins`
    },
    [socialLinks[2]]: {
      src: `https://www.facebook.com/htmlacademy`,
      modifier: `fb`
    },
    [socialLinks[3]]: {
      src: `https://vk.com/htmlacademy`,
      modifier: `vk`
    }
  }
};

const socialData = Object.keys(footer.social);
const socialLink = socialData.map((link, value) => ({value: socialData[value], link: footer.social[link]}));

const FooterDefault = () => {
  return `<a href="${footer.credits.src}" class="social-link social-link--academy">${footer.credits.author}</a>
    <span class="footer__made-in">${footer.credits.text}<a href="${footer.credits.src}" class="footer__link">${footer.credits.author}</a> &copy; ${footer.credits.date}</span>
       ${socialLink.map(({value, link}) => `<a href="${link.src}" class="social-link social-link--${link.modifier}>${value}</a>`).join(``)} 
    <div class="footer__social-links"> 
</div>`.trim();
};

export default () => FooterDefault;
