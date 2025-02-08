import React from "react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css"; // Import du fichier CSS du Dashboard

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Utilisateurs", value: 1250, color: "bg-blue-500", icon: "👤" },
    { title: "Événements", value: 340, color: "bg-green-500", icon: "🎉" },
    { title: "Revenu", value: "1.2M CFA", color: "bg-yellow-500", icon: "💰" },
  ];

  const data = [
    { name: "Jan", participants: 400 },
    { name: "Fév", participants: 600 },
    { name: "Mar", participants: 700 },
    { name: "Avr", participants: 500 },
    { name: "Mai", participants: 800 },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>

        {/* Affichage des statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card ${stat.color} text-white flex items-center`}>
              <span className="icon">{stat.icon}</span>
              <div>
                <h2 className="title">{stat.title}</h2>
                <p className="value">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Graphique des participants par mois */}
        <div className="chart-container">
          <h2 className="chart-title">Participants par Mois</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#4A5568" />
              <YAxis stroke="#4A5568" />
              <Tooltip />
              <Bar dataKey="participants" fill="#3182CE" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
