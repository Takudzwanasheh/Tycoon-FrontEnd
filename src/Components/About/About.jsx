import Footer from "../Footer/Footer";
import "./About.scss";

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutSection">
        <div className="leftSection">
          <h1>Vennis-Resources</h1>
          <span>About-us</span>
        </div>
        <div className="rightSection">
          <p>
            Vennis-Resources.... Africa's leading Wholesale Gemstone, Crystal,
            Fossil and Mineral supplier Since 1989, Toprock has pioneered the
            Rock industry in Africa, bringing the beauty of African Gems to the
            world. We are exclusively a wholesaler of rocks, minerals, crystals
            and fossils and supply retail customers worldwide in more than 50
            countries. Shop and ship immediately worldwide (Min Order: 10 kg
            Net) or build your 'basket' over time and request your custom
            shipping whenever you are ready. You can browse through our full
            range of beautiful products HERE. (Look out for our SECRET SALE on
            selected stock items growing daily with 40% off)
          </p>
        </div>
      </div>

      <div className="newsSection">
        <h1>Subscribe to our newsletter</h1>
        <p>
          We use our mailing list to update you of specials, interesting
          information, operational matters and any possible plans for taking
          over the world!
        </p>
        <div className="Subscribe">
          <input type="email" placeholder="Your-Email @gmail.com" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
