import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { useLogin } from '@/hooks/useLogin';
import { Link } from 'react-router';

const Login = () => {
    const {
        isEnableSubmit,
        handleChange,
        handleSubmitLoginData,
        errors,
        values,
        loading,
    } = useLogin();

    return (
        <Card className="w-full max-w-lg bg-primary-foreground">
            <CardHeader className="text-2xl">
                <CardTitle className="text-2xl font-semibold text-center">
                    Login
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
                <div className="flex flex-col gap-2">
                    <Label className="text-lg" htmlFor="email">
                        Email
                    </Label>
                    <Input
                        value={values?.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="m@example.com"
                        required
                        className="border rounded-md border-foreground"
                        disabled={loading}
                    />
                    {!!errors?.email && (
                        <span className="text-sm text-red-500 ml-1 my-1">
                            {errors?.email}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-lg" htmlFor="password">
                        Password
                    </Label>
                    <Input
                        value={values?.password}
                        onChange={(e) =>
                            handleChange('password', e.target.value)
                        }
                        id="password"
                        name="password"
                        type="password"
                        placeholder="367-faeu854H"
                        required
                        className="border rounded-md border-foreground"
                        disabled={loading}
                    />
                    {!!errors?.password && (
                        <span className="text-sm text-red-500 ml-1 my-1">
                            {errors?.password}
                        </span>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <span className="self-start">
                    Don't have an account yet?
                    <Link
                        to="/register"
                        className="ml-1 hover:underline text-blue-500"
                    >
                        Click Here
                    </Link>
                </span>
                <Button
                    className={'w-full cursor-pointer'}
                    disabled={!isEnableSubmit || loading}
                    onClick={handleSubmitLoginData}
                >
                    {loading && <Spinner className="size-6 text-white" />} Login
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Login;
