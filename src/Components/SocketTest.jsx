import { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import io from "socket.io-client";

const SocketTest = () => {
    const { authUser } = useAuthContext();
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        if (authUser && authUser.user._id) {
            const newSocket = io("http://localhost:5000", {
                query: { userId: authUser.user._id },
                
                transports: ["websocket"], // Use WebSocket only for more stable connections
            });

            newSocket.on("connect", () => {
                console.log("Connected:", newSocket.id);
            });

            newSocket.on("disconnect", (reason) => {
                console.log("Disconnected:", newSocket.id, reason);
                if (reason === "io server disconnect") {
                    newSocket.connect(); // Reconnect manually if disconnected by server
                }
            });

            newSocket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            setSocket(newSocket);

            return () => {
                newSocket.close();
                setSocket(null);
            };
        } else {
            // Close socket if authUser is not present or doesn't have a valid _id
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]); // Only re-run effect when authUser changes

    console.log(onlineUsers);

    return (
        <div>
            <h1>Socket.io Test</h1>
            <p>Check the backend console for the socket ID.</p>
        </div>
    );
};

export default SocketTest;
