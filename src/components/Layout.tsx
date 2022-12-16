import React from 'react'
import styled from 'styled-components'
import {Text, LineLoader, Button} from '@ubnt/ui-components'


const Root = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`

const Container = styled.section`
  position: relative;
  height: calc(100% - 145px);
  overflow: auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
`

const Layouy: React.FC<{
  loading?: boolean,
  error?: string | null | undefined,
  onClick: () => void
}> = ({loading, error, children, onClick})=>{
  return (
    <Root>
      <LineLoader isLoading={loading} />
      <Container>
        {
          error ? (
            <>
              <Text color='danger' size="body">{error}</Text>
              <Button variant='primary' onClick={onClick}>Try Again</Button>
            </>
          ) : children
        }
      </Container>
    </Root>
  )
}

export default Layouy