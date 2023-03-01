
import { StarIcon } from '@heroicons/react/20/solid'

const plots = [
  {
    id: 1,
    name: 'Front of the Lake view',
    price: '10',
    description: "This land is attached to the lake and is 10 40 meters from the lake",
    width: 20,
    height: 40,
    imageSrc: './assets/pack_1/1.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Back of the Lake view',
    price: '5',
    description: "This land is attached to the lake and is 10 40 meters from the lake",
    reviewCount: 18,
    width: 20,
    height: 40,
    imageSrc: './assets/pack_1/2.jpg',
    imageAlt: 'TODO',
    href: '#',
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PlotsPage() {
  return (
    <div className="bg-white pt-8 h-[100vh]">
      
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">

      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-base font-semibold leading-6 text-gray-900">Plots</h1>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Uthunthu is a property rental ornanisation. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
          Fringilla egestas justo massa purus sagittis malesuada.
        </p>
      </div>

        <div className="-mx-px grid grid-cols-1 border-l border-gray-200 sm:mx-0 md:grid-cols-2 lg:grid-cols-2">
          {plots.map((product) => (
            <div key={product.id} className="group relative border-r border-b border-gray-200 p-4 sm:p-6">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="pt-10 pb-4 text-start">
                <h3 className="text-sm font-medium text-gray-900">
                  <span className="text-xl uppercase">
                    <span aria-hidden="true" className="absolute inset-0 cursor-pointer" />
                    {product.name}
                  </span>
                </h3>
                <div className="mt-1 flex text-gray-500 flex-col items-start">
                  {product.description}
                </div>
                <div className="mt-3 flex flex-col items-start">
                  <p className="mt-1  text-gray-100 bg-gray-700 p-2 rounded">{product.width} meters by {product.height} meters</p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-600">MK {product.price} Milion</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
