// resources/js/Pages/Create.jsx
import React, { useState } from 'react';
import { router } from '@inertiajs/react' // We need to import this router for making POST request with our form
import Card from 'react-bootstrap/Card';

export default function Test({data}) {
    const [values, setValues] = useState({ // Form fields
        title: "",
        body: ""
    });

    // We will use function below to get
    // values from form inputs
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    // This function will send our form data to
    // store function of PostContoller
    function handleSubmit(e) {
        e.preventDefault()
        router.post('/post', values)
    }

    return (
        <>

            <div className="container mt-5">
                <div className="card px-5">
                    <h2 className="mb-4">React Form with Bootstrap</h2>

                                   <form onSubmit={handleSubmit}>
                        <div className="row">
                        <div className="mb-3 col-3">
                            <label htmlFor="name" className="form-label" >Name:</label>
                            <input
                            maxlength="120"
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"

                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3 col-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                            maxlength="1000"
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"

                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3 col-3">
                            <label htmlFor="address" className="form-label">Address:</label>
                            <textarea
                                className="form-control"
                                id="address"
                                name="address"

                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                            <div className="mb-3 col-3">
                                <label htmlFor="website" className="form-label">Website:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="website"
                                    name="website"

                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3 col-3">
                                <label htmlFor="contact_person_number" className="form-label">Contact person name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contact_person_number"
                                    name="contact_person_number"

                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3 col-3">
                                <label htmlFor="phone_number" className="form-label">Phone:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone_number"
                                    name="phone_number"

                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            <table className="text-center">
  <tr>
    <th className="col-2">Name</th>
    <th className="col-2">Email</th>
    <th className="col-2">Address</th>
    <th className="col-2">Website</th>
    <th className="col-2">Contact Persone Name</th>
    <th className="col-2">Phone</th>
  </tr>
  { data && data.map( (item) => (
     <tr>
        <td className="col-2">{item.name}</td>
        <td className="col-2">{item.email}</td>
        <td className="col-2">{item.address}</td>
        <td className="col-2">{item.website}</td>
        <td className="col-2">{item.contact_person_number}</td>
        <td className="col-2">{item.phone_number}</td>
   </tr>

            )) }

</table>
</div>
        </>
    )
}
