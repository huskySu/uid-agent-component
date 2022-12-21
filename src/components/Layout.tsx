import React, { ReactNode } from 'react'
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
  justify-content: center;
`

const Layout: React.FC<{
  children: ReactNode | string,
  loading?: boolean | undefined,
  error?: string | null | undefined,
  onClick?: () => void | undefined
}> = ({loading, error, children, onClick})=>{
  return (
    <Root>
      <LineLoader isLoading={loading||false} />
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

export default Layout