import { z } from "zod";

const orderSchema = z.object({
    id: z.number().int().optional(),
    table_number: z.string().optional(),
    notes: z.string().optional(),
    status: z.string().optional(),
    created_at: z.string().datetime().optional(),
  });
  
  const OrderController = {
    async createOrder(req, res) {
      try {
        const data = orderSchema.parse(req.body);
        return res.status(201).json({ message: 'order created', data });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ message: "Validation error", details: error.errors });
        }
        return res.status(500).json({ message: 'Internal server error' });
      }
    },
  };
  export default OrderController;
  