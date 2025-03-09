import LoginForm from '@/components/login-form';

export default function LoginPage() {
  return (
    <div>
      <div className="w-full min-h-screen bg-[url('/login.jpg')] bg-cover bg-center flex items-center justify-centermin-h-screen flex items-center justify-center bg-gray-100">
        <LoginForm />
      </div>
    </div>
  );
}