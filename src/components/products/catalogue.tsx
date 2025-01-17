import { ProductCard } from '@/components/products/product-card'
import { createClient } from '@/lib/supabase/server'

export default async function Catalogue() {
  const supabase = await createClient()

  const { data: products } = await supabase.from('products').select('*')
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3 min-h-max">
      {products?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            coverImage={product.images[0]}
            price={product.price}
          />
        )
      })}
    </div>
  )
}
