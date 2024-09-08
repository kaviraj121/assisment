import React, { useState } from 'react';
import { Typography, Button, Card, CardContent } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InboxIcon from '@mui/icons-material/Inbox';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

function PerformanceMetrics() {
    const [selectedButton, setSelectedButton] = useState(null);

    const buttons = [
        { label: 'Delivered', value: 'delivered' },
        { label: 'Out of Delivery', value: 'outOfDelivery' },
        { label: 'In Transit', value: 'inTransit' },
        { label: 'Pending', value: 'pending' },
        { label: 'Exception', value: 'exception' }
    ];

    const handleButtonClick = (value) => {
        setSelectedButton(value);
    };

    // Data for the pie chart
    const pieData = [
        { name: 'Delivered', value: 400 },
        { name: 'Out of Delivery', value: 300 },
        { name: 'In Transit', value: 300 },
        { name: 'Pending', value: 200 },
        { name: 'Exception', value: 100 }
    ];

    // Custom colors for the pie chart
    const COLORS = ['#FFC879', '#FFDDB6', '#956F00', '#E5A500', '#5E4200'];

    return (
        <div style={{ padding: '40px 20px', marginTop: '300px', backgroundColor: '#FFF7EE' }}>
            <Typography
                variant="h4"
                style={{
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontWeight: 700,
                    lineHeight: '32px',
                    letterSpacing: '-0.2px',
                    textAlign: 'left',
                    paddingLeft: '68px'
                }}
            >
                Instant Dive into Your Performance Metrics
            </Typography>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', paddingLeft: '68px' }}>
                <Button variant="contained" style={{ backgroundColor: '#FFF', color: '#000' }}>
                    Lifetime
                </Button>
                <Button variant="contained" style={{ backgroundColor: '#FFF', color: '#000' }}>
                    Last Week
                </Button>
                <Button variant="contained" style={{ backgroundColor: '#FFF', color: '#000' }}>
                    Last Month
                </Button>
                <Button variant="contained" style={{ backgroundColor: '#FFF', color: '#000' }}>
                    Last Year
                </Button>
                <Button variant="contained" style={{ backgroundColor: '#FFF', color: '#000' }}>
                    Customize Time Line <CalendarTodayIcon style={{ marginLeft: '8px' }} />
                </Button>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', paddingLeft: '68px' }}>
                <Card style={{ width: '448px', height: '368px' }}>
                    <CardContent>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h5">Shipment Updates</Typography>
                            <Typography variant="h6" style={{ fontWeight: 500 }}>Total Orders: 394</Typography>
                        </div>

                        {/* Scrollable Button Group - Positioned Above the Pie Chart */}
                        <div
                            style={{
                                display: 'flex',
                                gap: '10px',
                                marginTop: '20px',
                                overflowX: 'auto',
                                whiteSpace: 'nowrap', // Ensures the buttons stay in a single line
                                scrollbarWidth: 'none', // Hide scrollbar for Firefox
                                msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
                                WebkitOverflowScrolling: 'touch', // Smooth scrolling for mobile devices
                            }}
                        >
                            {buttons.map((button) => (
                                <Button
                                    key={button.value}
                                    variant="contained"
                                    onClick={() => handleButtonClick(button.value)}
                                    style={{
                                        backgroundColor: selectedButton === button.value ? '#FFF1E3' : '#F1F1F1',
                                        color: '#000',
                                        flexShrink: 0, // Prevents buttons from shrinking
                                        whiteSpace: 'nowrap', // Prevents button text from wrapping
                                    }}
                                >
                                    {button.label}
                                </Button>
                            ))}
                        </div>

                        {/* Pie Chart - Positioned Below the Buttons */}
                        <div style={{ height: '200px', marginTop: '20px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Legend Below the Pie Chart */}
                        <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '10px', height: '10px', backgroundColor: '#FFC879', marginRight: '5px' }}></div>
                                <Typography variant="body2">Delivered</Typography>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '10px', height: '10px', backgroundColor: '#FFDDB6', marginRight: '5px' }}></div>
                                <Typography variant="body2">Out of Delivery</Typography>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '10px', height: '10px', backgroundColor: '#956F00', marginRight: '5px' }}></div>
                                <Typography variant="body2">In Transit</Typography>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '10px', height: '10px', backgroundColor: '#E5A500', marginRight: '5px' }}></div>
                                <Typography variant="body2">Pending</Typography>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '10px', height: '10px', backgroundColor: '#5E4200', marginRight: '5px' }}></div>
                                <Typography variant="body2">Exception</Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card style={{ width: '216px', height: '368px', backgroundColor: '#956F00' }}>
                    <CardContent>
                        <Typography variant="h5" style={{ color: '#FFF', textAlign: 'left' }}>Star Facts about your orders!!!</Typography>
                        <Typography variant="body2" style={{ marginTop: '20px', color: '#FFF', textAlign: 'left' }}>
                            There are 8 shipments that have been in out for delivery for more than 3 days.
                        </Typography>
                        <Typography variant="body2" style={{ marginTop: '10px', color: '#FFF', textAlign: 'left' }}>
                            There are 5 shipments in exception right now.
                        </Typography>
                        <Typography variant="body2" style={{ marginTop: '10px', color: '#FFF', textAlign: 'left' }}>
                            The maximum chargebacks are from Miami.
                        </Typography>
                        <Button
  variant="contained"
  style={{
    backgroundColor: '#FFF',
    color: '#000',
    marginTop: '20px',
    textAlign: 'left',
    width: '150px',
    height: '26px', // Increased height for better text visibility
    fontSize: '9px',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  Check Orders Page
</Button>

                    </CardContent>
                </Card>

                <Card style={{ width: '448px', height: '368px' }}>
                    <CardContent>
                        <Typography variant="h5" style={{ textAlign: 'left' }}>Tracking Page Views Vs Orders</Typography>
                        <Typography variant="body2" style={{ marginTop: '20px', textAlign: 'left' }}>
                            Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.
                        </Typography>

                        {/* New Cards Inside the Third Card */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '20px' }}>
                            <Card style={{ width: '415px', height: '104px', backgroundColor: '#FFEBD5' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px' }}>
                                    <Typography variant="body2" style={{ fontSize: '12px', textAlign: 'left' }}>Order</Typography>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="body2" style={{ fontSize: '36px', fontWeight: 'bold' }}>80</Typography>
                                        <InboxIcon style={{ fontSize: '36px' }} />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card style={{ width: '415px', height: '104px', backgroundColor: '#FFC879' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px' }}>
                                    <Typography variant="body2" style={{ fontSize: '12px', textAlign: 'left' }}>Page View</Typography>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="body2" style={{ fontSize: '36px', fontWeight: 'bold' }}>44</Typography>
                                        <VisibilityIcon style={{ fontSize: '36px' }} />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default PerformanceMetrics;
