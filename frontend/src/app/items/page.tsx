// app/cart/page.tsx
"use client";

import { useCartStore } from "@/stores/itemStore";
import { useNotificationStore } from "@/stores/notificationStore";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const notifications = useNotificationStore((state) => state.notifications);

  const addSampleItem = () => {
    addItem({
      id: crypto.randomUUID(),
      name: "Pizza",
      price: 12,
      quantity: 1,
    });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {/* Notification Display */}
      {notifications.length > 0 && (
        <div className="mb-6 space-y-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded ${notification.type === "success" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}
            >
              {notification.message}
            </div>
          ))}
        </div>
      )}

      <button onClick={addSampleItem} className="mb-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Add Pizza ($12)
      </button>

      <div className="space-y-4">
        {items.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  ${item.price} × {item.quantity}
                </p>
              </div>
              <button onClick={() => removeItem(item.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 text-2xl font-bold">Total: ${getTotalPrice().toFixed(2)}</div>
    </div>
  );
}
