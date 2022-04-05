import { useState } from "react";

export default function Form ( props ) {
    const [formData, setFormData] = useState({
        searchTerm: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.movieSearch(formData.searchTerm);
      };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="searchTerm"
                onChange={handleChange}
                value={formData.searchTerm}
                />
                
                <input type='submit' value='search for movie' />
            </form>
        </section>
    )
}