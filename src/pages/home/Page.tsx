import styles from "./page.module.css";
import homeImg from "../../assets/images/home.png";

export function HomePage() {
  return (
    <div className={styles["page"]}>
      <h1 className = {styles["title"]}>TurboSphere: Performance at Your Pace.</h1>
      <div className={styles["content"]}>
        <div className={styles["text-block"]}>
          <p className={styles["title-text-block"]}>Our Mascot is a Snail. Here's Why.</p>
          <p className={styles["description"]}>We live in a world obsessed with speed. But true quality is born from deliberation. 
Our snail is a symbol of the three core principles of TurboSphere:</p>
          <ul className={styles["description-list"]}>
            <li>
                🐌 Mindful Curation
We slowly select every item. No rushing - only rigorous testing, material checks, and a focus on longevity.
            </li>
            <li>
                🐌 Steady Progress
A snail always moves forward, carrying its home on its back. Our gear is built to be your reliable companion for the long haul, not to break after one season
            </li>
            <li>
                🐌 Your Personal Sphere
The shell is a perfect, self-sufficient world. We help you build your own "sphere" of comfort, efficiency, and joy, where everything has its place
            </li>
          </ul>
        </div>
        <div className={styles['image-block']}>   
          <img src={homeImg} alt="Home" className={styles["main-image"]} />
        </div>
      </div>
    </div>
  );
}
