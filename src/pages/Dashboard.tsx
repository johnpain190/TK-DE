
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#eceae8' }}>
      <Header />
      
      {/* Main Dashboard Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 shadow-sm rounded-lg">
            <h1 className="text-3xl font-normal mb-6 text-gray-800">
              Willkommen in Meine TK
            </h1>
            <p className="text-gray-600 text-lg">
              Sie sind erfolgreich angemeldet. Hier können Sie Ihre Gesundheitsdaten verwalten und TK-Services nutzen.
            </p>
            
            {/* Placeholder for future content */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-500 text-center">
                Dashboard-Inhalte werden hier angezeigt
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
