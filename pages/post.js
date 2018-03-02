import Layout from '../components/MyLayout'

const Content = props => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

export default props => {
  console.log(props)
  return (
  <Layout>
    <Content url={props.url}/>
  </Layout>
)}