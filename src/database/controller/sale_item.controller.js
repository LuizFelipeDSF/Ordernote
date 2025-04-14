import { z } from "zod";
const saleItemSchema = z.object({
    id: z.number().int().optional(),
    sale_id: z.number({ message: 'Venda inválida' }),
    product_id: z.number({ message: 'Produto inválido' }),
    variation_id: z.number({ message: 'Variação inválida' }),
    quantity: z.number().int().min(1, { message: 'Quantidade inválida' }),
    unit_price: z.number().min(0, { message: 'Preço unitário inválido' }),
    subtotal: z.number().min(0, { message: 'Subtotal inválido' }),
  });
  
  const SaleItemController = {
    async createSaleItem(req, res) {
      try {
        const data = saleItemSchema.parse(req.body);
        return res.status(201).json({ message: 'sale item created', data });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ message: "Validation error", details: error.errors });
        }
        return res.status(500).json({ message: 'Internal server error' });
      }
    },
  };
  export default SaleItemController;