import React, { useEffect } from 'react';
// import { useClient } from '@hook/use-client';
//import bannerImage from 'banner.png';
import { useState } from 'react';
import axios from "axios";
import { Button, Modal, Form, Dropdown } from 'react-bootstrap';
import AppButton from './AppButton';



const Banner = () => {
    //const [count,setCount] = React.useState(0); 
    const [show, setShow] = useState(false);
    const [showRate, setShowRate] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isLoading, setIsLoading] = useState(false);


    const [checkedItems, setCheckedItems] = useState([]);
    const [allPincodes, setAllPincodes] = useState([]);

    const [name, setName] = useState("");
    const [pin, setPin] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pickupAddress, setPickupAddress] = useState("");
    const [landMark, setLandMark] = useState("");
    const [selectedPinCode, setSelectedPinCode] = useState("");
    const [date, setDate] = useState("");
    const [rates,setRates] = useState([]);


    const checkBoxValues = [
        {
            label: 'Paper',
            value: 'Paper',
        },
        {
            label: 'Metal',
            value: 'Metal',
        },
        {
            label: 'Electronics',
            value: 'Electronics',
        },
        {
            label: 'Plastic',
            value: 'Plastic',
        },
        {
            label: 'Glass',
            value: 'Glass',
        },
        {
            label: 'Corrugated Box',
            value: 'Corrugated Box',
        },

    ]

    useEffect(() => {
        if(setShowRate === true){
            console.log('kkkk')
            setRates([]);
        }
    },[setShowRate])

    const getPincode = async () => {
        const { data } = await axios.get(
            'https://talented-lamb-pleat.cyclic.app/admin/registration-api/pincode',
        );
        setAllPincodes(data.data);
    };

    const handleChange = (event) => {
        const { value } = event.target;

        setCheckedItems((checkedItems) => {
            if (checkedItems.includes(value)) {
                return checkedItems.filter((item) => item !== value);
            } else {
                return [...checkedItems, value];
            }
        });
    };


    useEffect(() => {
        getPincode()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const _data = await axios.post("https://talented-lamb-pleat.cyclic.app/admin/registration-api/guest", {
            name: name,
            email: email,
            phone: phone,
            address: pickupAddress,
            landMark: landMark,
            pinCode: selectedPinCode,
            category: "From Web",
            pickupDate: date,
            subcategory: checkedItems,
        })
        if (_data.status === 200) {
            setIsLoading(false);
            handleClose();
            alert("Your pickup added successfully!")
        }
    }

    const handlePriceDetails = async () => {
        setIsLoading(true);
        var data = JSON.stringify({
            pincode: `${selectedPinCode}`,
        });

        var config = {
            method: 'post',
            url: 'https://talented-lamb-pleat.cyclic.app/admin/registration-api/listAllRatebyPincode',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        await axios(config)
            .then(function (response) {
                setIsLoading(false);
                setRates(response.data.data);

            })
            .catch(function (error) {
                setIsLoading(false);
                console.log(error);
            });
    };

    console.log(rates,'rates')

    return (
        <>
            <div className="jumbotron jumbotron-fluid position-relative" style={{ backgroundSize: 'cover' }}>
                <div className="position-absolute top-0 w-100 d-flex justify-content-between" style={{padding:"10px"}}>
                    <img src="/logo.png" width={100} class="img-fluid"/>
                    <div className='d-flex gap-2 mt-3'>
                        <Button style={{background:"green",border:0}} onClick={handleShow}>
                            Sell Your Scrap
                        </Button>
                        <Button class="btn btn-outline-success" style={{color:"white"}} onClick={() => setShowRate(true)}>
                            Rate List
                        </Button>
                    </div>
                    {/* <Button variant="primary" onClick={handleShow}>
                        Open Modal
                    </Button> */}
                </div>
                <div className="position-absolute banner_text top-4 left-0 p-3 bannerTextLine">
                    <h1 className="display-4">Get Best Price for Your <span style={{color:"green",fontWeight:800}}>Recyclables!</span></h1>
                    <p className="lead">We offer hassle-free scrapbooking and offer best price along with lucrative offers from other channel partners.</p>
                </div>
                <img src="/banner.png" className="banner-image" />
            </div>

            <Modal centered modal-lg show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Schedule as Guest</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h1>Login to our App to avail more offers</h1>
                                <AppButton />
                            </div>
                            <div className='col-md-6'>
                                <h4>Select Categories</h4>
                                <Form>
                                    <Form.Group style={{ display: "flex", padding: "5px", flexWrap: "wrap" }}>
                                        {checkBoxValues.map((item) =>
                                            <div style={{
                                                border: "1px solid green",
                                                padding: "5px",
                                                marginRight: "10px",
                                                borderRadius: "10px",
                                                marginTop: "5px"
                                            }}>
                                                <Form.Check
                                                    type="checkbox"
                                                    label={item.label}
                                                    value={item.value}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        )}
                                    </Form.Group>
                                    <Form.Group className='mt-3' controlId="exampleForm.ControlInput1">
                                        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />
                                    </Form.Group>
                                    <Form.Group className='mt-3 mb-3' controlId="exampleForm.ControlInput1">

                                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">

                                        <Form.Control onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Enter Phone" />
                                    </Form.Group>
                                    <Form.Group className='mt-3 mb-3' controlId="exampleForm.ControlInput1">

                                        <Form.Control onChange={(e) => setPickupAddress(e.target.value)} type="text" placeholder="Enter Address" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" onChange={(e) => setLandMark(e.target.value)} placeholder="Enter Landmark" />
                                    </Form.Group>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <Form.Group className='mt-3 mb-3' controlId="exampleForm.SelectCustom">
                                                <Form.Select onChange={(e) => setSelectedPinCode(e.target.value)}>
                                                    <option value="">Select Pincode</option>
                                                    {allPincodes.map((item =>
                                                        <option value={item}>{item}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-6 mt-4 mb-3'>
                                            <input type="date" onChange={(e) => setDate(e.target.value)} />
                                        </div>
                                    </div>
                                    {isLoading ? <p>Loading....</p> : 
                                        <Button className='btn btn-success' type="submit" onClick={handleSubmit}>Submit</Button>
                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal centered modal-lg show={showRate} onHide={() => setShowRate(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Rate List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <div className='row' style={{alignItems: "center"}}>
                            <div className='col-md-8'>
                            <Form.Group className='mt-3 mb-3' controlId="exampleForm.SelectCustom">
                                <Form.Select onChange={(e) => setSelectedPinCode(e.target.value)}>
                                    <option value="">Select Pincode</option>
                                    {allPincodes.map((item =>
                                        <option value={item}>{item}</option>
                                        ))}
                                </Form.Select>
                            </Form.Group>
                            </div>
                            <div className='col-md-4'>
                                {isLoading ? <p>loading...</p> :
                                    <Button className='btn btn-success' onClick={handlePriceDetails}>Search</Button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='rates'>
                    {rates.map((item) => 
                            <p><strong>{item.category}</strong> - {item.value}</p>
                            )}
                    </div>

                </Modal.Body>
            </Modal>


        </>
    );
}

export default Banner;