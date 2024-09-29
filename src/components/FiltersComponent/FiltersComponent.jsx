import css from "./FiltersComponent.module.css";

export default function FiltersComponent({children}) {

    return (
        <div className={css.buttonFilter}>{children}</div>
    )
}