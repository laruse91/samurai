import React, {useState} from 'react';
import style from './Paginator.module.css';

type PropsType = {
    totalItemsNum: number
    numberOfUsersOnPage: number
    currentPage: number
    getItems: (pageNum: number, requestType: string) => void
    pageBlockSize?: number
}
const Paginator: React.FC<PropsType> = ({
                                            totalItemsNum,
                                            numberOfUsersOnPage,
                                            currentPage,
                                            getItems,
                                            pageBlockSize = 10
                                        }) => {
    //hook
    const [pageBlockNum, setPageBlockNum] = useState(1);

    const pagesTotalNum: number = Math.ceil(totalItemsNum / numberOfUsersOnPage);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesTotalNum; i++) {
        pages.push(i);
    }

    const pageBlockTotalNum: number = Math.ceil(pagesTotalNum / pageBlockSize);
    const firstItemOfPageBlock: number = (pageBlockNum - 1) * pageBlockSize + 1;
    const lastItemOfPageBlock: number = pageBlockSize * pageBlockNum;

    const prevPageBlock = () => setPageBlockNum(pageBlockNum - 1);
    const nextPageBlock = () => setPageBlockNum(pageBlockNum + 1);

    return (
        <div className={style.paginator}>
            {firstItemOfPageBlock > 1 && <div onClick={prevPageBlock}
                                              className={style.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="12pt" height="12pt"
                     viewBox="0 0 12 12"
                     fill="#777d74">
                    <path
                        d="M 3.207031 6.296875 L 8.203125 11.277344 C 8.367188 11.441406 8.628906 11.441406 8.792969 11.277344 C 8.957031 11.113281 8.957031 10.847656 8.792969 10.683594 L 4.09375 6 L 8.792969 1.316406 C 8.957031 1.152344 8.957031 0.886719 8.792969 0.722656 C 8.710938 0.640625 8.605469 0.601562 8.496094 0.601562 C 8.390625 0.601562 8.285156 0.640625 8.203125 0.722656 L 3.207031 5.703125 C 3.128906 5.78125 3.082031 5.890625 3.082031 6 C 3.082031 6.109375 3.128906 6.21875 3.207031 6.296875 Z M 3.207031 6.296875 "/>
                </svg>
            </div>}

            {pages
                .filter(page => page >= firstItemOfPageBlock && page <= lastItemOfPageBlock)
                .map(page => {
                    return (<div key={page} className={style.page}>
                            <span key={page} onClick={() => {
                                getItems(page, "SET")
                            }}
                                  className={currentPage === page ? style.currentPage : style.pageNum}>
                                {page}
                            </span>
                        </div>
                    )
                })}

            {pageBlockNum < pageBlockTotalNum && <div onClick={nextPageBlock}
                                                             className={style.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="12pt" height="12pt"
                     viewBox="0 0 12 12"
                     fill="#777d74">
                    <path
                        d="M 9.105469 5.671875 L 3.554688 0.136719 C 3.371094 -0.046875 3.078125 -0.046875 2.894531 0.136719 C 2.714844 0.320312 2.714844 0.613281 2.894531 0.792969 L 8.117188 6 L 2.894531 11.207031 C 2.714844 11.386719 2.714844 11.679688 2.894531 11.863281 C 2.988281 11.953125 3.105469 12 3.226562 12 C 3.34375 12 3.460938 11.953125 3.554688 11.863281 L 9.105469 6.328125 C 9.191406 6.242188 9.242188 6.125 9.242188 6 C 9.242188 5.875 9.191406 5.757812 9.105469 5.671875 Z M 9.105469 5.671875 "/>
                </svg>
            </div>}
        </div>

    )
}

export default Paginator