import { MutableRefObject, useRef, useState, useMemo, useEffect } from 'react';
import { ArticleType } from 'shared/Type';

export interface useInfiniteScrollType {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  articleList: ArticleType[];
}

const NUMBER_OF_ITEMS_PER_PAGE = 10;

const useInfiniteScroll = (
  selectedCategory: string,
  articles: ArticleType[],
): useInfiniteScrollType => {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);

  const [count, setCount] = useState<number>(1);

  const articleListByCategory = useMemo<ArticleType[]>(
    () =>
      articles.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: ArticleType) =>
          selectedCategory !== '모두보기'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  );

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      if (!entries[0].isIntersecting) return;

      setCount(value => value + 1);
      observer.disconnect();
    },
  );

  useEffect(() => setCount(1), [selectedCategory]);

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= articleListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return;

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    );
  }, [count, selectedCategory]);

  return {
    containerRef,
    articleList: articleListByCategory.slice(
      0,
      count * NUMBER_OF_ITEMS_PER_PAGE,
    ),
  };
};

export default useInfiniteScroll;
