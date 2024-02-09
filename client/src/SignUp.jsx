
const SignUp = () => {
    const handleSignup = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const email = event.target.email.value;
        try {
            const response = await fetch('http://localhost:5000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email }),
            });

            const data = await response.json();
            // Handle the server response as needed
            console.log(data);
        } catch (error) {
            // Handle fetch or other errors
            console.error('Error:', error);
        }
    };
    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-96">
                <label className="block mb-4" htmlFor="username">
                    Username:
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="text"
                        id="username"
                        name="username"
                        required
                    />
                </label>

                <label className="block mb-4" htmlFor="email">
                    Email:
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </label>

                <label className="block mb-4" htmlFor="password">
                    Password:
                    <input
                        className="w-full px-3 py-2 border rounded"
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </label>

                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    type="submit"

                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;