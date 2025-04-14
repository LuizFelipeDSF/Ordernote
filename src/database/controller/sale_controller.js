import { z } from "zod";
const saleSchema = z.object({
    id: z.number().int().optional(),
    order_id: z.number({ message: 'Pedido inválido' }),
    customer_id: z.number({ message: 'Cliente inválido' }),
    user_id: z.number({ message: 'Usuário inválido' }),
    total_amount: z.number().min(0, { message: 'Valor inválido' }),
    payment_method: z.string(),
    status: z.string().optional(),
    created_at: z.string().datetime().optional(),
  });
  
  const SaleController = {
    async createSale(req, res) {
      try {
        const data = saleSchema.parse(req.body);
        return res.status(201).json({ message: 'sale created', data });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ message: "Validation error", details: error.errors });
        }
        return res.status(500).json({ message: 'Internal server error' });
      }
    },
  };
  export default SaleController;

  