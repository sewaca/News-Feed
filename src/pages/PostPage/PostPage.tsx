import { Link, useParams } from "react-router-dom";
import { postAPI, PostContent } from "~/entities/Post";
import styles from "./post-page.module.css";

interface PostPageProps {}

export default function PostPage({}: PostPageProps) {
  const { id } = useParams();
  if (!id) return <h1>Некорректный id</h1>;

  const {
    data: post,
    error,
    isLoading,
  } = postAPI.useGetPostByIdQuery(parseInt(id));

  return (
    <article className={styles.postCard}>
      {isLoading ? (
        <h1>Загрузка...</h1>
      ) : error || !post ? (
        <h1>Произошла ошибка...</h1>
      ) : (
        <PostContent post={post[0]} />
      )}
      <Link to="/">Назад</Link>
    </article>
  );
}
