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
import { useNavigate } from 'react-router';

const Register = () => {
    const navigate = useNavigate();
    return (
        <Card className="flex flex-col min-w-full max-w-lg bg-primary-foreground">
            <CardHeader className="text-2xl">
                <CardTitle className="text-2xl font-semibold text-center">
                    Register
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
                <div className="flex flex-col">
                    <Label className="text-lg" htmlFor="fullName">
                        Full name
                    </Label>
                    <Input
                        id="fullname"
                        type="text"
                        name="fullname"
                        placeholder="John Doe Doe"
                        required
                        className="border rounded-md border-foreground"
                    />
                </div>
                <div className="flex flex-col">
                    <Label className="text-lg" htmlFor="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
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
                <div className="flex flex-col">
                    <Label className="text-lg" htmlFor="confirmPassword">
                        Confirm Password
                    </Label>
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="367-faeu854H"
                        required
                        className="border rounded-md border-foreground"
                    />
                </div>
            </CardContent>
            <CardFooter className="flex w-full gap-2 justify-center">
                <Button className={'flex cursor-pointer flex-1/2'}>
                    Register
                </Button>
                <Button
                    onClick={() => navigate('/login')}
                    className={'flex cursor-pointer flex-1/2'}
                >
                    Cancel
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Register;
