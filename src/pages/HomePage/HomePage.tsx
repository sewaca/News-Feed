import { useState } from "react";
import styles from "./home-page.module.css";
import { IPost, PostRow, postAPI } from "~/entities/Post";
import InfiniteScroll from "react-infinite-scroll-component";

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
  // Для бесконечного скрола используем частичную загрузку данных по 10 постов
  const [page, setPage] = useState(1);
  // Получаем данные
  const {
    data: posts,
    error,
    isLoading,
    isFetching,
  } = postAPI.useGetPostsQuery(page);

  return (
    <div className={styles.postsPage}>
      {isLoading ? (
        <h1 style={{ textAlign: "center" }}>Загрузка...</h1>
      ) : error || !posts ? (
        <h1 style={{ textAlign: "center" }}>Произошла ошибка...</h1>
      ) : (
        // Компонент помогающий реализовать бесконечный скролл с виртуализацией
        <InfiniteScroll
          dataLength={posts.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={
            isFetching && <h1 style={{ textAlign: "center" }}>Загрузка...</h1>
          }
        >
          <div className={styles.postsList}>
            {posts.map((post: IPost) => (
              <PostRow key={post.id} post={post} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}
