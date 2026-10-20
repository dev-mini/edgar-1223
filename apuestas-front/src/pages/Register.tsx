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
import { useRegister } from '@/hooks/useRegister';
import { useNavigate } from 'react-router';

const Register = () => {
    const navigate = useNavigate();
    const { values, errors, handleChange, isEnableSubmit } = useRegister();

    return (
        <Card className="flex flex-col min-w-full max-w-lg bg-primary-foreground">
            <CardHeader className="text-2xl">
                <CardTitle className="text-2xl font-semibold text-center">
                    Register
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
                <div className="flex flex-col gap-2">
                    <Label className="text-lg" htmlFor="fullName">
                        Full name
                    </Label>
                    <Input
                        value={values?.fullName}
                        onChange={(e) =>
                            handleChange('fullName', e.target.value)
                        }
                        id="fullName"
                        type="text"
                        name="fullName"
                        placeholder="John Doe Doe"
                        className="border rounded-md border-foreground"
                    />
                    {!!errors?.fullName && (
                        <span className="text-sm text-red-500 ml-1 my-1">
                            {' '}
                            {errors?.fullName}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-lg" htmlFor="email">
                        Email
                    </Label>
                    <Input
                        value={values?.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="m@example.com"
                        className="border rounded-md border-foreground"
                    />
                    {!!errors?.email && (
                        <span className="text-sm text-red-500 ml-1 my-1">
                            {' '}
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
                        className="border rounded-md border-foreground"
                    />
                    {!!errors?.password && (
                        <span className="text-sm text-red-500 ml-1 my-1">
                            {' '}
                            {errors?.password}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-lg" htmlFor="confirmPassword">
                        Confirm Password
                    </Label>
                    <Input
                        value={values?.confirmPassword}
                        onChange={(e) =>
                            handleChange('confirmPassword', e.target.value)
                        }
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="367-faeu854H"
                        className="border rounded-md border-foreground"
                    />
                    {!!errors?.confirmPassword && (
                        <span className="text-sm text-red-500 ml-1 my-1">
                            {' '}
                            {errors?.confirmPassword}
                        </span>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex w-full gap-2 justify-center">
                <Button
                    className={'flex cursor-pointer flex-1/2'}
                    disabled={!isEnableSubmit}
                >
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
