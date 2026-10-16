import s from './renderContent.module.css'
import type { FC } from 'react'
import type { RenderContentType } from './renderContentType.ts'



export const RenderContent: FC<RenderContentType> = ({isFetching,
                                                       isResultData,
                                                       description,
                                                       children}) => {
  if (isFetching) {
    return <span className={s.searchDescription}>Loading</span>;
  }

  if (!isResultData) {
    return (
      <span className={s.searchDescription}>
          {description
            ? `No matches found for "${description}"`
            : 'Enter a movie title to start searching.'}
        </span>
    );
  }

  return children;
};