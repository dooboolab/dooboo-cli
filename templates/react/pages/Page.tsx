import React, {FC} from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  color: ${({theme}): string => theme.text};
`;

type Props = {};

const Page: FC<Props> = () => {
  return (
    <Container>
      <Text>Page</Text>
    </Container>
  );
};

export default Page;
