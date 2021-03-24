import index, { getResultPageProps } from '../../../components/SearchPage'

export default index

export const getServerSideProps = getResultPageProps({ filter: 'closed' })
