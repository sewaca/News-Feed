import styles from "./post-row.module.css";
import { IPost } from "../..";
import { Link } from "react-router-dom";

interface PostRowProps {
  post: IPost;
}

export default function PostRow({ post }: PostRowProps) {
  return (
    <article className={styles.postRow}>
      <div>
        <h2>
          <span>{post.id}</span> {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
      <Link to={`/posts/${post.id}`}>Просмотр</Link>
    </article>
  );
}
