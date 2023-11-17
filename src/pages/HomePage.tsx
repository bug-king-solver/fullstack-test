import { Container, Paper } from "@mui/material";
import useGetAllArticles from "../api/hooks/useGetAllArticles";
import { Article } from "../components";

const HomePage = () => {
  const { data: articles, error, isLoading } = useGetAllArticles();
  if (isLoading) return <div>IsLoading</div>;
  if (error) return <div>Error</div>;
  return (
    <Container maxWidth="lg">
      <Paper>
        {articles?.map((article) => (
          <Article
            key={article.id}
            author={article.author}
            url={article.url}
            image={article.image_url}
            traffic={article.daily_traffic}
          />
        ))}
      </Paper>
    </Container>
  );
};

export default HomePage;
