'use client';

import {
  ArrowUp,
  CalendarDays,
  ChevronDown,
  Download,
  Globe,
  Percent,
  Store,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import salesData from '@/lib/sales-data.json';

const { chartData, totalSalesData } = salesData;

const iconMap: { [key: string]: React.ElementType } = {
  Store,
  Globe,
  Percent,
};

const kpiData = salesData.kpiData.map(kpi => ({
  ...kpi,
  icon: iconMap[kpi.iconName as keyof typeof iconMap],
}));
  
  const chartConfig = {
    visit: {
      label: 'Visit',
      color: 'hsl(var(--primary))',
    },
    order: {
      label: 'Order',
      color: 'hsl(var(--accent))',
    },
  } satisfies ChartConfig;

export default function SalesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-2xl font-bold">Sales</h1>
        <Button variant="outline">
          <CalendarDays className="mr-2 h-4 w-4" />
          <span>Today</span>
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {kpiData.map((kpi, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p
                className={`text-xs flex items-center ${
                  kpi.change > 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {kpi.change > 0 ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
                {Math.abs(kpi.change)}%
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly closed sales</CardTitle>
          <div className="text-3xl font-bold">$54,283.28</div>
        </CardHeader>
        <CardContent>
          <Progress value={75} className="h-2" />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>Bad</span>
            <span>Average</span>
            <span>Good</span>
            <span>Excellent</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardDescription>Sales</CardDescription>
              <CardTitle className="text-3xl font-bold">$73,683.32</CardTitle>
              <p className="text-xs text-green-500 flex items-center"><ArrowUp className="h-3 w-3 mr-1" /> 0.2% more than the previous 30 days.</p>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>07 Mar 26 / 13 Mar 26</span>
                    <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                </Button>
            </div>
          </CardHeader>
          <CardContent className="pl-2 h-[350px]">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ResponsiveContainer>
                <LineChart data={chartData} accessibilityLayer margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip
                    cursor={true}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Line dataKey="visit" type="monotone" stroke="var(--color-visit)" strokeWidth={2} dot={false} />
                  <Line dataKey="order" type="monotone" stroke="var(--color-order)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-4 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Sales</CardTitle>
             <Button variant="outline" size="sm">
                <CalendarDays className="h-4 w-4 mr-2" />
                <span>07 Mar 26 / 13 Mar 26</span>
                <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-4">
            <div className='text-5xl font-bold'>
                <span className='text-muted-foreground text-3xl align-super'>$</span>
                {totalSalesData.total}
            </div>
            <div className="w-full space-y-4">
                {totalSalesData.breakdown.map((item, index) => (
                    <div key={index} className='flex items-center'>
                        <div className={`w-2 h-2 rounded-full ${item.color} mr-2`}></div>
                        <span className='text-muted-foreground'>{item.name}</span>
                        <span className='ml-auto font-bold'>{item.value}</span>
                        <span className={`ml-2 text-xs flex items-center ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                           <ArrowUp className="h-3 w-3 mr-1" /> {item.change}%
                        </span>
                    </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
