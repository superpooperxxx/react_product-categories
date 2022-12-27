import React, { FC } from 'react';

interface Props {
  categoryName: string
  userName?: string
}

export const CategoryTitle: FC<Props> = (props) => {
  const {
    categoryName,
    userName = 'No user',
  } = props;

  return (
    <p>
      {`${categoryName} - (${userName})`}
    </p>
  );
};
