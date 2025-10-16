import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { InlineLoader } from "@/components/ui/InlineLoader";
import { notify } from "@/lib/toat";



// 1️⃣ Define the validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// 2️⃣ Infer the TypeScript type
type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  // 3️⃣ Initialize React Hook Form with Zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // 4️⃣ Handle form submission
  const onSubmit = async (data: LoginFormData) => {
    console.log("Form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate delay
    notify.success(`Welcome, ${data.email}!`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-gray-800 bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm p-6 bg-white rounded-md shadow-md"
      >
        <h1 className="mb-4 text-2xl font-bold text-center">Login</h1>

        {/* Email */}
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full p-2 mb-1 border border-gray-300 rounded"
        />
        {errors.email && (
          <p className="mb-3 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}

        {/* Password */}
        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          type="password"
          {...register("password")}
          className="w-full p-2 mb-1 border border-gray-300 rounded"
        />
        {errors.password && (
          <p className="mb-3 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          className="flex items-center justify-center w-full mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? <InlineLoader message="Logging in..." /> : "Login"}
        </Button>
      </form>
    </main>
  );
}