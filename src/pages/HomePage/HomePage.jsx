import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

export default function HomePage() {

  return (
    <section className={css.heroSection}>
    <div className={css.container}>
      <PageTitle className={css.herroTitle}>
          Campers of your dreams
      </PageTitle>
      <p className={css.prg}>
          You can find everything you want in our catalog
      </p>
      <Link to="/catalog"><Button type="button">View Now</Button></Link>
      </div>
      </section>
  );
}