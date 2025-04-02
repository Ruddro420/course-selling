import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

export default function Checkout() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [bkashNumber, setBkashNumber] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("free");

    // Load context
    const { getCourseApiData } = useContext(DataContext);

    useEffect(() => {
        if (getCourseApiData?.data) {
            const findCourse = getCourseApiData.data.find(item => item.id === parseInt(id));
            setData(findCourse);
        }
    }, [id, getCourseApiData]);

    const handlePayment = () => {
        if (paymentMethod === "bkash" && (!bkashNumber || !transactionId)) {
            alert("Please fill in Bkash details.");
        } else {
            alert("Payment Successful!");
        }
    };

    return (
        <section className="bg-white py-8 antialiased md:py-16">
            <form className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mt-6 lg:flex lg:items-start lg:gap-12 xl:gap-16 border-gray-200 shadow-lg rounded py-16 p-8">
                    <div className="min-w-0 flex-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900">Order Details</h2>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <input type="text" placeholder="Your Name" className="block w-full rounded-lg border p-2.5" required />
                                <input type="text" placeholder="Your Address" className="block w-full rounded-lg border p-2.5" required />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">Payment</h3>
                            <div className="rounded-lg border bg-gray-50 p-4">
                                <input type="radio" name="payment-method" value="free" checked={paymentMethod === "free"} onChange={() => setPaymentMethod("free")} />
                                <label className="ml-2">Free Course</label>
                            </div>
                            <div className="rounded-lg border bg-gray-50 p-4">
                                <input type="radio" name="payment-method" value="bkash" checked={paymentMethod === "bkash"} onChange={() => setPaymentMethod("bkash")} />
                                <label className="ml-2">Bkash</label>
                                {paymentMethod === "bkash" && (
                                    <div className="mt-4 space-y-4">
                                        <input type="text" placeholder="Bkash Number" value={bkashNumber} onChange={(e) => setBkashNumber(e.target.value)} className="block w-full rounded-md border p-2" />
                                        <input type="text" placeholder="Transaction ID" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} className="block w-full rounded-md border p-2" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-full space-y-6 lg:mt-0 lg:max-w-xs xl:max-w-md">
                        <div className="rounded-lg border bg-gray-50 p-4">
                            <img src={data?.banner} alt="" className="h-24 rounded-md" />
                            <div className="ml-4">
                                <h3 className="font-medium">{data?.course_name}</h3>
                                <p className="text-gray-500">{data?.short_bio}</p>
                            </div>
                        </div>
                        <div className="flow-root">
                            <dl className="flex justify-between py-3">
                                <dt className="text-base font-bold">Total</dt>
                                <dd className="text-base font-bold">৳ {data?.course_price} TAKA</dd>
                            </dl>
                        </div>
                        <button type="button" onClick={handlePayment} className="w-full bg-primary-600 p-2 text-white rounded-lg">Proceed to Payment</button>
                    </div>
                </div>
            </form>
        </section>
    );
}
