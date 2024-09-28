import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/catalog", { replace: false });    
  };
  
  return (
    <section className={css.heroSection}>
    <div className={css.container}>
      <PageTitle className={css.herroTitle}>
          Campers of your dreams
      </PageTitle>
      <p className={css.prg}>
          You can find everything you want in our catalog
      </p>
      <Button type="button" onClick={handleClick}>View Now</Button>
      </div>
      </section>
  );
}