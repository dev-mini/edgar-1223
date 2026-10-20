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
import { Link } from 'react-router';

const Login = () => {
    return (
        <Card className="w-full max-w-lg bg-primary-foreground">
            <CardHeader className="text-2xl">
                <CardTitle className="text-2xl font-semibold text-center">
                    Login
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
                <div className="flex flex-col">
                    <Label className="text-lg" htmlFor="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="m@example.com"
                        required
                        className="border rounded-md border-foreground"
                    />
                </div>
                <div className="flex flex-col">
                    <Label className="text-lg" htmlFor="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="367-faeu854H"
                        required
                        className="border rounded-md border-foreground"
                    />
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
                <Button className={'w-full cursor-pointer'}>Login</Button>
            </CardFooter>
        </Card>
    );
};

export default Login;
