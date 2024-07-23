import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";
import { addConversation } from "../features/conversationSlice";
import GetConversations from "./useGetConversations";
import useConversation from "../zustand/useConversation";

const useAlumConnection = (person) => {
    const { authUser } = useAuthContext();
    const navigate = useNavigate();
    const { setSelectedConversation } = useConversation();
    const dispatch = useDispatch();
    const { loading, conversations } = useSelector(state => state.conversations);

    useEffect(() => {
        const fetchConversations = async () => {
            if (conversations.length === 0 && !loading) {
                await dispatch(GetConversations());

                // No need for an extra state check, rely on `conversations` to update after dispatch
                if (conversations.length === 0) {
                    dispatch(addConversation(person));
                }
            } else {
                const existingConversation = conversations.find(conv => conv._id === person._id);
                if (!existingConversation) {
                    dispatch(addConversation(person));
                }
            }

            setSelectedConversation(person);
            navigate('/messages');
        };

        if (!person) return; // 1. If no person, return

        if (!authUser) {
            navigate('/AlumniLogin'); // 2. If not authUser, navigate to login
            return;
        }

        fetchConversations();

    }, [authUser, dispatch, loading, conversations, navigate, person, setSelectedConversation]);
};

export default useAlumConnection;
