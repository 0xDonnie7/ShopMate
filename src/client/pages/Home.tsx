import SlideShow from '../components/SlideShow';
import Button from '../components/Button';

const Home = () => {
    return (
        <>
            <SlideShow />
            <div className='my-8 text-center'>
                <p className="font-bold text-3xl">Explore Our Products</p>
                <div className="mt-8 flex gap-6">
                    {[1, 2, 3].map((_, i) => (
                        <div
                            key={i}
                            className="flex-1 p-6 bg-white h-[20rem] rounded-lg shadow text-center"
                        >
                            <h2 className="font-bold mb-2">Product {i + 1}</h2>
                            <p className="text-gray-600">This is product {i + 1}</p>
                        </div>
                    ))}

                </div>
                <Button title="Explore products" className="mt-4" />
            </div>
            <hr />
            <section className='mt-8'>
                <div className='mt-8 text-center'>
                    <h1 className='font-bold text-3xl'>Featured Products</h1>
                    <div className="mt-8 flex gap-6 ">
                        {[1, 2, 3].map((_, i) => (
                            <div
                                key={i}
                                className="flex-1 p-6 bg-white h-[20rem] rounded-lg shadow text-center hover:shadow-gray-700 transition-shadow duration-500"
                            >
                                <h2 className="font-bold mb-2">Product {i + 1}</h2>
                                <p className="text-gray-600">This is product {i + 1}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;