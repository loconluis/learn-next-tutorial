import Link from 'next/link'
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)


const Index = (props) => (
  <Layout>
    <h1>Batman TV SHOW</h1>
    <ul>
      {props.shows.map(show => {
        return (<li key={show.show.id}>
          <Link as={`/p/${show.show.id}`} href={`/post?id=${show.show.id}`}>
            <a>{show.show.name}</a>
          </Link>
        </li>)
      })}
    </ul>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data,
  }
}

export default Index