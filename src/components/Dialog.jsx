import React, { useState, forwardRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Minus, Plus } from 'lucide-react';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSlide({ handleBook, tickets, setTickets, price }) {
    const [open, setOpen] = useState(false);

    const normalizedPrice = (price && typeof price === 'string') ? price.trim().toLowerCase() : price;



    const handleChange = (e) => {
        const value = e.target.value;
        if (value >= 1) {
            setTickets(parseInt(value));
        }
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <button onClick={handleClickOpen} className='px-12 py-3 bg-purple-500 rounded-md shadow-md hover:bg-[var(--p)] hover:text-black transition-all duration-300 ease-out text-white text-lg'>
                Book Now!
            </button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent sx={{ width: "320px" }}>
                    <div>
                        <p className='text-lg font-semibold'>Set ticket quantity</p>
                        <div className='flex items-center justify-center py-4'>
                            <button onClick={() => { tickets > 1 && setTickets(tickets - 1) }}
                                className='p-1 border'
                            >
                                <Minus />
                            </button>

                            <input type="number" name="" id="" className='py-1 px-3 border w-[100px]' onChange={handleChange} value={tickets} />
                            <button onClick={() => setTickets(tickets + 1)}
                                className='p-1 border'
                            ><Plus /></button>

                        </div>
                        <p className='font-semibold'>
                        Total: {
                            normalizedPrice == 'free' ? 0 : (parseFloat(price) * tickets).toFixed(2)} $
                        </p>
                        <button className='bg-green-600 text-white shadow-md px-4 py-2 rounded-lg mt-3'
                            onClick={handleBook}
                        >Pay Now</button>

                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
