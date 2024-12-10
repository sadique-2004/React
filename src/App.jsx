import './App.css'
import { useForm } from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    // API call simulation
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("Submitting the form", data);
  }

  return (
    <div className="bg-white w-full mx-[200px] px-[100px] py-[70px] ">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-950">One Code with Sadique</h1>
        <p className="text-center text-gray-600 mb-6">react-hook-form</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-gray-700">First Name:</label>
            <input 
              {...register('firstName', {
                // required: true,
                minLength: { value: 2, message: 'Min Len at least 3' },
                required: "First name is required"
              })} 
              className="border border-gray-300 rounded-md p-2 bg-gray-500 w-full"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-gray-700">Last Name:</label>
            <input 
              {...register('lastName', {
                // required: true,
                maxLength: { value: 15, message: 'Max len is 15'},
                required: "Last name is required"
              })}

              className="border border-gray-300 rounded-md p-2 bg-gray-500 w-full"
            />
            {errors.lastName && <p className='text-red-500 text-sm mt-1'> {errors.lastName.message} </p>}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-gray-700">Email:</label>
            <input 
              {...register('email', {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                  message: "Please enter a valid email address."
                },
                required: "Email is required"
              })} 
              className="border border-gray-300 rounded-md p-2 bg-gray-500 w-full"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-2 rounded-md text-white font-medium ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

        </form>
      </div>
    </div>
  )
}

export default App
