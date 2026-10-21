import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { usePayment } from '@/hooks/usePayment';

const PaymentBody = () => {
    const {
        errors,
        values,
        handleChange,
        handleSubmitPayment,
        loading,
        isEnableSubmit,
    } = usePayment();
    return (
        <div className="flex flex-col gap-4 items-center w-full h-full">
            <div className="flex flex-col gap-2 w-full">
                <Label className="text-lg" htmlFor="cardNumber">
                    Card number
                </Label>
                <Input
                    value={values?.cardNumber}
                    onChange={(e) => {
                        const value = e.target.value
                            .replace(/\D/g, '')
                            .slice(0, 16);
                        handleChange('cardNumber', value);
                    }}
                    id="cardNumber"
                    type="text"
                    inputMode="numeric"
                    pattern="\d{16}"
                    maxLength={16}
                    name="cardNumber"
                    placeholder="1234123412341234"
                    className="border rounded-md border-foreground"
                    disabled={loading}
                />
                {!!errors?.cardNumber && (
                    <span className="text-sm text-red-500 ml-1 my-1">
                        {errors?.cardNumber}
                    </span>
                )}
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-4 self-start">
                <div className="flex flex-col gap-2 w-full">
                    <Label className="text-lg" htmlFor="expiryDate">
                        Card expiry date
                    </Label>
                    <Input
                        value={values?.expiryDate}
                        onChange={(e) => {
                            const value = e.target.value;
                            const digits = value.replace(/\D/g, '').slice(0, 4);
                            const onlyDigits =
                                digits.length > 2
                                    ? `${digits.slice(0, 2)}/${digits.slice(2)}`
                                    : digits;
                            handleChange('expiryDate', onlyDigits);
                        }}
                        id="expiryDate"
                        type="text"
                        inputMode="numeric"
                        maxLength={5}
                        name="expiryDate"
                        placeholder="MM/YY"
                        className="border rounded-md border-foreground"
                        disabled={loading}
                    />
                    {!!errors?.expiryDate && (
                        <span className="text-sm text-red-500 ml-1 my-1">
                            {errors?.expiryDate}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <Label className="text-lg" htmlFor="cvv">
                        CVV
                    </Label>
                    <Input
                        value={values?.cvv}
                        onChange={(e) => {
                            const value = e.target.value
                                .replace(/\D/g, '')
                                .slice(0, 3);
                            handleChange('cvv', value);
                        }}
                        id="cvv"
                        type="text"
                        inputMode="numeric"
                        pattern="\d{3}"
                        maxLength={3}
                        name="cvv"
                        placeholder="543"
                        className="border rounded-md border-foreground"
                        disabled={loading}
                    />
                    {!!errors?.cvv && (
                        <span className="text-sm text-red-500 ml-1 my-1">
                            {errors?.cvv}
                        </span>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <Label className="text-lg" htmlFor="fullName">
                    Full name
                </Label>
                <Input
                    value={values?.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="John Doe Doe"
                    className="border rounded-md border-foreground"
                    disabled={loading}
                />
                {!!errors?.fullName && (
                    <span className="text-sm text-red-500 ml-1 my-1">
                        {errors?.fullName}
                    </span>
                )}
            </div>
            <div className="flex flex-col gap-2 w-full self-start ">
                <Label className="text-lg" htmlFor="amount">
                    Amount
                </Label>
                <Input
                    value={values?.amount}
                    onChange={(e) => {
                        const clean = e.target.value
                            .replace(/\D/g, '')
                            .replace(/^0+(?=\d)/, '');
                        handleChange('amount', clean);
                    }}
                    id="amount"
                    type="text"
                    inputMode="numeric"
                    name="amount"
                    placeholder="$200"
                    className="border rounded-md border-foreground"
                    disabled={loading}
                />
                {!!errors?.amount && (
                    <span className="text-sm text-red-500 ml-1 my-1">
                        {errors?.amount}
                    </span>
                )}
            </div>
            <Button
                className={'w-full cursor-pointer font-bold text-xl mt-8'}
                onClick={handleSubmitPayment}
                disabled={loading || !isEnableSubmit}
            >
                {loading && <Spinner className="size-6 text-white" />} Buy
                credits
            </Button>
        </div>
    );
};

export default PaymentBody;
