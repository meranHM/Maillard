import { Button } from "../ui/Button"
import ChevronDownIcon from "../icons/ChevronDownIcon"
import FilterIcon from "../icons/FilterIcon"

const CategoryFilter = () => {
  return (
    <div
        className="flex items-center justify-between"
    >
        <Button
            variant="text"
        >
            مرتب سازی
            <ChevronDownIcon className="w-6 h-6" />
        </Button>
        
        <Button
            variant="outline"
        >
            فیلتر محصول
            <FilterIcon className="w-6 h-6" />
        </Button>
    </div>
  )
}

export default CategoryFilter