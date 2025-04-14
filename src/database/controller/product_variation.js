import { z } from "zod";

const productVariationSchema = z.object({
    id: z.number().int().optional(),
    product_id: z.number({ message: 'Produto inválido' }),
    name: z.string().min(1, { message: 'Nome da variação é obrigatório' }),
    price: z.number().min(0, { message: 'Preço inválido' }),
    stock: z.number().int().min(0, { message: 'Estoque inválido' }),
  });
  
  const ProductVariationController = {
    async createVariation(req, res) {
      try {
        const data = productVariationSchema.parse(req.body);
        return res.status(201).json({ message: 'variation created', data });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ message: "Validation error", details: error.errors });
        }
        return res.status(500).json({ message: 'Internal server error' });
      }
    },
  };
  export default ProductVariationController;