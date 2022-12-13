import React from "react";
import styles from "./Paginator.module.css";

let paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pagination}>
            {pages.map(p => {
                return <div className={`${currentPage === p && styles.selectedPage} ${styles.paginationItem}`}
                            onClick={(e) => {
                                onPageChanged(p)
                            }}>{p}</div>
            })}
        </div>
    )
}

export default paginator;