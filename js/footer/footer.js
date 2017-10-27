import {footer} from './../data/hunt';

const socialData = Object.keys(footer.social);
const socialLink = socialData.map((link, value) => ({value: socialData[value], link: footer.social[link]}));

const drawFooter = () => {
  return `<a href="${footer.credits.src}" class="social-link social-link--academy">${footer.credits.author}</a>
    <span class="footer__made-in">${footer.credits.text}<a href="${footer.credits.src}" class="footer__link">${footer.credits.author}</a> &copy; ${footer.credits.date}</span>
       ${socialLink.map(({value, link}) => `<a href="${link.src}" class="social-link social-link--${link.modifier}>${value}</a>`).join(``)} 
    <div class="footer__social-links"> 
</div>`.trim();
};

export default () => drawFooter();
