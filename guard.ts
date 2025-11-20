function processOrderGuard(order: Order | null): string {
  if (!order) return "Error: Order is missing!";
  if (!order.items || order.items.length === 0) return "Error: No items in the order!";
  if (!order.isPaid) return "Error: Order must be paid before processing.";

  console.log("Packing items...");
  console.log("Shipping order to:", order.address);
  return "Order processed successfully!";
}