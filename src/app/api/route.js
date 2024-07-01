

export async function GET() {
  const questions = [
    {
      id: 1,
      question: "What does LTE stand for in the context of telecommunications?",
      options: [
        "A. Long-Term Evolution",
        "B. Light Transfer Efficiency",
        "C. Local Telephone Exchange",
        "D. Logical Transmission Environment",
      ],
    },
    {
      id: 2,
      question:
        "Which of the following is not a commonly used frequency band in mobile telecommunications?",
      options: ["A. 2Ghz", "B. 5Ghz", "C. 10Ghz", "D. 20Ghz"],
    },
    {
      id: 3,
      question:
        "What is the primary purpose of a Base Transceiver Station (BTS) in a cellular network?",
      options: [
        "A. To process billing information",
        "B. To provide connectivity between mobile devices and the core network",
        "C. To store user data",
        "D. To manage network security",
      ],
    },
    {
      id: 4,
      question: "In telecommunications, what does the acronym VoIP stand for?",
      options: [
        "A. Voice over Internet Protocol",
        "B. Virtual Operator Interface Protocol",
        "C. Virtual Operator Interface Protocol",
        "D. Virtual Operator Interconnection Protocol",
      ],
    },
    {
      id: 5,
      question:
        "Which technology is used to enhance the coverage and capacity of cellular networks indoors?",
      options: [
        "A. MIMO (Multiple Input Multiple Output)",
        "B. GPS (Global Positioning System)",
        "C. NFC (Near Field Communication)",
        "D. VPN (Virtual Private Network)",
      ],
    },
    {
      id: 6,
      question:
        "What is the purpose of a Network Operations Center (NOC) in a telecom environment?",
      options: [
        "A. To manage customer complaints",
        "B. To monitor and control network elements",
        "C. To develop new telecommunication technologies",
        "D. To conduct Market Research",
      ],
    },
    {
      id: 7,
      question:
        "Which protocol is commonly used for signaling and control in traditional telephony networks?",
      options: [
        "A. TCP/IP",
        "B. SIP (Session Initiation Protocol)",
        "C. HTTP (Hypertext Transfer Protocol)",
        "D. SNMP (Simple Network Management Protocol)",
      ],
    },
    {
      id: 8,
      question:
        "What is the function of a Subscriber Identity Module (SIM) card in a mobile device?",
      options: [
        "A. To store contact information",
        "B. To authenticate the subscriber to the network",
        "C. To connect to Bluetooth devices",
        "D. To process payment transactions",
      ],
    },
    {
      id: 9,
      question: "What does FTTH refer to in the context of broadband networks?",
      options: [
        "A. Fiber-to-the-Home",
        "B. Fast Transient Transfer Hub",
        "C. Fixed Telephony Throughput",
        "D. Flexible Telecom Technology Hub",
      ],
    },
    {
      id: 10,
      question:
        "Which technology is used for wireless communication over short distances between devices like smartphones, laptops, and smartwatches?",
      options: ["A. Bluetooth", "B. WiMAX", "C. DSL", "D. Ethernet"],
    },
    {
      id: 11,
      question: "What is the primary function of an embedded system?",
      options: [
        "A. Run complex Algorithms",
        "B. Perform specific tasks within a larger system",
        "C. Connect to the internet",
        "D. Provide user interfaces",
      ],
    },
    {
      id: 12,
      question:
        "Which of the following is NOT a characteristic of embedded systems?",
      options: [
        "A. Limited resources",
        "B. Real-time operation",
        "C. High-speed processing",
        "D. Fixed functionality",
      ],
    },
    {
      id: 13,
      question:
        "Which programming languages are commonly used in embedded systems development?",
      options: [
        "A. Java and Python",
        "B. C and assembly",
        "C. Ruby and JavaScript",
        "D. PHP and Swift",
      ],
    },
    {
      id: 14,
      question:
        "What is the purpose of a microcontroller in an embedded system?",
      options: [
        "A. Store large amounts of data",
        "B. Execute instructions and control peripherals",
        "C. Connect to external networks",
        "D. Display graphical user interfaces",
      ],
    },
    {
      id: 15,
      question: "What is firmware in the context of embedded systems?",
      options: [
        "A. Hardware components",
        "B. Software that controls hardware",
        "C. Networking protocols",
        "D. User interfaces",
      ],
    },
    {
      id: 16,
      question:
        "Which of the following is an example of a real-time embedded system?",
      options: [
        "A. Smartphone",
        "B. Digital camera",
        "C. Industrial control system",
        "D. Laptop computer",
      ],
    },
    {
      id: 17,
      question: "What does the term RTOS stand for in embedded systems?",
      options: [
        "A. Real-Time Operating System",
        "B. Random Task Organization System",
        "C. Real-Time Optimization System",
        "D. Robotic Task Observation System",
      ],
    },
    {
      id: 18,
      question:
        "Which of the following is a common communication protocol used in embedded systems?",
      options: ["A. Bluetooth", "B. HTTP", "C. FTP", "D. HTML"],
    },
    {
      id: 19,
      question: "What is the purpose of an interrupt in embedded systems?",
      options: [
        "A. To slow down processing",
        "B. To handle external events promptly",
        "C. To increase power consumption",
        "D. To display error messages",
      ],
    },
    {
      id: 20,
      question:
        "Which stage of embedded system development involves writing code to control hardware?",
      options: ["A. Design", "B. Development", "C. Testing", "D. Deployment"],
    },
    {
      id: 21,
      question:
        "What is the primary purpose of robotics in industrial automation?",
      options: [
        "A. Enhancing human creativity",
        "B. Reducing human labor",
        "C. Providing entertainment",
        "D. Increasing environmental pollution",
      ],
    },
    {
      id: 22,
      question:
        "Which programming languages are commonly used for programming robotic systems?",
      options: [
        "A. HTML and CSS",
        "B. Python and Java",
        "C. C++ and MATLAB",
        "D. PHP and Ruby",
      ],
    },
    {
      id: 23,
      question: "What is the function of sensors in robotic systems?",
      options: [
        "A. Control Actuators",
        "B. Collect environmental data",
        "C. Generate power",
        "D. None of the above",
      ],
    },
    {
      id: 24,
      question:
        "Which type of robot is designed to mimic human-like movements and interactions?",
      options: [
        "A. Industrial robot",
        "B. Mobile robot",
        "C. Humanoid robot",
        "D. Collaborative robot",
      ],
    },
    {
      id: 25,
      question: "What is the purpose of machine vision in robotics?",
      options: [
        "A. Enhancing robot aesthetics",
        "B. Enabling robots to see and interpret the environment",
        "C. Controlling robot speed",
        "D. Improving robot communication",
      ],
    },
    {
      id: 26,
      question: "What does the term ROS stand for in robotics?",
      options: [
        "A. Robotic Operating System",
        "B. Digital camera",
        "C. Industrial control system",
        "D. Laptop computer",
      ],
    },
    {
      id: 27,
      question:
        "Which component of a robotic system is responsible for controlling motor movements?",
      options: ["A. Actuator", "B. Sensor", "C. Microcontroller", "D. Battery"],
    },
    {
      id: 28,
      question:
        "What is the advantage of using collaborative robots (cobots) in manufacturing environments?",
      options: [
        "A. Lower cost",
        "B. Higher speed",
        "C. Increased safety for human-robot interaction",
        "D. Longer Lifespan",
      ],
    },
    {
      id: 29,
      question:
        "What is the role of artificial intelligence (AI) in advanced robotics?",
      options: [
        "A. Controlling robot movements",
        "B. Enabling robots to learn and make decisions",
        "C. Powering robot sensors",
        "D. Providing robot energy",
      ],
    },
    {
      id: 30,
      question: "What is the function of a gripper in a robotic arm?",
      options: [
        "A. Generate power",
        "B. Collect data",
        "C. Manipulate objects",
        "D. Provide wireless communication",
      ],
    },
    {
      id: 31,
      question: "What is the primary responsibility of a network engineer?",
      options: [
        "A. Designing user interfaces",
        "B. Developing mobile applications",
        "C. Managing and maintaining computer networks",
        "D. Creating graphic designs",
      ],
    },
    {
      id: 32,
      question:
        "Which device is used to connect multiple computers within a local area network (LAN)?",
      options: ["A. Router", "B. Modem", "C. Switch", "D. Firewall"],
    },
    {
      id: 33,
      question:
        "Which network topology connects each device to a central hub or switch?",
      options: ["A. Bus", "B. Star", "C. Ring", "D. Mesh"],
    },
    {
      id: 34,
      question: "What is the purpose of a firewall in network security?",
      options: [
        "A. Connect different networks",
        "B. Filter incoming and outgoing network traffic",
        "C. Monitor network speed",
        "D. Configure IP addresses",
      ],
    },
    {
      id: 35,
      question:
        "Which protocol is commonly used for secure communication over a network?",
      options: ["A. FTP", "B. HTTP", "C. SSH", "D. SMTP"],
    },
    {
      id: 36,
      question: "What is the function of a router in a computer network?",
      options: [
        "A. Connects devices within the same network",
        "B. Filters network traffic",
        "C. Routes data between different networks",
        "D. Encrypts data packets",
      ],
    },
    {
      id: 37,
      question: "Which network addressing scheme is used in IPv4?",
      options: [
        "A. 16-bit addresses",
        "B. 32-bit addresses",
        "C. 64-bit addresses",
        "D. 128-bit addresses",
      ],
    },
    {
      id: 38,
      question:
        "What is the purpose of Quality of Service (QoS) in networking?",
      options: [
        "A. Manage network security",
        "B. Prioritize network traffic",
        "C. Block unauthorized access",
        "D. Monitor network performance",
      ],
    },
    {
      id: 39,
      question:
        "Which protocol is used for sending and receiving emails over a network?",
      options: ["A. HTTP", "B. FTP", "C. SMTP", "D. TCP"],
    },
    {
      id: 40,
      question: "What does the term LAN stand for in networking?",
      options: [
        "A. Local Access Network",
        "B. Large Area Network",
        "C. Local Area Network",
        "D. Long Access Network",
      ],
    },
  ];

  return Response.json(questions);
}

