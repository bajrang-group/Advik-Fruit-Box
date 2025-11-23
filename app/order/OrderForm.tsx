"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function OrderForm() {
  const params = useSearchParams();

  const productName = params.get("name");
  const price = params.get("price");
  const image = params.get("image");

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    pincode: "",
    address: "",
    delivery: "",
    notes: "",
  });

  const [errors, setErrors] = useState<any>({});

  // ⭐ FIXED VALIDATION FUNCTION
  const validate = () => {
    let temp: any = {};

    if (!user.name.trim()) temp.name = "Name is required";

    if (!/^[0-9]{10}$/.test(user.phone))
      temp.phone = "Valid 10-digit phone number required";

    if (!user.email.trim() || !/^\S+@\S+\.\S+$/.test(user.email))
      temp.email = "Valid email required";

    if (!/^[0-9]{6}$/.test(user.pincode))
      temp.pincode = "Valid 6-digit pincode required";

    if (!user.address.trim()) temp.address = "Address is required";

    if (!user.delivery.trim()) temp.delivery = "Please select a delivery date";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // ⭐ FIXED WHATSAPP BUTTON
  const handleOrder = () => {
    if (!validate()) return;

    const whatsappNumber = "919172121327";

    const message =
`📦 *NEW FRUIT BOX ORDER*
──────────────────────────
🍇 *Product:* ${productName}
💰 *Price:* ₹${price}

👤 *Customer Details*
──────────────────────────
• *Name:* ${user.name}
• *Phone:* ${user.phone}
• *Email:* ${user.email}
• *Pincode:* ${user.pincode}
• *Address:* ${user.address}

📅 *Delivery Date:* ${user.delivery}

📝 *Notes:* ${user.notes || "None"}

✔ Sent from *Advik Fruit Box Website*`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="order-page bg-[#fff7f0] min-h-screen py-16 mt-40 relative">
      <div className="absolute h-28 w-full top-0 bg-[#051922] -mt-40"></div>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">

        <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
          Place Your Order
        </h1>

        <div className="flex items-center gap-5 p-4 bg-orange-100 rounded-xl shadow-sm mb-8">
          <img
            src={image!}
            alt={productName!}
            className="w-28 h-28 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold">{productName}</h3>
            <p className="text-2xl font-bold text-orange-600">₹ {price}</p>
          </div>
        </div>

        {/* FORM */}
        <div className="space-y-5">
          {[
            { label: "Full Name", id: "name", type: "text" },
            { label: "Phone Number", id: "phone", type: "text" },
            { label: "Email", id: "email", type: "email" },
            { label: "Pincode", id: "pincode", type: "text" },
            { label: "Delivery Date", id: "delivery", type: "date" },
          ].map((field) => (
            <div key={field.id}>
              <label className="font-semibold text-gray-700">{field.label}</label>

              <input
                type={field.type}
                className="w-full mt-1 p-3 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                value={(user as any)[field.id]}
                onChange={(e) => setUser({ ...user, [field.id]: e.target.value })}
              />

              {errors[field.id] && (
                <p className="text-sm text-red-500 mt-1">{errors[field.id]}</p>
              )}
            </div>
          ))}

          {/* Address */}
          <div>
            <label className="font-semibold text-gray-700">Full Address</label>
            <textarea
              className="w-full mt-1 p-3 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              rows={4}
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
            {errors.address && (
              <p className="text-sm text-red-500 mt-1">{errors.address}</p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="font-semibold text-gray-700">
              Extra Notes (Optional)
            </label>
            <textarea
              className="w-full mt-1 p-3 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              rows={2}
              value={user.notes}
              onChange={(e) =>
                setUser({ ...user, notes: e.target.value })
              }
            />
          </div>
        </div>

        {/* WhatsApp Icon Animation */}
        <style jsx>{`
          @keyframes whatsappBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .wa-bounce {
            animation: whatsappBounce 0.8s infinite;
          }
        `}</style>

        {/* FIXED BUTTON (with onClick) */}
        <button
          onClick={handleOrder}
          className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-xl font-bold shadow-md transition flex items-center justify-center gap-3"
        >
          <i className="fab fa-whatsapp text-2xl wa-bounce"></i>
          Send Order to WhatsApp
        </button>

      </div>
    </div>
  );
}
