import Header from '../components/Header'
import Link from 'next/link'
import Layout from '../components/MyLayout';

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)


export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-next" title="Hello Next.js" />
      <PostLink id="learn-next" title="Learn Next.js is awesome" />
      <PostLink id="deploy-with-zeit" title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)