import React from 'react'
import {SwaiFetch} from '../type'
import {useAgentInfo} from './util/use'
import Layout from 'components/Layout';

const AgentActivate: React.FC<{
  consoleRootUrl: string;
  deps: {
    swaiFetch: SwaiFetch
  }
}> =({
  consoleRootUrl,
  deps: {
    swaiFetch
  }
}) =>{

  useAgentInfo(swaiFetch)

  return (
    <Layout>
      AgentActivate
    </Layout>
  ) 
}

export default AgentActivate