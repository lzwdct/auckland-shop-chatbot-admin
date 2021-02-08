import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../src'), {
  ssr: false
})

export default () => <DynamicComponentWithNoSSR />