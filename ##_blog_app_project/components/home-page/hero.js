import Image from 'next/image';
import styles from './hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image //
          draggable={false}
          src="/images/site/emoji.png"
          width={300}
          height={300}
          alt="An image"
        />
      </div>
      <h1>Hi, I'm Wonjun</h1>
      <p>I blog about web development - especially frontend frameworks like React</p>
    </section>
  );
}

export default Hero;
