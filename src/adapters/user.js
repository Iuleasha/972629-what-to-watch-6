export const userAdapter = ({
  id = ``,
  email = ``,
  name = ``,
  avatar_url: avatarUrl = ``,
}) => {
  return {
    id,
    email,
    name,
    avatarUrl,
  };
};
