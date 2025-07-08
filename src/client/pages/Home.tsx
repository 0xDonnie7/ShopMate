import SlideShow from '../components/SlideShow';
import Button from '../components/Button';

const Home = () => {
    return (
        <>
            <SlideShow />
            <div className='mt-8 text-center'>
                <p className="text-3xl font-bold">Explore Our Products</p>
                <div className="mt-8 flex gap-6">
                    {[1, 2, 3].map((_, i) => (
                        <div
                            key={i}
                            className="flex-1 p-6 bg-white h-[20rem] rounded-lg shadow text-center"
                        >
                            <h2 className="text-xl font-bold mb-2">Product {i + 1}</h2>
                            <p className="text-gray-600">This is product {i + 1}</p>
                        </div>
                    ))}

                </div>
                <Button title="Explore products" />

            </div>
        </>
    )
}

export default Home;