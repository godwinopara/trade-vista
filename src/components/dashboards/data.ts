export const tradesData = [
  {
    id: 1,
    tradeType: "sell",
    tradeOption: "CRYPTO",
    pairs: "BTC/USDT",
    entry: "100$",
    lotSize: "1.0",
    takeProfit: 1.1934,
    stopLoss: 0.9065,
    profit: 0,
    status: "pending",
  },
  {
    id: 2,
    tradeType: "sell",
    tradeOption: "CRYPTO",
    pairs: "PEPE/USDT",
    entry: "100$",
    lotSize: "1.0",
    takeProfit: 1.1934,
    stopLoss: 0.9065,
    profit: 0,
    status: "success",
  },
  {
    id: 3,
    tradeType: "Buy",
    tradeOption: "CRYPTO",
    pairs: "BTC/SOL",
    entry: "100$",
    lotSize: "1.0",
    takeProfit: 1.1934,
    stopLoss: 0.9065,
    profit: 0,
    status: "success",
  },
];

export const forexPairs = [
  "AUD/CAD",
  "AUD/CHF",
  "AUD/JPY",
  "AUD/NZD",
  "AUD/USD",
  "EUR/AUD",
  "GBP/AUD",
  "AUD/CAD",
  "CAD/CHF",
  "CAD/JPY",
  "EUR/CAD",
  "GBP/CAD",
  "NZD/CAD",
  "USD/CAD",
  "AUD/CHF",
  "CAD/CHF",
  "CHF/JPY",
  "EUR/CHF",
  "GBP/CHF",
  "NZD/CHF",
  "USD/CHF",
  "EUR/AUD",
  "EUR/CAD",
  "EUR/CHF",
  "EUR/GBP",
  "EUR/JPY",
  "EUR/NZD",
  "EUR/USD",
  "GBP/AUD",
  "GBP/CAD",
  "GBP/CHF",
  "GBP/JPY",
  "GBP/NZD",
  "GBP/USD",
  "EUR/GBP",
  "NZD/CAD",
  "NZD/CHF",
  "NZD/JPY",
  "NDZ/USD",
  "AUD/NZD",
  "EUR/NZD",
  "AUD/JPY",
  "CAD/JPY",
  "CHF/JPY",
  "EUR/JPY",
  "GBP/JPY",
  "NZD/JPY",
  "USD/JPY",
  "AUD/USD",
  "EUR/USD",
  "GBP/USD",
  "NZD/USD",
  "USD/CAD",
  "USD/CHF",
  "USD/JPY",
];

export const cryptoPairs = [
  "ETH/USD",
  "BTC/USD",
  "ETH/USDT",
  "BTC/USDT",
  "USD/BTC",
  "USD/ETH",
  "USD/USDT",
  "USD/MATIC",
  "USD/ADA",
  "DAI/ETH",
  "DAI/USDC",
  "USDT/BTC",
  "USDT/ETH",
  "USDT/DOGE",
  "USDT/BCH",
  "USDT/LTC",
  "ETH/BTC",
  "ETH/BCH",
  "ETH/LINK",
  "ETH/ADA",
  "ETH/DOGE",
  "BTC/ETH",
  "BTC/DOGE",
  "BTC/LTC",
  "BTC/ADA",
  "BTC/XLM",
  "DAI/wETH",
];

