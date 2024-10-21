import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

export default function AddDialog({open,setOpen,setData}){
    return (
        <div>
            <Dialog
                open={open}
                onClose={()=>setOpen(false)}
                PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const {name,city,company,email,phone} = formJson;
                    const new_data = {
                        name: name,
                        address: {
                            city: city
                        },
                        company: {
                            bs:company
                        },
                        email: email,
                        phone: phone
                    }
                    setData((prevData)=>{
                    return [...prevData,new_data]
                    })
                    setOpen(false)
                },
                }}
            >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="city"
                    name="city"
                    label="city"
                    type="city"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="company"
                    name="company"
                    label="company"
                    type="company"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="email"
                    name="email"
                    label="email"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="phone"
                    name="phone"
                    label="phone"
                    type="phone"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>setOpen(false)}>Cancel</Button>
                <Button type="submit" variant="contained">Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}