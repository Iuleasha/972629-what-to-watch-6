export const adaptUserData = ({
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
