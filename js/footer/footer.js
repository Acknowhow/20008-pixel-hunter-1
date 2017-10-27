import {year} from './../data/hunt';
import {socialLinks} from "../data/hunt";

const footerData = {
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

const socialData = Object.keys(footerData.social);
const socialLink = socialData.map((link, value) => ({value: socialData[value], link: footerData.social[link]}));

const footer = () => {
  return `<a href="${footerData.credits.src}" class="social-link social-link--academy">${footerData.credits.author}</a>
    <span class="footer__made-in">${footerData.credits.text}<a href="${footerData.credits.src}" class="footer__link">${footerData.credits.author}</a> &copy; ${footerData.credits.date}</span>
       ${socialLink.map(({value, link}) => `<a href="${link.src}" class="social-link social-link--${link.modifier}>${value}</a>`).join(``)} 
    <div class="footer__social-links"> 
</div>`.trim();
};

export default () => footer;
