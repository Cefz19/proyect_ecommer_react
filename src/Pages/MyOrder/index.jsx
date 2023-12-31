import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layaout'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if(index === 'last') index = context.order?.length - 1


    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-2'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                </Link>
                <h1>MyOrder</h1>
            </div>
            <div className='flex flex-col w-80'>
                {
                    context.order && context.order.length > 0 ? context.order[index].products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                        : <p className='flex items-center justify-center relative text-black'>There aren´t products in order</p>
                }
            </div>
        </Layout>
    )
}

export default MyOrder