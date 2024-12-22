import { useState } from "react"
function ContactUs() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    function handleOnClick(){
        setIsSubmit(true);
    }
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input type="text" onChange={(e)=> setName(e.target.value)} className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" fdprocessedid="ppzn0r" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Contact Number</span>
                <input type="text" onChange={(e)=> setNumber(e.target.value)} className="form-control" placeholder="Number" aria-label="Number" aria-describedby="basic-addon1" fdprocessedid="ppzn0r" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="text" onChange={(e)=> setEmail(e.target.value)} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" fdprocessedid="ppzn0r" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Subject</span>
                <input type="text" onChange={(e)=> setSubject(e.target.value)} className="form-control" placeholder="Subject" aria-label="Subject" aria-describedby="basic-addon1" fdprocessedid="ppzn0r" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Description</span>
                <input type="text" onChange={(e)=> setDescription(e.target.value)} className="form-control" placeholder="Description" aria-label="Description" aria-describedby="basic-addon1" fdprocessedid="ppzn0r" />
            </div>
            <a className="btn btn-primary" href="#" onClick={handleOnClick}>Submit</a>
            {
                isSubmit ? (
                    <div>
                                            <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name: {name}</span>
                    
                </div>
    
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Contact Number: {number}</span>
                </div>
    
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Email: {email}</span>
                </div>
    
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Subject: {subject}</span>
                </div>
    
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Description: {description}</span>
                </div>

                    </div>

                ) : (
                    <p>No data to show</p>
                )
            }

        </>
    )
}
export default ContactUs