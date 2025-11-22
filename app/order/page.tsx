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

  // ⭐ VALIDATION FUNCTION
  const validate = () => {
    let temp: any = {};

    if (!user.name.trim()) temp.name = "Name is required";
    if (!user.phone.trim() || user.phone.length !== 10)
      temp.phone = "Valid 10-digit phone required";
    if (!user.email.trim() || !user.email.includes("@"))
      temp.email = "Valid email required";
    if (!user.pincode.trim() || user.pincode.length !== 6)
      temp.pincode = "Valid 6-digit pincode required";
    if (!user.address.trim()) temp.address = "Address is required";
    if (!user.delivery.trim()) temp.delivery = "Select delivery date";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleOrder = () => {
    if (!validate()) return;

    const whatsappNumber = "+919172121327"; // YOUR NUMBER

    const message = `
📦 *NEW FRUIT BOX ORDER*
-----------------------------------

🍇 *Product:* ${productName}
💰 *Price:* ₹${price}

👤 *Customer Details*
-----------------------------------
• *Name:* ${user.name}
• *Phone:* ${user.phone}
• *Email:* ${user.email}
• *Pincode:* ${user.pincode}
• *Address:* ${user.address}

📅 *Preferred Delivery:* ${user.delivery}

📝 *Extra Notes:* ${user.notes || "None"}

✔ Sent via Advik Fruit Box Website
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#fff7f0] min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">

        {/* HEADER */}
        <h2 className="text-4xl font-extrabold text-center mb-6 text-orange-600">
          Place Your Order
        </h2>

        {/* PRODUCT SUMMARY */}
        <div className="flex gap-5 mb-8 bg-orange-50 p-4 rounded-xl shadow-sm">
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
        <div className="space-y-4">
          {/* INPUT FIELD COMPONENT */}
          {[
            { label: "Full Name", id: "name", type: "text" },
            { label: "Phone Number", id: "phone", type: "number" },
            { label: "Email", id: "email", type: "email" },
            { label: "Pincode", id: "pincode", type: "number" },
            { label: "Delivery Date", id: "delivery", type: "date" },
          ].map((field) => (
            <div key={field.id}>
              <label className="font-semibold">{field.label}</label>
              <input
                type={field.type}
                className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-orange-500 outline-none"
                value={(user as any)[field.id]}
                onChange={(e) =>
                  setUser({ ...user, [field.id]: e.target.value })
                }
              />
              {errors[field.id] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>
              )}
            </div>
          ))}

          {/* ADDRESS */}
          <div>
            <label className="font-semibold">Full Address</label>
            <textarea
              className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-orange-500"
              rows={4}
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* NOTES */}
          <div>
            <label className="font-semibold">Extra Notes (Optional)</label>
            <textarea
              className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-orange-500"
              rows={2}
              placeholder="Any special instructions..."
              value={user.notes}
              onChange={(e) => setUser({ ...user, notes: e.target.value })}
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          onClick={handleOrder}
          className="mt-8 w-full bg-orange-600 text-white py-4 rounded-xl text-xl font-bold shadow-md hover:bg-orange-700 transition"
        >
          Send Order to WhatsApp
        </button>

      </div>
    </div>
  );
}
