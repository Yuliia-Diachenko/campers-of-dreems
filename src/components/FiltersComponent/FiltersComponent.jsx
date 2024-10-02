import css from "./FiltersComponent.module.css";

export default function FiltersComponent({children}) {

    return (
        <button className={css.buttonFilter}>{children}</button>
    )
}