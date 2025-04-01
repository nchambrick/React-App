import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can replace this with sending data to a backend or email service
        alert(`Thank you, ${formData.name}! We'll be in touch soon.`);
        setFormData({ name: "", email: "", message: "" }); // Reset form
    };

    return (
        <div className="mt-4">
            <h4>Contact Us</h4>
            <p>If you have any questions, feel free to reach out!</p>

            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea 
                        name="message" 
                        className="form-control" 
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
