import Link from 'next/link';
import Image from 'next/image';
import styles from './post-item.module.css';

function PostItem(props) {
  const {
    post: { title, image, excerpt, date, slug },
  } = props;

  const formattedDate = new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const imagePath = `/images/posts/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <a>
          <div className={styles.image}>
            <Image //
              draggable={false}
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
