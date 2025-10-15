import CategoryCard from "./CategoryCard"

interface CategoryGridProps {
  products: {
    id: string
    title: string
    description: string
    imgSrc: string
  }[]
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ products }) => {
  return (
    <div
      className="grid grid-cols-3 gap-4"
    >
      {products.map((product) => (

          <CategoryCard
            key={product.id}
            imgSrc={product.imgSrc}
            title={product.title}
            description={product.description}
          />
      ))}
    </div>
  )
}

export default CategoryGrid