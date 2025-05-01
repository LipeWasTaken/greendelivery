import { useState, useEffect } from 'react';

function OrderForm() {
  const [restaurants, setRestaurants] = useState([]);
  const [form, setForm] = useState({
    client_name: '',
    dish: '',
    restaurant_id: '',
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/restaurants')
      .then((res) => res.json())
      .then(setRestaurants);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(await res.text());
      setStatus('✅ Order placed!');
      setForm({ client_name: '', dish: '', restaurant_id: '' });

      setTimeout(() => setStatus(''), 3000);
    } catch (err) {
      setStatus(`❌ ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-400">Place Your Order</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Your Name</label>
            <input
              type="text"
              name="client_name"
              value={form.client_name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Dish</label>
            <input
              type="text"
              name="dish"
              value={form.dish}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Restaurant</label>
            <select
              name="restaurant_id"
              value={form.restaurant_id}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">Select a restaurant</option>
              {restaurants.map((r) => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition"
          >
            Submit Order
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center text-sm text-green-300 animate-pulse">{status}</p>
        )}
      </div>
    </div>
  );
}

export default OrderForm;
