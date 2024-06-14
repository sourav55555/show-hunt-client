import { MoveLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DialogSlide from '../../components/Dialog';
import useUser from '../../hooks/useUser';
import { loadStripe } from '@stripe/stripe-js';
import useAuth from '../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import NavDrawer from '../../components/Navbar/NavDrawer';
import ShowBookings from '../../components/ShowBookings';

const Show = () => {

    // get user 
    const { user } = useAuth();
    const navigate = useNavigate();

    const [event, setEvent] = useState({});
    const { name } = useUser();
    const { id } = useParams();
    const [tickets, setTickets] = useState(1);


    useEffect(() => {

        // get event data 
        fetch(`http://localhost:5000/event/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])

    // set booking data 
    const bookData = {
        eventName: event.name,
        user: name,
        tickets,
        price: event.price == "Free" ? 0 : (parseFloat(event.price) * tickets).toFixed(2)
    }

    console.log(bookData)

    // handle booking functions 
    const handleBook = async () => {

        if (user) {

            if (event.price == "Free") {
                console.log("booking success")
                fetch("http://localhost:5000/book", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify(bookData)
                })
                    .then(res => res.json())
                    .then(() => navigate("/success"))
            }
            else {

                // payment function 
                const stripe = await loadStripe('pk_test_51NEEQ0AmshkWyZ3emV25XGJZuZwUE6pVSGTcsETy8rZxZXPepW6keT32LTPZm3pZhwGAGMlLm8cfy7Q3LcbrjHuX00ulg6UFZL');

                const res = await fetch("http://localhost:5000/create-checkout-session", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify(bookData)
                })

                const session = await res.json();

                console.log(session, "session")

                const result = stripe.redirectToCheckout({
                    sessionId: session.id
                })
                console.log(result, "checkout result")
                if (result.error) {
                    console.log(result.error)
                }
            }

        } else {

            // login redirect 
            toast('Please Login First!',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
            setTimeout(() => {
                navigate("/login");
            }, 30); //
        }


    }

    return (
        <div className='min-h-screen max-w-[1200px] mx-auto relative py-20'>
            <div className='md:hidden block absolute top-8 left-4 z-30 mb-8'>
                <NavDrawer />
            </div>
            <h3 className="font-1 text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-8">Show Details</h3>
            <div className='flex justify-center flex-col-reverse md:flex-row gap-14 mt-8 px-10 font-2'>
                <div className='md:w-[55%] flex items-center justify-center'>
                    <div className='space-y-6 text-xl tracking-wide'>
                        <p className='font-1 font-semibold text-4xl tracking-wider text-purple-700'>{event.name}</p>
                        <p><span className='font-semibold'>Type:</span> {event.category}</p>
                        <p> <span className='font-semibold'>Price:</span> {event.price} $</p>
                        <p> <span className='font-semibold'>Release Date:</span> {event.date}</p>
                        <p> <span className='font-semibold'>Available Tickets:</span> {event.tickets}</p>

                        <ShowBookings eventName={event.name}/>
                        {/* handle payment  */}
                        {
                            user ?
                                <DialogSlide handleBook={handleBook} tickets={tickets} setTickets={setTickets} price={event.price} />
                                :
                                <button onClick={handleBook} className='px-12 py-3 bg-purple-500 rounded-md shadow-md hover:bg-[var(--p)] hover:text-black transition-all duration-300 ease-out text-white text-lg'>
                                    Book Now!
                                </button>
                        }



                    </div>
                </div>
                <div className='md:w-[45%] border py-12 px-10 rounded-xl text-center bg-[var(--s)]'>
                    <img src={event.image} className='mx-auto object-cover max-h-[500px] shadow-lg shadow-slate-700' alt="" />
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Show;