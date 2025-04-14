import { z } from "zod";
const productSchema = z.object({
    id: z.number().int().optional(),
    group_id: z.number({ message: 'Grupo inválido' }),
    name: z.string().min(1, { message: 'Nome é obrigatório' }),
    description: z.string().optional(),
    image_url: z.string().url({ message: 'URL inválida' }).optional(),
    is_active: z.boolean().optional(),
  });
  
  const ProductController = {
    async createProduct(req, res) {
      try {
        const data = productSchema.parse(req.body);
        return res.status(201).json({ message: 'product created', data });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ message: "Validation error", details: error.errors });
        }
        return res.status(500).json({ message: 'Internal server error' });
      }
    },
  };
  export default ProductController;