export const usersData = [
  {
    widthdrawal: [
      {
        amount: "500",
        date: "Sat Dec 30 2023",
        method: "Bitcoin",
        status: "Completed",
      },
    ],
    tradingSession: [
      {
        entry: "300",
        lotSize: "5LS",
        pairs: "USD/BTC",
        profit: "0",
        status: "pending",
        stopLoss: "2",
        takeProfit: "1",
        tradeOption: "BUY",
        tradeType: "CRYPTO",
        result: "Pending",
        date: new Date().toDateString(),
      },
      {
        entry: "500",
        lotSize: "2LS",
        pairs: "EUR/AUD",
        profit: "0",
        status: "pending",
        stopLoss: "1.0013",
        takeProfit: "1.100",
        tradeOption: "SELL",
        tradeType: "FOREX",
        result: "Pending",
        date: new Date().toDateString(),
      },
    ],
    depositHistory: [
      {
        amount: 2000,
        date: "Sat Dec 30 2023",
        method: "Bitcoin",
        status: "pending",
        totalBalance: "0.000",
        totalBonus: "0.000",
        totalProfit: "0.000",
      },
    ],
    user: {
      country: "Australia",
      email: "kelsmith@gmail.com",
      firstname: "Kel",
      lastname: "Smith",
      username: "Kels",
      gender: "male",
      mobile: "23399945589",
      password: process.env.REACT_APP_PASSWORD,
      status: "active",
      joinedDate: new Date().toDateString(),
    },
    subscription: {
      plan: "SILVER",
      amount: "10000",
      duration: "7days",
      date: new Date().toDateString(),
    },
    verification: {
      document: "document",
      status: "Pending",
    },
    totalBalance: "0.000",
    totalProfit: "0.000",
    totalBonus: "0.000",
  },
  {
    widthdrawal: [
      {
        amount: "500",
        date: "Sat Dec 30 2023",
        method: "Bitcoin",
        status: "pending",
      },
    ],
    tradingSession: [
      {
        entry: "300",
        lotSize: "5LS",
        pairs: "USD/BTC",
        profit: "0",
        status: "pending",
        stopLoss: "1.0013",
        takeProfit: "1.100",
        tradeOption: "BUY",
        tradeType: "CRYPTO",
        result: "Pending",
        date: new Date().toDateString(),
      },
      {
        entry: "500",
        lotSize: "2LS",
        pairs: "EUR/AUD",
        profit: "0",
        status: "Completed",
        stopLoss: "1.0013",
        takeProfit: "1.100",
        tradeOption: "SELL",
        tradeType: "FOREX",
        result: "Win",
        date: new Date().toDateString(),
      },
    ],
    depositHistory: [
      {
        amount: 2000,
        date: "Sat Dec 30 2023",
        method: "Bitcoin",
        status: "Completed",
      },
    ],
    user: {
      country: "Australia",
      email: "franklinsmith@gmail.com",
      firstname: "Franklin",
      lastname: "Smith",
      username: "Franklin",
      gender: "Male",
      mobile: "23399945589",
      password: process.env.REACT_APP_PASSWORD,
      status: "active",
      joinedDate: new Date().toDateString(),
    },
    subscription: {
      plan: "SILVER",
      amount: "10000",
      duration: "7days",
      date: new Date().toDateString(),
    },
    verification: {
      document: "document",
      status: "Verified",
    },
    totalBalance: "0.000",
    totalProfit: "0.000",
    totalBonus: "0.000",
  },
];

export const depositData = [
  {
    method: "Bitcoin Address",
    amount: 199,
    status: "Completed",
    date: "Mon, 18-Dec-2023",
  },
];

export const withdrawalData = [
  {
    method: "Bitcoin Address",
    amount: 199,
    status: "Completed",
    date: "Mon, 18-Dec-2023",
  },
];

