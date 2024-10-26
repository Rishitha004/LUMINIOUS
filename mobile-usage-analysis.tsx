import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ChevronLeft, 
  Zap, 
  DollarSign, 
  Clock, 
  ArrowUp, 
  ArrowDown,
  Sun,
  Battery,
  Menu
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const UsageAnalysis = () => {
  const [timeframe, setTimeframe] = useState('day');

  const hourlyData = [
    { time: '12 AM', usage: 0.8, cost: 4 },
    { time: '3 AM', usage: 0.5, cost: 3 },
    { time: '6 AM', usage: 1.2, cost: 6 },
    { time: '9 AM', usage: 2.1, cost: 9 },
    { time: '12 PM', usage: 2.8, cost: 12 },
    { time: '3 PM', usage: 2.5, cost: 15 },
    { time: '6 PM', usage: 3.2, cost: 14 },
    { time: '9 PM', usage: 1.8, cost: 8 }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="bg-white px-4 py-2 flex justify-between items-center">
        <span className="text-sm font-medium">9:41</span>
        <div className="flex items-center gap-2">
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Top Navigation */}
      <div className="bg-white px-4 py-3 flex items-center border-b">
        <ChevronLeft className="w-6 h-6 text-gray-600" />
        <h1 className="text-lg font-semibold ml-4">Usage Analysis</h1>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        {/* Time Period Selector */}
        <div className="px-4 py-3">
          <Tabs defaultValue="day" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Current Usage Stats */}
        <div className="px-4 grid grid-cols-2 gap-4 mb-4">
          <Card className="bg-blue-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600">Current Usage</span>
              </div>
              <p className="text-xl font-bold">2.5 kW</p>
              <span className="text-xs text-green-600 flex items-center gap-1">
                <ArrowDown className="w-3 h-3" />
                12% vs yesterday
              </span>
            </CardContent>
          </Card>
          <Card className="bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-600">Current Rate</span>
              </div>
              <p className="text-xl font-bold">₹8.5/kWh</p>
              <span className="text-xs text-red-600 flex items-center gap-1">
                <ArrowUp className="w-3 h-3" />
                Peak hours
              </span>
            </CardContent>
          </Card>
        </div>

        {/* Usage Graph */}
        <Card className="mx-4 mb-4">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-4">Today's Usage Pattern</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyData}>
                  <XAxis dataKey="time" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="usage" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Usage Breakdown */}
        <div className="px-4 mb-4">
          <h3 className="font-semibold mb-3">Usage Breakdown</h3>
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Appliances</p>
                    <p className="text-sm text-gray-500">1.2 kWh</p>
                  </div>
                </div>
                <span className="text-sm font-medium">48%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Sun className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium">HVAC</p>
                    <p className="text-sm text-gray-500">0.8 kWh</p>
                  </div>
                </div>
                <span className="text-sm font-medium">32%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Other</p>
                    <p className="text-sm text-gray-500">0.5 kWh</p>
                  </div>
                </div>
                <span className="text-sm font-medium">20%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <div className="px-4 mb-4">
          <h3 className="font-semibold mb-3">Smart Recommendations</h3>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Shift Heavy Usage</p>
                    <p className="text-sm text-gray-600">Consider running your washing machine after 10 PM to save ₹15 on your next bill</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <Zap className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">Peak Alert</p>
                    <p className="text-sm text-gray-600">High tariff period approaching (2 PM - 6 PM). Consider using stored battery power.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t px-4 py-3">
        <div className="grid grid-cols-4 gap-4">
          <button className="flex flex-col items-center">
            <Sun className="w-6 h-6 text-gray-400" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <Zap className="w-6 h-6 text-blue-600" />
            <span className="text-xs mt-1">Usage</span>
          </button>
          <button className="flex flex-col items-center">
            <Battery className="w-6 h-6 text-gray-400" />
            <span className="text-xs mt-1">Battery</span>
          </button>
          <button className="flex flex-col items-center">
            <Menu className="w-6 h-6 text-gray-400" />
            <span className="text-xs mt-1">More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsageAnalysis;
