import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProfileForm from "../../components/ProfileForm";
import { UserContext } from "../../contexts/UserContext";

// const fetcher = (url: string, token: string) =>
//   axios.get(url, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + "/api/users/me", {
        headers: {
          Authorization: `Bearer ${user!.jwt}`,
        },
      })
      .then(({ data }) => {
        setData(data);
        console.log("Data: ", data);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  }, [user]);

  // const { data, error } = useSWR(
  //   user?.jwt ? [process.env.REACT_APP_API + "/api/users/me", user.jwt] : null,
  //   fetcher
  // );

  // console.log(process.env.REACT_APP_API + "/api/users/me", user?.jwt);

  // if (error) return <div>Failed to load user data</div>;
  // if (!data) return <div>Loading...</div>;

  const onSubmit = (data: any) => {
    // Send request to update user data with the form data
    // ...
    // Update user context with new data
    // updateUser({ ...user, ...data });
  };

  return <ProfileForm onSubmit={onSubmit} defaultValues={data} />;
};

export default Profile;
