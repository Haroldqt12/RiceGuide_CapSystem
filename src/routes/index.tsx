import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Profile from '../pages/auth/profile';
import Dashboard from '../pages/app/Dashboard';
import CropMonitoring from '../pages/app/CropMonitoring';
import WeatherForecast from '../pages/app/WeatherForecast';
import FarmActivities from '../pages/app/FarmActivities';
import Calendar from '../pages/app/Calendar';
import AiRiceAssistant from '../pages/app/AiRiceAssistant';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crop-monitoring" element={<CropMonitoring />} />
        <Route path="/weather-forecast" element={<WeatherForecast />} />
        <Route path="/farm-activities" element={<FarmActivities />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/ai-assistant" element={<AiRiceAssistant />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
