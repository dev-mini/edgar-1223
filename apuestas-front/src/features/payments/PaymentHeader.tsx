const PaymentHeader = () => {
    return (
        <div className="flex flex-col gap-2 w-full border-b-secondary-foreground border-b-2 pb-4">
            <h1 className="font-bold text-3xl">SnailPay</h1>
            <div className="flex flex-1 justify-between items-center">
                <h2 className="text-muted-foreground text-lg">
                    Top up your balance and get ready for the next race! Add
                    credits to your account securely and use them to place bets
                    on your favorite snails.
                </h2>
            </div>
        </div>
    );
};

export default PaymentHeader;
