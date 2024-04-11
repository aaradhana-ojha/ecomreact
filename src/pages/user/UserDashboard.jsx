import Layout from "../../components/layout/Layout";

const products = [
    {
        id: 1,
        name: 'Nike Air Force 1 07 LV8',
        imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
        href: '#',
        price: '₹61,999',
        color: 'Orange',
        imageAlt: 'Nike Air Force 1 07 LV8',
        quantity: 1,
    },
];

const UserDashboard = () => {
    // user
    const user = JSON.parse(localStorage.getItem('users'));
    return (
        <Layout>
            <div className="container mx-auto px-4 py-5 lg:py-8">
                {/* Top */}
                <div className="top bg-gradient-to-br from-blue-200 to-pink-200 py-5 rounded-xl border border-pink-100 flex justify-center items-center">
                    <div className="flex flex-col items-center space-y-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" className="h-24 w-24 rounded-full bg-white p-1" />
                        <div className="text-center">
                            <h1 className="text-lg font-bold text-white">Name: {user?.name}</h1> {/*name*/}
                            <h1 className="text-lg font-bold text-white">Email: {user?.email}</h1> {/*email*/}
                            <h1 className="text-lg font-bold text-white">Date: {user?.date}</h1> {/*Date*/}
                            <h1 className="text-lg font-bold text-white">Role: {user?.role}</h1> {/*Role*/}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="bottom mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                    <h2 className="text-2xl lg:text-3xl font-bold text-center mt-8 mb-5">Order Details</h2>

                    <div className="flex flex-col md:flex-row mt-5 overflow-hidden rounded-xl border border-pink-100">
                        <div className="w-full md:max-w-xs border-r border-pink-100 bg-pink-50">
                            <div className="p-8">
                                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1 gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Order Id</p>
                                        <p className="text-sm font-medium text-gray-900">#74557994327</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Date</p>
                                        <p className="text-sm font-medium text-gray-900">4 March, 2023</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Total Amount</p>
                                        <p className="text-sm font-medium text-gray-900">₹84,499</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Order Status</p>
                                        <p className="text-sm font-medium text-green-800">Confirmed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="p-8">
                                <ul className="divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <li key={product.id} className="flex justify-between items-center py-7">
                                            <div className="flex items-center">
                                                <img src={product.imageSrc} alt={product.imageAlt} className="h-20 w-20 rounded-lg border border-gray-200 object-contain mr-5" />
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900">{product.name}</p>
                                                    <p className="text-sm font-medium text-gray-500">{product.color}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-bold text-gray-900">{product.price}</p>
                                                <p className="text-sm font-medium text-gray-500">x {product.quantity}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default UserDashboard;
