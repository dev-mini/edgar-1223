import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PaymentBody = () => {
    return (
        <div className="flex flex-col gap-4 items-center w-full h-full">
            <div className="flex flex-col gap-2 w-full">
                <Label className="text-lg" htmlFor="cardNumber">
                    Card number
                </Label>
                <Input
                    // value={values?.fullName}
                    // onChange={(e) => handleChange('fullName', e.target.value)}
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    placeholder="1234123412341234"
                    className="border rounded-md border-foreground"
                    // disabled={loading}
                />
                {/* {!!errors?.fullName && (
                    <span className="text-sm text-red-500 ml-1 my-1">
                        {' '}
                        {errors?.fullName}
                    </span>
                )} */}
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-4 self-start">
                <div className="flex flex-col gap-2 w-full">
                    <Label className="text-lg" htmlFor="expiryDate">
                        Card expiry date
                    </Label>
                    <Input
                        // value={values?.fullName}
                        // onChange={(e) => handleChange('fullName', e.target.value)}
                        id="expiryDate"
                        type="text"
                        name="expiryDate"
                        placeholder="12/26"
                        className="border rounded-md border-foreground"
                        // disabled={loading}
                    />
                    {/* {!!errors?.fullName && (
                    <span className="text-sm text-red-500 ml-1 my-1">
                        {' '}
                        {errors?.fullName}
                    </span>
                )} */}
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <Label className="text-lg" htmlFor="cvv">
                        CVV
                    </Label>
                    <Input
                        // value={values?.fullName}
                        // onChange={(e) => handleChange('fullName', e.target.value)}
                        id="cvv"
                        type="text"
                        name="cvv"
                        placeholder="543"
                        className="border rounded-md border-foreground"
                        // disabled={loading}
                    />
                    {/* {!!errors?.fullName && (
                    <span className="text-sm text-red-500 ml-1 my-1">
                        {' '}
                        {errors?.fullName}
                    </span>
                )} */}
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <Label className="text-lg" htmlFor="fullName">
                    Full name
                </Label>
                <Input
                    // value={values?.fullName}
                    // onChange={(e) => handleChange('fullName', e.target.value)}
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="John Doe Doe"
                    className="border rounded-md border-foreground"
                    // disabled={loading}
                />
                {/* {!!errors?.fullName && (
                    <span className="text-sm text-red-500 ml-1 my-1">
                        {' '}
                        {errors?.fullName}
                    </span>
                )} */}
            </div>
            <div className="flex flex-col gap-2 w-full self-start ">
                <Label className="text-lg" htmlFor="amount">
                    Amount
                </Label>
                <Input
                    // value={values?.amount}
                    // onChange={(e) => handleChange('amount', e.target.value)}
                    id="amount"
                    type="text"
                    name="amount"
                    placeholder="$200"
                    className="border rounded-md border-foreground"
                    // disabled={loading}
                />
                {/* {!!errors?.amount && (
                    <span className="text-sm text-red-500 ml-1 my-1">
                        {' '}
                        {errors?.amount}
                    </span>
                )} */}
            </div>
            <Button className={'w-full cursor-pointer font-bold text-xl mt-8'}>
                Buy credits
            </Button>
        </div>
    );
};

export default PaymentBody;
