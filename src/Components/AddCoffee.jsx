import React from 'react';
import Swal from 'sweetalert2';


const AddCoffee = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target; 
        const formdata =new FormData(form) 
        const newCoffee = Object.fromEntries(formdata.entries())    
        // const name = form.name.value;
        // const chef = form.chef.value;
        // const supplier = form.supplier.value;
        // const taste = form.taste.value;
        // const category = form.category.value;
        // const details = form.details.value;
        // const photo = form.photo.value; 
        // const newCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(newCoffee);


        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        } )
        .then(res =>res.json())
        .then(data =>{
            if(data.insertedId){
                console.log('Added successfully');
                Swal.fire({
                title: "Drag me!",
                 icon: "success",
                 draggable: true
    
    });
            }
            
        })

    }

    return (
         <div className="p-6 md:p-24">
      <div className="p-6 md:p-14 min-h-screen text-center bg-[#f3f2ed] space-y-4 rounded-lg shadow-md">
        <h1 className="text-3xl md:text-6xl font-bold pt-4 mb-2 text-gray-700">
          Add New Coffee
        </h1>
        <p className="px-4 md:px-16 text-center text-gray-500 mb-6 text-sm md:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>

        <form onSubmit={handleAddCoffee} >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset w-full">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
                className="input w-full"
                placeholder="Enter coffee name"
                required
              />
            </fieldset>

            <fieldset className="fieldset w-full">
              <label className="label">Chef</label>
              <input
                type="text"
                name="chef"
                // value={formData.chef}
                // onChange={handleChange}
                className="input w-full"
                placeholder="Enter coffee chef"
                required
              />
            </fieldset>

            <fieldset className="fieldset w-full">
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                // value={formData.supplier}
                // onChange={handleChange}
                className="input w-full"
                placeholder="Enter coffee supplier"
                required
              />
            </fieldset>

            <fieldset className="fieldset w-full">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                // value={formData.taste}
                // onChange={handleChange}
                className="input w-full"
                placeholder="Enter coffee taste"
                required
              />
            </fieldset>

            <fieldset className="fieldset w-full">
              <label className="label">Category</label>
              <input
                type="text"
                name="category"
                // value={formData.category}
                // onChange={handleChange}
                className="input w-full"
                placeholder="Enter coffee category"
                required
              />
            </fieldset>

            <fieldset className="fieldset w-full">
              <label className="label">Details</label>
              <input
                type="text"
                name="details"
                // value={formData.details}
                // onChange={handleChange}
                className="input w-full"
                placeholder="Enter coffee details"
                required
              />
            </fieldset>

            <fieldset className="fieldset w-full md:col-span-2">
              <label className="label">Photo</label>
              <input
                type="url"
                name="photo"
                // value={formData.photo}
                // onChange={handleChange}
                className="input w-full"
                placeholder="Enter photo URL"
                required
              />
            </fieldset>
          </div>

          <fieldset className="fieldset mt-6 w-full">
            <input
              type="submit"
              value="Add"
              className="btn bg-gray-700 text-white w-full hover:bg-gray-800 transition"
            />
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default AddCoffee;