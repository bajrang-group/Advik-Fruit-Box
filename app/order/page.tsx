import { Suspense } from "react";
import OrderForm from "./OrderForm";

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <OrderForm />
    </Suspense>
  );
}
