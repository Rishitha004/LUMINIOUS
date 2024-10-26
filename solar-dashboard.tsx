import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Battery, Home, Sun, Zap, BarChart3, Calendar, Settings } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const energyData = [
  { time: '6:00 AM', rate: 6 },
  { time: '9:00 AM', rate: 8 },
  { time: '12:00 PM', rate: 10 },
  { time: '3:00 PM', rate: 12 },
  { time: '6:00 PM', rate: 15 },
  { time: '9:00 PM', rate: 8 },
  { time: '12:00 AM', rate: 5 },
  { time: '3:00 AM', rate: 4 }
];

const consumptionData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 59 },
  { name: 'Mar', value: 55 },
  { name: 'Apr', value: 52 },
  { name: 'May', value: 58 },
  { name: 'Jun', value: 72 },
  { name: 'Jul', value: 80 },
  { name: 'Aug', value: 78 },
  { name: 'Sep', value: 75 },
  { name: 'Oct', value: 65 },
  { name: 'Nov', value: 60 },
  { name: 'Dec', value: 62 }
];

const distributionData = [
  { name: 'Solar', value: 35 },
  { name: 'Grid', value: 25 },
  { name: 'Battery', value: 20 },
  { name: 'Home', value: 20 }
];

const SolarDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Top Navigation */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-navy-700">Solar Management</h1>
        <div className="flex items-center gap-4">
          <Bell className="h-6 w-6 text-gray-500" />
          <Settings className="h-6 w-6 text-gray-500" />
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* System Status Card */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sun className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-500">Current Production</p>
                  <p className="text-2xl font-bold">2.5 kW</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Battery className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Battery Level</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Current Usage</p>
                  <p className="text-2xl font-bold">1.8 kW</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tariff Chart */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Real-time Tariff Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={energyData}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#2563eb" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Energy Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Energy Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={distributionData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#2563eb"
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Consumption */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Energy Consumption Analysis</CardTitle>
            <Tabs defaultValue="month">
              <TabsList>
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={consumptionData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Stats */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-500">Total Savings</h3>
              <p className="text-3xl font-bold">₹987</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-500">Max Monthly Savings</h3>
              <p className="text-3xl font-bold">₹87</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-500">Average Daily Savings</h3>
              <p className="text-3xl font-bold">₹47</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SolarDashboard;
