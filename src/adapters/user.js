export const userAdapter = ({
  id = ``,
  email = ``,
  name = ``,
  avatar_url: avatarUrl = ``,
}) => {
  return {
    id: id.toString(),
    email,
    name,
    avatarUrl,
  };
};
