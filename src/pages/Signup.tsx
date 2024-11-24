import React, { useState } from 'react';
import { signup } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import background from '../assets/background.png';

const Signup: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [hasMiles] = useState(false); // Removido setHasMiles ya que no se usa
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [nationality, setNationality] = useState('');
    const [idType, setIdType] = useState('');
    const [passengerFrequentNumber, setPassengerFrequentNumber] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');
    
        try {
            const result = await signup({
                username,
                password,
                email,
                phone,
                name,
                lastName,
                hasMiles,
                gender,
                birthDate,
                nationality,
                idType,
                passengerFrequentNumber,
            });
    
            if (!result) {
                setError('Failed to register');
                return;
            }
    
            setMessage(result);
            navigate('/login');
        } catch (error) {
            setError(`An error occurred: ${error instanceof Error ? error.message : 'Please try again.'}`);
        }
    };
    
    return (
        <div className="min-h-screen w-full relative">
            {/* Background */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Content */}
            <div className="relative min-h-screen w-full flex items-center justify-center px-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-full max-w-2xl p-8 md:p-12 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Join SkyConnect</h1>
                        <p className="text-blue-100">Start your journey with us</p>
                    </div>

                    {/* Alerts */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
                            <p className="text-red-200 text-center text-sm">{error}</p>
                        </div>
                    )}
                    {message && (
                        <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl">
                            <p className="text-green-200 text-center text-sm">{message}</p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Left column */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Username</label>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Birth Date</label>
                                    <input
                                        type="date"
                                        value={birthDate}
                                        onChange={(e) => setBirthDate(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Phone</label>
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Gender</label>
                                    <select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    >
                                        <option className="text-black bg-white" value="">Select Gender</option>
                                        <option className="text-black bg-white" value="MASCULINE">Masculine</option>
                                        <option className="text-black bg-white" value="FEMENINNE">Feminine</option>
                                        <option className="text-black bg-white" value="OTHER">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Nationality</label>
                                    <input
                                        type="text"
                                        value={nationality}
                                        onChange={(e) => setNationality(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">ID Type</label>
                                    <select
                                        value={idType}
                                        onChange={(e) => setIdType(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    >
                                        <option className="text-black bg-white" value="">Select ID Type</option>
                                        <option className="text-black bg-white" value="NATIONAL_DOCUMENT">National ID</option>
                                        <option className="text-black bg-white" value="PASSPORT">Passport</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Frequent Flyer Number</label>
                                    <input
                                        type="text"
                                        value={passengerFrequentNumber}
                                        onChange={(e) => setPassengerFrequentNumber(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