export const usersInfo = [
  {
    userId: "1",
    firstname: "John",
    lastname: "Doe",
    username: "jonnycrane",
    mobile: "08162435269",
    password: 'ttftf',
    country: "Nigeria",
    status: "Active",
    joinedDate: "30th Apr, 2024",
    gender: "male",
    email: "john@gmail.com",
    totalBalance: "100",
    totalProfit: "400",
    totalBonus: "350",
  },
  {
    userId: "2",
    firstname: "Johndef",
    lastname: "Doeeey",
    username: "jonnycranexvr",
    mobile: "08162435269",
    password: "sdgygydsg",
    country: "Nigeria",
    status: "Active",
    joinedDate: "30th Apr, 2024",
    gender: "male",
    email: "johndef@gmail.com",
    totalBalance: "1000",
    totalProfit: "4,500",
    totalBonus: "350",
  },
  {
    userId: "3",
    firstname: "mary",
    lastname: "jane",
    username: "mj235",
    mobile: "08162435269",
    password: "svsdsdggsd",
    country: "Nigeria",
    status: "upgrade",
    joinedDate: "30th Apr, 2024",
    gender: "male",
    email: "mary@gmail.com",
    totalBalance: "1000",
    totalProfit: "4,500",
    totalBonus: "350",
  },
  {
    userId: "4",
    firstname: "mary",
    lastname: "jane",
    username: "mj235",
    mobile: "08162435269",
    password: "svsdsdggsd",
    country: "Nigeria",
    status: "upgrade",
    joinedDate: "30th Apr, 2024",
    gender: "male",
    email: "mary@gmail.com",
    totalBalance: "1000",
    totalProfit: "4,500",
    totalBonus: "350",
  },
  {
    userId: "5",
    firstname: "mary",
    lastname: "jane",
    username: "mj235",
    mobile: "08162435269",
    password: "svsdsdggsd",
    country: "Nigeria",
    status: "upgrade",
    joinedDate: "30th Apr, 2024",
    gender: "male",
    email: "mary@gmail.com",
    totalBalance: "1000",
    totalProfit: "4,500",
    totalBonus: "350",
  },
  {
    userId: "6",
    firstname: "mary",
    lastname: "jane",
    username: "mj235",
    mobile: "08162435269",
    password: "svsdsdggsd",
    country: "Nigeria",
    status: "upgrade",
    joinedDate: "30th Apr, 2024",
    gender: "male",
    email: "mary@gmail.com",
    totalBalance: "1000",
    totalProfit: "4,500",
    totalBonus: "350",
  },
  {
    userId: "7",
    firstname: "mary",
    lastname: "jane",
    username: "mj235",
    mobile: "08162435269",
    password: "svsdsdggsd",
    country: "Nigeria",
    status: "upgrade",
    joinedDate: "30th Apr, 2024",
    gender: "male",
    email: "mary@gmail.com",
    totalBalance: "1000",
    totalProfit: "4,500",
    totalBonus: "350",
  },
];

export const history: any = [
  {
    userId: "1",
    date: "30th Apr, 2024",
    method: "Bitcoin Address",
    status: "Completed",
    fullname: "John Doe",
    id: "1",
    screenshot:
      "https://plus.unsplash.com/premium_photo-1681400690940-8eff232a8f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3B1JTIwY2hpcHxlbnwwfHwwfHx8MA%3D%3D",
    amount: "1500",
    tradeType: "Forex",
    tradeOption: "Sell",
    pairs: "AUD/USD",
    lotSize: "3",
    entry: "500",
    stopLoss: "1",
    takeProfit: "1.001",
    profit: "600",
  },
  {
    userId: "1",
    date: "20th Apr, 2024",
    method: "Bitcoin Address",
    status: "Pending",
    fullname: "Johnyy Doese",
    id: "2",
    screenshot:
      "https://plus.unsplash.com/premium_photo-1681400690940-8eff232a8f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3B1JTIwY2hpcHxlbnwwfHwwfHx8MA%3D%3D",
    amount: "1500",
    tradeType: "Crypto",
    tradeOption: "Buy",
    pairs: "PEPE/USDT",
    lotSize: "10",
    entry: "400",
    stopLoss: "2",
    takeProfit: "2.05",
    profit: "3000",
  },
];

export const subscriptions = [
	{
		userId: "1",
		date: "20th Apr, 2024",
		plan: "Silver Plan",
		status: "Pending",
		fullname: "Johnyy Doese",
		id: "2",
		amount: "1,500",
		duration: "7days",
		
	  },
    {
      userId: "2",
      date: "20th Apr, 2024",
      plan: "Silver Plan",
      status: "Pending",
      fullname: "Johnyy Doese",
      id: "2",
      amount: "1,500",
      duration: "7days",
      
      },
]

export const verifications = [
	{
		userId: "1",
		date: "20th Apr, 2024",
		document: "Silver Plan",
		status: "Pending",
		fullname: "Johnyy Doese",
		id: "2",
		
	  },
    {
      userId: "2",
      date: "20th Apr, 2024",
      document: "Silver Plan",
      status: "Verified",
      fullname: "Johnyy Doese",
      id: "2",
      
      },
]