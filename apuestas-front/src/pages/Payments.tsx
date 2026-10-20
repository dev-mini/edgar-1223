import PaymentBody from '@/features/payments/PaymentBody';
import PaymentHeader from '@/features/payments/PaymentHeader';

const Payments = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <PaymentHeader />
            <PaymentBody />
        </div>
    );
};

export default Payments;
