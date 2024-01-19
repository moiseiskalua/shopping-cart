import StoreItem from '../components/StoreItem';
import storeItems from '../data/items.json';

export default function Store() {
    return (
      <section className='flex flex-col gap-4'>
        <h1 className='text-2xl font-semibold'>Store</h1>
        <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 gap-4'>
          {storeItems.map( item => (
            <div
              key={item.id}
              className='rounded-md shadow-md bg-white'>
              <StoreItem {...item}/>
            </div>
          ))}
        </div>
      </section>
    )
  }
  