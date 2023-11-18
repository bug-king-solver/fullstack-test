import { Paper, Box } from "@mui/material";
import { useGetAllArticles } from "../../../api";
import { Article } from "../../article";
import { useInView } from "react-intersection-observer";
import { IArticle } from "../../../interfaces";
import React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const ClickableBox = styled(Box)({
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f5f5f5", // Example hover color, adjust as needed
  },
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  marginBottom: "10px",
});

const ArticleList = () => {
  const navigate = useNavigate();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isLoading,
  } = useGetAllArticles();

  const { ref } = useInView({
    fallbackInView: true,
    onChange: (inView: boolean) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <Paper>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.paginatedArticles?.map(
              (article: IArticle, length: number) => (
                <ClickableBox
                  ref={
                    page.paginatedArticles.length === length + 1 ? ref : null
                  }
                  key={article.id}
                  onClick={() => navigate(`${article.id}`)}
                >
                  <Article
                    key={article.id}
                    author={article.author}
                    url={article.url}
                    image={article.image_url}
                    traffic={article.daily_traffic}
                  />
                </ClickableBox>
              )
            )}
          </React.Fragment>
        ))}
      </Paper>
      {isFetchingNextPage && <div>Loading...</div>}
    </>
  );
};

export default ArticleList;
