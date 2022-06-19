import Profile from '../components/profile';

export async function getServerSideProps(context) {
  return {
    props: {
      app: {
        title: 'Clara',
        subtitle: 'Human-in-the-loop assistant that schedules meetings.',
        description: 'Clara helps you focus on things that matter. Just add Clara to any email, and it will take care of scheduling back-and-forth on your behalf.',
        creator: 'ClaraLabs',
        pricing: {
          trial: true,
          currency: '$',
          minimum: 99,
          maximum: 399,
          period: 'month',
          model: 'per user'
        },
        tags: ['Productivity', 'Calendar'],
        images: {
          main: 'https://ph-files.imgix.net/2e458295-b27b-4471-a3f4-b0c27ee6362d.png?auto=format&auto=compress&codec=mozjpeg&cs=strip',
          icon: 'https://ph-files.imgix.net/4acd998d-9139-4a71-b278-d76df8382665.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=64&h=64&fit=crop&frame=1&dpr=1',
        },
        date: '2022-06-18',
        slug: 'clara'
      }
    }
  }
}

export default function Home({ app }) {
  return (
    <Profile app={app} />
  )
}
