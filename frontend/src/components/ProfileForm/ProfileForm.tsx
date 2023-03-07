import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  username: string;
  email: string;
  password: string;
};

type ProfileFormProps = {
  onSubmit: (data: any) => void;
  defaultValues: any;
};

const ProfileForm = ({ onSubmit, defaultValues }: ProfileFormProps) => {
  useEffect(() => {
    console.log("values: " + defaultValues);
  }, [defaultValues]);

  const { register, handleSubmit, formState } = useForm<FormData>({
    defaultValues,
  });

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 font-bold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <p className="text-red-500 text-xs italic">
            {errors.username.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
