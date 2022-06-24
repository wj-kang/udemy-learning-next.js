function UserProfilePage({ username }) {
  return <h1>{username}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: { username: 'asdf' },
  };
}
