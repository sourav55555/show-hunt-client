import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

/* function SimpleDialog(props) {
    const { open, onClose } = props;

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Set backup account</DialogTitle>
            <List sx={{ pt: 0 }}>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Tickets</th>
                    </tr>
                    {
                        booking.map(data => <tr></tr>)
                    }
                </table>
            </List>
        </Dialog>
    );
} */

export default function ShowBookings({ eventName }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //   get booking data
    const [booking, setBooking] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:5000/bookings/${eventName}`)
            .then(res => res.json())
            .then(data => setBooking(data.bookedUsers));
    }, [eventName])

    return (
        <div>
            <button className='underline text-cyan-600 text-base' onClick={handleClickOpen}>
                See Booked Tickets
            </button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Booking Data</DialogTitle>

                {/* show bookings in a table v */}
                <List sx={{ pt: 0, pb:3 }}>
                    <table className='w-[300px] text-center space-y-4'>
                        <tr>
                            <th>Name</th>
                            <th>Tickets</th>
                        </tr>
                        {
                            booking.map((data, index) => <tr key={index}>
                                <td>{data.user}</td>
                                <td>{data.tickets}</td>
                            </tr>)
                        }
                    </table>
                </List>
            </Dialog>

        </div>
    );
}
