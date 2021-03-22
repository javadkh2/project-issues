import index, { getResultPageProps } from '../../../components/ResultPage'

export default index

export const getServerSideProps = getResultPageProps({ filter: 'closed' })
