import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from '../../components/admin/ProductDetail';
import OrderDetail from '../../components/admin/OrderDetail';
import UserDetail from '../../components/admin/UserDetail';

const AdminDashboard = () => {
    // State for keeping track of active tab index
    const [activeTab, setActiveTab] = useState(0);

    // Function to handle tab change
    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    //user
    const user = JSON.parse(localStorage.getItem('users'));
    // State for total orders and total users
    const [totalOrders, setTotalOrders] = useState(10);
    const [totalUsers, setTotalUsers] = useState(10);

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left Sidebar */}
            <div className="bg-gradient-to-b from-blue-900 to-pink-600 md:w-1/4 p-5 h-full shadow-xl">
                <h1 className="text-center font-bold text-white mb-5">Admin Dashboard</h1>
                {/* Admin Name, Email, and Profile Picture */}
                <div className="flex flex-col items-center mb-5">
                    <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="Profile" className="w-20 h-20 rounded-full mb-3" />
                    <h1 className="text-lg text-white mb-1"><span className="font-bold">Name :</span> {user?.name}</h1>
                    <h1 className="text-lg text-white"><span className="font-bold">Email :</span> {user?.email}</h1>
                    <h1 className="text-lg text-white"><span className="font-bold">Date :</span> {user?.date}</h1>
                    <h1 className="text-lg text-white"><span className="font-bold">Role :</span> {user?.role}</h1>
                </div>

                {/* Total Products */}
                <div className="border bg-pink-50 hover:bg-pink-100 border-pink-100 p-4 rounded-xl mb-3 cursor-pointer" onClick={() => handleTabChange(0)}>
                  <span className="text-pink-600 font-semibold">All Products</span> {/* Total Products Content */}
                </div>

                {/* Total Order */}
                <div className="border bg-pink-50 hover:bg-pink-100 border-pink-100 p-4 rounded-xl mb-3 cursor-pointer" onClick={() => handleTabChange(1)}>
                  <span className="text-pink-600 font-semibold">All Orders</span> {/* Total Order Content */}
                </div>

                {/* Total User */}
                <div className="border bg-pink-50 hover:bg-pink-100 border-pink-100 p-4 rounded-xl mb-3 cursor-pointer" onClick={() => handleTabChange(2)}>
                  <span className="text-pink-600 font-semibold">All Users</span> {/* Total User Content */}
                </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-3/4 p-5">
                <h1 className="text-center text-2xl font-bold text-pink-600 mb-5"> Details</h1>
                {/* Admin Details Content */}
                <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                    
                    <TabPanel>
                        <ProductDetail />
                    </TabPanel>
                    <TabPanel>
                        <OrderDetail />
                    </TabPanel>
                    <TabPanel>
                        <UserDetail />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}

export default AdminDashboard;
