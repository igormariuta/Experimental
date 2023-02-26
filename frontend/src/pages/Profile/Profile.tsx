import { useContext } from "react";
import ProfileForm from "../../components/ProfileForm";
import { UserContext } from "../../contexts/UserContext";

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);

  const onSubmit = (data: any) => {
    // Send request to update user data with the form data
    // ...
    // Update user context with new data
    // updateUser({ ...user, ...data });
  };

  return (
    <div>
      <ProfileForm onSubmit={onSubmit} defaultValues={user} />
    </div>
  );
};

export default Profile;
